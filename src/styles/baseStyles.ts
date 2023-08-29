import { IBaseStyles } from "../models/IBaseStyles";

export function baseStyles<T>(sx?: Partial<IBaseStyles>) {
  return `
  width: ${sx?.width || "unset"};
  height: ${sx?.height || "unset"};
  padding: ${sx?.padding || ""};
  margin: ${sx?.margin || ""};
  text-align: ${sx?.textAlign || "start"};
  max-width: ${sx?.maxWidth || "unset"};
  position: ${sx?.position || ""};
  top: ${sx?.top || ""};
  bottom: ${sx?.bottom || ""};
  left: ${sx?.left || ""};
  right: ${sx?.right || ""};
  border-radius: ${sx?.borderRadius || ""};
  background-color: ${sx?.backgroundColor || ""}
`;
}
