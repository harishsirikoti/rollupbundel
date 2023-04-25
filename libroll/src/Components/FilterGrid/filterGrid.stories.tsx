import * as React from "react";
import { Meta, Story } from "@storybook/react";
import FilterGrid, { IFilterData } from "./filterGrid";

export default {
    title: "Components/FilterGrid",
    component: FilterGrid,
} as Meta;

const Template: Story<IFilterData> = (args) => (
    <FilterGrid {...args} />
);


export const FILTERGRID = Template.bind({});
FILTERGRID.args = {
    Status: '',
    PendingTasksName: ''
};