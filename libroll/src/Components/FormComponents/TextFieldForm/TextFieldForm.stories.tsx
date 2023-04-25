import * as React from "react";
import { Meta, Story } from "@storybook/react";
import TextFieldForm from "./TextFieldForm";
import { ITextFieldFormProps } from "./ITextFieldFormProps";

export default {
  title: "FormControllers/TextFieldForm",
  component: TextFieldForm,
} as Meta;

const Template: Story<ITextFieldFormProps> = (args) => (
  <TextFieldForm {...args} />
);

export const TextField = Template.bind({});
TextField.args = {
  name: "title",
  label: "title",
  placeholder: "title",
  isRequired: false,
};

export const TextFieldMultiLine = Template.bind({});
TextFieldMultiLine.args = {
  name: "title",
  label: "title",
  placeholder: "title",
  isRequired: false,
  rows:5,
  multiline: true,
};
