"use client";

import { PropsWithChildren } from "react";
import { BsBgColorType } from "@/types/bootstrap.type";

type CardProps = PropsWithChildren<{ caption: string }>;

const Card: React.FC<CardProps> = ({ children, caption }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h4 className="card-title mb-4">{caption}</h4>
        <div className="table-responsive">
          <table className="table table-centered table-nowrap mb-0">
            {children}
          </table>
        </div>
      </div>
    </div>
  );
};

type CheckboxProps = {
  name: string;
  checked?: boolean;
  onCheck?: (name: string) => void;
};

const Checkbox: React.FC<CheckboxProps> = ({
  name,
  checked,
  onCheck = () => undefined,
}) => {
  return (
    <div className="form-check font-size-16" onClick={() => onCheck(name)}>
      <input
        type="checkbox"
        id={name}
        checked={checked}
        className="form-check-input"
      />
      <label className="form-check-label" htmlFor={name}>
        &nbsp;
      </label>
    </div>
  );
};

type ActionProps = PropsWithChildren<{
  onClick?: VoidFunction;
  variant?: BsBgColorType;
}>;

const Action: React.FC<ActionProps> = ({
  children,
  onClick,
  variant = "primary",
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`btn btn-${variant} btn-sm btn-rounded waves-effect waves-light`}
    >
      {children}
    </button>
  );
};

export const TableBuilder = { Card, Checkbox, Action };
