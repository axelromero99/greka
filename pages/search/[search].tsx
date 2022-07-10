import * as React from "react";
import {GetServerSideProps} from "next";

import {Product} from "../../product/types";
import productApi from "../../product/api";
import StoreScreen from "../../product/components/Store";
import CartProvider from "../../cart/context";

interface Props {
  products: Product[];
  categoryType: string;
}

const IndexRoute: React.FC<Props> = ({products, categoryType = "todos"}) => {
  return (
    <CartProvider>
      <StoreScreen categoryType={categoryType} products={products} />
    </CartProvider>
  );
};

export const getServerSideProps: GetServerSideProps = async ({params}) => {
  const search = params.search;
  const products = await productApi.searchAndList(search);

  return {
    props: {
      products,
    },
  };
};

export default IndexRoute;
