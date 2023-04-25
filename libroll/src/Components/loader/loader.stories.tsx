import * as React from "react";
import { Meta, Story } from "@storybook/react";
import Loader, { ILoaderProp } from "./Loader";

export default {
  title: "Components/Loder",
  component: Loader,
} as Meta;

const Template: Story<ILoaderProp> = (args) => <Loader {...args} />;

export const LoaderExample = Template.bind({});
LoaderExample.args = {
  loadingText: "Loading...",
  loaderExtraClass: "centerClassName"
};
