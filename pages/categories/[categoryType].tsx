import * as React from "react";
import {GetStaticProps, GetStaticPaths} from "next";

import {Product} from "../../product/types";
import productApi from "../../product/api";
import StoreScreen from "../../product/components/Store";
import CartProvider from "../../cart/context";

interface Props {
  products: Product[];
  categoryType: string;
}

const IndexRoute: React.FC<Props> = ({products, categoryType}) => {
  return (
    <CartProvider>
      <StoreScreen categoryType={categoryType} products={products} />
    </CartProvider>
  );
};

export const getStaticProps: GetStaticProps = async ({params}) => {
  let products;
  const categoryType = params.categoryType;

  if (params.categoryType === "todos") {
    products = await productApi.list();
  } else {
    products = await productApi.listByCategory(categoryType);
  }

  return {
    props: {
      products,
      categoryType,
    },
    revalidate: 10, // In seconds
  };
};

export const getStaticPaths: GetStaticPaths<{
  categoryType: string;
}> = async () => {
  return {
    paths: [
      {params: {categoryType: "todos"}},
      {params: {categoryType: "tops/remeras"}},
      {params: {categoryType: "jeans"}},
      {params: {categoryType: "shorts/polleras"}},
      {params: {categoryType: "abrigos"}},
      {params: {categoryType: "vestidos"}},
    ],
    fallback: "blocking",
  };
};

export default IndexRoute;
