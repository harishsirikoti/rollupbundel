import * as React from "react";
import { Meta, Story } from "@storybook/react";
import DropdownForm from "./DropdownForm";
import { IDropDownProps } from "./IDropDownProps";
import { DropdownMenuItemType } from "@fluentui/react";

export default {
  title: "FormControllers/DropdownForm",
  component: DropdownForm,
} as Meta;

const Template: Story<IDropDownProps> = (args) => <DropdownForm {...args} />;

const dropoptions = [
  {
    key: "fruitsHeader",
    text: "Fruits",
    itemType: DropdownMenuItemType.Header,
  },
  { key: "apple", text: "Apple" },
  { key: "banana", text: "Banana" },
  { key: "orange", text: "Orange", disabled: true },
  { key: "grape", text: "Grape" },
  { key: "divider_1", text: "-", itemType: DropdownMenuItemType.Divider },
  {
    key: "vegetablesHeader",
    text: "Vegetables",
    itemType: DropdownMenuItemType.Header,
  },
  { key: "broccoli", text: "Broccoli" },
  { key: "carrot", text: "Carrot" },
  { key: "lettuce", text: "Lettuce" },
];

export const Dropdown = Template.bind({});
Dropdown.args = {
  label: "label",
  name: "name",
  placeholder: "placeholder",
  isRequired: true,
  options: dropoptions,
};
