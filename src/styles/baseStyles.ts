import { IBaseStyles } from "../models/IBaseStyles";

function baseStyles<T>(sx?: Partial<IBaseStyles>) {
  return `
  ${sx?.display ? `display: ${sx?.display}` : ""};
  width: ${sx?.width || "unset"};
  height: ${sx?.height || "unset"};
  padding: ${sx?.padding || ""};
  margin: ${sx?.margin || ""};
  ${sx?.textAlign ? `text-align: ${sx?.textAlign};` : ""}
  max-width: ${sx?.maxWidth || "unset"};
  position: ${sx?.position || ""};
  top: ${sx?.top || ""};
  bottom: ${sx?.bottom || ""};
  left: ${sx?.left || ""};
  right: ${sx?.right || ""};
  ${sx?.transform ? `transform: ${sx?.transform}` : ""};
  border-radius: ${sx?.borderRadius || ""};
  background-color: ${sx?.backgroundColor || ""};
  color: ${sx?.color || ""};
`;
}

export default baseStyles;
