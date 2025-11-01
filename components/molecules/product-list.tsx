import { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {}

export const ProductList: React.FC<Props> = ({ children }) => {
  return <div>{children}</div>;
};
