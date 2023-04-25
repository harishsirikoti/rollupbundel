import * as React from "react";
import { Meta, Story } from "@storybook/react";
import PrimaryButtons, {IButtonProps} from "./PrimaryButtons"; 


export default {
  title: "Components/PrimaryButton",
  component: PrimaryButtons, 
} as Meta;

const Template: Story<IButtonProps> = (args) => <PrimaryButtons {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: "Button",
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Button",
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
  label: "Button",
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
  label: "Button",
};
