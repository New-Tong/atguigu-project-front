import stylelintConfigStandard from "stylelint-config-standard";
import stylelintConfigHtmlVue from "stylelint-config-html/vue";
import stylelintConfigStandardScss from "stylelint-config-standard-scss";
import stylelintConfigRecommendedVueScss from "stylelint-config-recommended-vue/scss";
import stylelintConfigRecessOrder from "stylelint-config-recess-order";
import stylelintConfigPrettier from "stylelint-config-prettier";

/** @type {import('stylelint').Config} */
export default {
  extends: [
    stylelintConfigStandard,
    stylelintConfigHtmlVue,
    stylelintConfigStandardScss,
    stylelintConfigRecommendedVueScss,
    stylelintConfigRecessOrder,
    stylelintConfigPrettier,
  ],
  overrides: [
    {
      files: ["**/*.{scss,css,vue,html}"],
      customSyntax: "postcss-scss",
    },
    {
      files: ["**/*.{html,vue}"],
      customSyntax: "postcss-html",
    },
  ],
  ignoreFiles: [
    "**/*.{js,jsx,tsx,ts,json,md,yaml}",
    "dist/**",
    "node_modules/**",
  ],
  rules: {
    "value-keyword-case": null,
    "no-descending-specificity": null,
    "function-url-quotes": "always",
    "no-empty-source": null,
    "selector-class-pattern": null,
    "property-no-unknown": null,
    "block-opening-brace-space-before": "always",
    "value-no-vendor-prefix": null,
    "property-no-vendor-prefix": null,
    "selector-pseudo-class-no-unknown": [
      true,
      { ignorePseudoClasses: ["global", "v-deep", "deep"] },
    ],
  },
};
