import * as React from "react";
import { Meta, Story } from "@storybook/react";
import CustomPanel, { IcustomPanelProps } from "./CustomPanel";

export default {
  title: "Components/CustomPanel",
  component: CustomPanel,
} as Meta;

const Template: Story<IcustomPanelProps> = (args) => (
  <CustomPanel {...args} />
);


export const CUSTOMPANEL = Template.bind({});
CUSTOMPANEL.args = {
      title:"Controlled Document Request",
      panelOpen:true,
      // panelHide: false,
      panelClassName:"createPanel",
};