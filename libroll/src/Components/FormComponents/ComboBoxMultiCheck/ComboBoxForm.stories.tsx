import * as React from "react";
import { Meta, Story } from "@storybook/react";
import { IComboBoxFormProps } from "./IComboBox";
import ComboBoxMultiCheck from "./ComboBoxMultiCheck";

export default {
  title: "FormControllers/ComboBoxMultiCheck",
  component: ComboBoxMultiCheck,
} as Meta;

const Template: Story<IComboBoxFormProps> = (args) => (
  <ComboBoxMultiCheck {...args} />
);

export const ComboBox = Template.bind({});
ComboBox.args = {
  name: "name",
  label: "label",
  isRequired: true,
  options: [],
  placeholder: "Select",
  selectedKeys: [],
  setSelectedKeys: [],
  isReadyOnly: true,
  isdisabled: true,
};
