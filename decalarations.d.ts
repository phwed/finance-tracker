// import { Variant } from "react-native-notificated";

declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.avif";
declare module "*.svg" {
  import React from "react";
  import { SvgProps } from "react-native-svg";
  const content: React.FC<SvgProps>;
  export default content;
}
declare module "*.gif";
declare module "*.json";

// type Variants = {
//   variantName: Variant<typeof YourComponent>;
// };

// declare global {
//   namespace Notificated {
//     interface CustomVariants extends Variants {}
//   }
// }
