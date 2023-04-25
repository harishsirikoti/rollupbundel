import * as React from "react";
import { Meta, Story } from "@storybook/react";
import PivotVertical, { IPivotProps } from "./PivotVertical";

export default {
  title: "Components/Pivot",
  component: PivotVertical,
} as Meta;

const Template: Story<IPivotProps> = (args) => <PivotVertical {...args} />;

export const PivotVerticalExample = Template.bind({});
PivotVerticalExample.args = {
  items: [
    {
      title: "General",
      children: 'General',
    },
    {
      title: "User",
      children: 'User',
    },
    {
      title: "Due Dates",
      children: 'Due Dates',
    },
    {
      title: "Documents",
      children: 'Documents',
    },
    {
      title: "Preview",
      children: 'Preview',
    },
  ],
};
