import * as React from "react";
import { Meta, Story } from "@storybook/react";
import Footer, { IFooterProps } from "./Footer";
import { render } from "react-dom";

export default {
  title: "Components/Footer",
  component: Footer,
} as Meta;

const Template: Story<IFooterProps> = (args) => <Footer {...args} />;

export const FooterExample = Template.bind({});
FooterExample.args = {
  footerleft: "© Celito. All rights reserved.",
  links: [
    { link: "/Termofuse", title: "Term of use" },
    { link: "/PrivacyPolicy", title: "Privacy Policy" },
  ],
  footer_theme_Class:"red"
};
