import * as React from "react";
import { Meta, Story } from "@storybook/react";
import ComboBoxForm, { IComboBoxFormProps } from "./ComBoxForm";

export default {
  title: "Components/ComboBoxForm",
  component: ComboBoxForm,
} as Meta;

const Template: Story<IComboBoxFormProps> = (args) => (
  <ComboBoxForm {...args} />
);


export const COMBOBOXFORM = Template.bind({});
COMBOBOXFORM.args = {
    name: 'Name',
  label: 'label'
};
