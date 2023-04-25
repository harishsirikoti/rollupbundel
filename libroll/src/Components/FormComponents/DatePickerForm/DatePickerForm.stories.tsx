import * as React from "react";
import { Meta, Story } from "@storybook/react";
import DatePickerForm, { IDatePickerFormProps } from "./DatePickerForm";

export default {
  title: "FormControllers/DatePickerForm",
  component: DatePickerForm,
} as Meta;

const Template: Story<IDatePickerFormProps> = (args) => (
  <DatePickerForm {...args} />
);

export const DatePicker = Template.bind({});
DatePicker.args = {
  name: "name",
  label: "label",
  minDate: new Date(),
  defaultSelectdate: new Date(),
  isdisabled: true,
};
