import { PropsWithChildren } from "react";

type PropsType = PropsWithChildren<{
  title: React.ReactNode;
}>;

export const Hgroup: React.FC<PropsType> = ({ children, title }) => {
  return (
    <div>
      <h6 className="font-size-15 mb-1 fw-normal">{title}</h6>
      <p className="text-muted font-size-13 mb-0">{children}</p>
    </div>
  );
};
