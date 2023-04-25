import * as React from "react";
import { Meta, Story } from "@storybook/react";
import PageNotFound, { IPageNotFoundProps } from "./PageNotFound";


export default {
  title: "Components/Pagenotfound",
  component: PageNotFound,
} as Meta;

const Template: Story<IPageNotFoundProps> = (args) => (
  <PageNotFound {...args} />
);


export const PAGENOTFOUND = Template.bind({});
PAGENOTFOUND.args = {
};