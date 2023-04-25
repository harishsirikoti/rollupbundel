import * as React from "react";
import { Meta, Story } from "@storybook/react";
import ChoiceGroupForm from "./ChoiceGroupForm";
import { IChoiceGroupFormProps } from "./IChoiceGroupForm";

export default {
  title: "FormControllers/ChoiceGroupForm",
  component: ChoiceGroupForm,
} as Meta;

const Template: Story<IChoiceGroupFormProps> = (args) => (
  <ChoiceGroupForm {...args} />
);

const YESORNO = [
  { key: "Yes", text: "Yes" },
  { key: "No", text: "No" },
];

export const ChoiceGroup = Template.bind({});
ChoiceGroup.args = {
  options:YESORNO,
  name: "title",
  label: "title", 
  isRequired: false,
  control: null
};
  