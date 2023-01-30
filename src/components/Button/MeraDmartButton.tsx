import { Button } from "@material-ui/core";
import React, { ReactElement } from "react";

export interface ButtonProps {
  children: string;
  label: string;
  variant: "text" | "outlined" | "contained" | undefined;
  type: "button" | "submit" | "reset" | undefined;
  startIcon?: ReactElement;
  endIcon?: ReactElement;
}

const MeraDmartButton = (props: ButtonProps) => {
  return (
    <Button variant={props.variant} type={props.type}>
      {props.label}
    </Button>
  );
};

export default MeraDmartButton;
