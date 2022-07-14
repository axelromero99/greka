import axios from "axios";
import Papa from "papaparse";

import {Option as IOption, Product as IProduct} from "./types";

interface RawOption extends IOption {
  type: "option";
}

interface RawProduct extends IProduct {
  type: "product";
}

class Product implements IProduct {
  id: IProduct["id"];
  title: IProduct["title"];
  category: IProduct["category"];
  description: IProduct["description"];
  image: IProduct["image"];
  gallery: IProduct["gallery"];
  options: IProduct["options"];
  price: IProduct["price"];
  discount: IProduct["discount"];
  stock: IProduct["stock"];

  constructor() {
    this.options = {} as Product["options"];
  }

  set(product: RawProduct) {
    Object.assign(this, {
      id: product.id,
      title: product.title,
      category: product.category,
      description: product.description,
      image: product.image,
      gallery: product.gallery,
      price: Number(product.price),
      discount: product.discount,
      stock: product.stock,
    });
  }

  addOption(option: RawOption) {
    if (!this.options[option.category]) {
      this.options[option.category] = [];
    }

    this.options[option.category].push({
      id: option.id,
      title: option.title,
      category: option.category,
      description: option.description,
      image: option.image,
      price: Number(option.price),
    });
  }

  toJSON(): IProduct {
    const product = {
      id: this.id,
      title: this.title,
      category: this.category,
      description: this.description,
      image: this.image,
      gallery: this.gallery,
      options: this.options,
      price: Number(this.price),
      discount: this.discount,
      stock: this.stock,
    };

    if (Object.keys(product.options).length === 0) {
      delete product.options;
    }

    return product;
  }
}

/**
 * It takes an array of raw products and options, and returns an array of normalized products
 * @param {(RawProduct | RawOption)[]} data - (RawProduct | RawOption)[]
 * @returns An array of IProducts
 */
function normalize(data: (RawProduct | RawOption)[]) {
  const products = new Map<RawProduct["id"], Product>();

  for (const item of data) {
    if (!products.has(item.id)) {
      products.set(item.id, new Product());
    }

    if (item.type === "product") {
      const product = products.get(item.id);

      product.set(item);
    } else if (item.type === "option") {
      const product = products.get(item.id);

      item && product.addOption(item);
    }
  }

  const normalized: IProduct[] = Object.values(Object.fromEntries(products)).map((product) =>
    product.toJSON(),
  );

  return normalized;
}

/**
 * It takes an array of raw products and options, and returns an array of normalized offers
 * @param {(RawProduct | RawOption)[]} data - (RawProduct | RawOption)[]
 * @returns An array of IProducts
 */
function normalizeOffers(data: (RawProduct | RawOption)[]) {
  const products = new Map<RawProduct["id"], Product>();

  for (const item of data) {
    if (!products.has(item.id) && item.discount !== "") {
      products.set(item.id, new Product());

      if (item.type === "product") {
        const product = products.get(item.id);

        product.set(item);
      }
    }
  }

  const normalized: IProduct[] = Object.values(Object.fromEntries(products)).map((product) =>
    product.toJSON(),
  );

  return normalized;
}

/**
 * It takes an array of raw products and options, and returns an array of normalized products, filtered by categories
 * @param {(RawProduct | RawOption)[]} data - (RawProduct | RawOption)[]
 * @param categoryType - The category type of the products you want to normalize.
 * @returns An array of IProducts
 */
function normalizeWithCategory(data: (RawProduct | RawOption)[], categoryType) {
  const products = new Map<RawProduct["id"], Product>();

  for (const item of data) {
    if (!products.has(item.id) && item.category === categoryType.toLowerCase()) {
      products.set(item.id, new Product());
    }

    if (item.type === "product" && item.category === categoryType.toLowerCase()) {
      const product = products.get(item.id);

      product.set(item);
    } else if (item.type === "option") {
      const product = products.get(item.id);

      item && product && product.addOption(item);
    }
  }

  const normalized: IProduct[] = Object.values(Object.fromEntries(products)).map((product) =>
    product.toJSON(),
  );

  return normalized;
}

/**
 * It takes an array of raw products and options, and returns an array of normalized products
 * @param {(RawProduct | RawOption)[]} data - (RawProduct | RawOption)[]
 * @param search - The search term
 * @returns An array of IProducts
 */
function normalizeSearch(data: (RawProduct | RawOption)[], search) {
  const products = new Map<RawProduct["id"], Product>();

  for (const item of data) {
    let lastProductTitle = "";

    if (
      !products.has(item.id) &&
      item.title.toLowerCase().includes(search) &&
      item.type === "product"
    ) {
      products.set(item.id, new Product());
    }

    if (item.type === "product" && item.title.toLowerCase().includes(search)) {
      const product = products.get(item.id);

      product.set(item);
      lastProductTitle = item.title.toLocaleLowerCase();
    }

    if (item.type === "option" && lastProductTitle.includes(search)) {
      const product = products.get(item.id);

      item && product.addOption(item);
    }
  }

  const normalized: IProduct[] = Object.values(Object.fromEntries(products)).map((product) =>
    product.toJSON(),
  );

  return normalized;
}

export default {
  list: async (): Promise<IProduct[]> => {
    return axios
      .get(process.env.PRODUCTS_CSV, {
        responseType: "blob",
      })
      .then(
        (response) =>
          new Promise<IProduct[]>((resolve, reject) => {
            Papa.parse(response.data, {
              header: true,
              complete: (results) => {
                const data = normalize(results.data as (RawProduct | RawOption)[]);

                return resolve(data);
              },
              error: (error) => reject(error.message),
            });
          }),
      );
  },
  listOffers: async (): Promise<IProduct[]> => {
    return axios
      .get(process.env.PRODUCTS_CSV, {
        responseType: "blob",
      })
      .then(
        (response) =>
          new Promise<IProduct[]>((resolve, reject) => {
            Papa.parse(response.data, {
              header: true,
              complete: (results) => {
                const data = normalizeOffers(results.data as (RawProduct | RawOption)[]);

                return resolve(data);
              },
              error: (error) => reject(error.message),
            });
          }),
      );
  },
  listByCategory: async (categoryType: string | string[]): Promise<IProduct[]> => {
    return axios
      .get(process.env.PRODUCTS_CSV, {
        responseType: "blob",
      })
      .then(
        (response) =>
          new Promise<IProduct[]>((resolve, reject) => {
            Papa.parse(response.data, {
              header: true,
              complete: (results) => {
                const data = normalizeWithCategory(
                  results.data as (RawProduct | RawOption)[],
                  categoryType,
                );

                return resolve(data);
              },
              error: (error) => reject(error.message),
            });
          }),
      );
  },
  searchAndList: async (search: string | string[]): Promise<IProduct[]> => {
    return axios
      .get(process.env.PRODUCTS_CSV, {
        responseType: "blob",
      })
      .then(
        (response) =>
          new Promise<IProduct[]>((resolve, reject) => {
            Papa.parse(response.data, {
              header: true,
              complete: (results) => {
                const data = normalizeSearch(results.data as (RawProduct | RawOption)[], search);

                return resolve(data);
              },
              error: (error) => reject(error.message),
            });
          }),
      );
  },
};
