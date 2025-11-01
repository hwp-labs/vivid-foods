import React, { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {}

const data = [
  "About Us",
  "Contact us",
  "locate us",
  "customer feedback",
];

export const Footer: React.FC<Props> = ({ children }) => {
  return (
    <ul>
      {data.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  );
};
