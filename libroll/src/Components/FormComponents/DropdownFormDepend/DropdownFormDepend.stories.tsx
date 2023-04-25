import * as React from "react";
import { Meta, Story } from "@storybook/react";
import DropdownFormDepend, { IDropDownProps } from "./DropdownFormDepend";

export default {
  title: "FormControllers/DropdownFormDepend",
  component: DropdownFormDepend,
} as Meta;

const Template: Story<IDropDownProps> = (args) => (
  <DropdownFormDepend {...args} />
);

export const DropdownFormDepent = Template.bind({});
DropdownFormDepent.args = {
  name: "Document_Type",
  label: "Document Type",
  isRequired: true,
  options: [],
  placeholder: "Select",
  handleRelationDropdown: null,
  isdisabled: true,
};
