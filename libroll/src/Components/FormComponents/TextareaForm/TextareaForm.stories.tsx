import * as React from "react";
import { Meta, Story } from "@storybook/react";
import TextareaForm from "./TextareaForm";
import { ITextareaFormProps } from "./TextareaFormProps";

export default {
  title: "FormControllers/TextareaForm",
  component: TextareaForm,
} as Meta;

const Template: Story<ITextareaFormProps> = (args) => (
  <TextareaForm {...args} />
);

export const Textarea = Template.bind({});
Textarea.args = {
  name: "title",
  label: "title",
  placeholder: "title",
  isRequired: true,
  rows: 5,
};
