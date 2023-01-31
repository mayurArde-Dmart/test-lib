import { Button, WithStyles } from "@material-ui/core";
import React from "react";
import { generateStyle } from "../../utils/style";
import Styles from "./style";
interface ButtonProps extends WithStyles<typeof Styles> {
  children?: React.ReactNode;
  label: string;
}

const MeraDmartButton2: React.FC<ButtonProps> = (props: ButtonProps) => {
  return <Button>{props.label}</Button>;
};

// export default MeraDmartButton;

export default generateStyle(Styles, "MDF-MeraDmartButton2")(MeraDmartButton2);
