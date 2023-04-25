import type { StorybookConfig } from "@storybook/react-webpack5";
const path = require("path");
const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials", "@storybook/addon-interactions", "@storybook/preset-scss", "@storybook/addon-mdx-gfm"],
  framework: "@storybook/react",
  docs: {
    autodocs: "tag"
  },
  webpackFinal: async (config, {
    configType
  }) => {
    // Make whatever fine-grained changes you need
    // config.module.rules.push({
    //   test: /\.scss$/,
    //   use: ["style-loader", "css-loader", "sass-loader"],
    //   include: path.resolve(__dirname, "../"),
    // });
    return config;
  }
};
export default config;