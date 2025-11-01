import { PropsWithChildren } from "react";
import { Button } from "@/components/shadcn/ui/button";

interface Props extends PropsWithChildren {}

export const SubmitButton: React.FC<Props> = ({ children }) => {
  return <Button type="submit">{children}</Button>;
};
