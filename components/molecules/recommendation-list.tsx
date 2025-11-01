import { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {}

export const RecommendationList: React.FC<Props> = ({ children }) => {
  return <div>{children}</div>;
};
