import * as React from "react";
import { Meta, Story } from "@storybook/react";
import SortGrid from "./sortGrid";

export default {
    title: "Components/SortGrid",
    component: SortGrid,
} as Meta;

const Template: Story<any> = (args) => (
    <SortGrid {...args} />
);


export const SORTGRID = Template.bind({});
SORTGRID.args = {
    
};