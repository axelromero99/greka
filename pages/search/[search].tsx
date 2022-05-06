import * as React from "react";
import {GetStaticProps} from "next";
import {GetServerSideProps} from "next";

import {Product} from "../../product/types";
import productApi from "../../product/api";
import cartApi from "../../cart/api";
import StoreScreen from "../../product/screens/Store";
import {Field} from "../../cart/types";
import CartProvider from "../../cart/context";

interface Props {
  products: Product[];
  fields: Field[];
  categoryType: string;
}

const IndexRoute: React.FC<Props> = ({products, fields, categoryType = "todos"}) => {
  return (
    <CartProvider fields={fields}>
      <StoreScreen categoryType={categoryType} fields={fields} products={products} />
    </CartProvider>
  );
};

export const getServerSideProps: GetServerSideProps = async ({params}) => {
  const search = params.search;
  const products = await productApi.searchAndList(search);

  const fields = await cartApi.list();

  return {
    props: {
      products,
      fields,
    },
  };
};

export default IndexRoute;
