import { baseConfig } from "../eslint.config.js";

export default {
  ...baseConfig,
  extends: ["next/core-web-vitals", "next/typescript"],
  rules: {},
};
