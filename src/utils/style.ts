import { Theme, withStyles } from "@material-ui/core";
import { Styles } from "@material-ui/styles";
import { compact } from "lodash-es";
// import { compact } from "lodash-es";
import { nanoid } from "nanoid";

// export const rem = (value: number, base = 16) => `${(value / base).toFixed(2)}rem`;

export const generateStyle = (style: Styles<Theme, {}, string>, name = "") => {
  const id = nanoid(6);
  const { REACT_APP_ID = "" } = process.env;
  const names = compact([id, REACT_APP_ID, name]).join("-");
  return withStyles(style, { name: `${names}` });
};
