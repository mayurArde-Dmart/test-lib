import { Button, WithStyles } from "@material-ui/core";
import React, { ReactElement } from "react";
import { generateStyle } from "../../utils/style";
import Styles from "./style";
interface ButtonProps extends WithStyles<typeof Styles> {
  children?: React.ReactNode;
  label: string;
  variant: "text" | "outlined" | "contained" | undefined;
  type: "button" | "submit" | "reset" | undefined;
  startIcon?: ReactElement;
  endIcon?: ReactElement;
}

const MeraDmartButton: React.FC<ButtonProps> = (props: ButtonProps) => {
  return (
    <Button variant={props.variant} type={props.type}>
      {props.label}
    </Button>
  );
};

// export default MeraDmartButton;

export default generateStyle(Styles, "MDF-MeraDmartButton")(MeraDmartButton);
