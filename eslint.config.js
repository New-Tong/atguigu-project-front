import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginVue from "eslint-plugin-vue";

/** @type {import('eslint').Linter.Config[]} */
export default [
  // 基础文件匹配
  {
    files: ["**/*.{js,mjs,cjs,ts,vue}"],
    ignores: [
      "**/node_modules/", // 保持默认忽略
      "dist/", // 新增构建目录
      "test/*.spec.ts", // 示例：忽略测试文件
      // 原.eslintignore内容按格式迁移至此
    ],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.node,
        jest: true,
      },
    },
  },

  // ESLint 基础规则
  pluginJs.configs.recommended,

  // TypeScript 配置
  ...tseslint.configs.recommended,
  {
    rules: {
      "@typescript-eslint/no-unused-vars": "error",
      "@typescript-eslint/prefer-ts-expect-error": "error",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-non-null-assertion": "off",
      "@typescript-eslint/no-namespace": "off",
      "@typescript-eslint/semi": "off",
    },
  },

  // Vue 配置
  ...pluginVue.configs["flat/essential"],
  {
    files: ["**/*.vue"],
    languageOptions: {
      parserOptions: {
        parser: tseslint.parser,
        ecmaFeatures: { jsx: true },
        jsxPragma: "React",
      },
    },
    rules: {
      "vue/multi-word-component-names": "off",
      "vue/script-setup-uses-vars": "error",
      "vue/no-mutating-props": "off",
      "vue/attribute-hyphenation": "off",
    },
  },

  // 公共规则
  {
    rules: {
      "no-var": "error",
      "no-multiple-empty-lines": ["warn", { max: 1 }],
      "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
      "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
      "no-unexpected-multiline": "error",
      "no-useless-escape": "off",
    },
  },
];
