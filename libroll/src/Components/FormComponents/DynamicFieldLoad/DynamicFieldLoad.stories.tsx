import * as React from "react";
import { Meta, Story } from "@storybook/react";
import DynamicFieldLoad, { IDynamicFieldLoad } from "./DynamicFieldLoad";

export default {
  title: "DynamicFormField/DynamicFieldLoad",
  component: DynamicFieldLoad,
} as Meta;

const Template: Story<IDynamicFieldLoad> = (args) => (
  <DynamicFieldLoad {...args} />
);

export const DynamicField = Template.bind({});

DynamicField.args = {
  fieldName: "",
  item: [],
};
