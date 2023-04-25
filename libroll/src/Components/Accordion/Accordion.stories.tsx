import * as React from "react";
import { Meta, Story } from "@storybook/react";

import { IIconProps } from "@fluentui/react";
import Accordion, { IAccordionProps } from "./Accordion";
export default {
  title: "Components/Accordion",
  component: Accordion,
} as Meta;

const Template: Story<IAccordionProps> = (args) => <Accordion {...args} />;

const minimizeIcon: IIconProps = { iconName: "dragIcon" };
const editIconImg: IIconProps = { iconName: "HiOutlineChevronRight" };
const expned: IIconProps = { iconName: "HiOutlineChevronRight" };

export const AccordionTemp = Template.bind({});
AccordionTemp.args = {
  title: "Header",
  collapsed: false,
  editPageNumber: 1,
  goToTab: 1,
  minimizeIcon: minimizeIcon,
  editIconImg: editIconImg,
  expned: expned,
  children: (
    <>
      <h1>Content Gose here</h1>
    </>
  ),
};

export const AccordionTemp1 = Template.bind({});
AccordionTemp1.args = {
  title: "Header",
  collapsed: true,
  editPageNumber: 1,
  goToTab: 1,
  minimizeIcon: minimizeIcon,
  editIconImg: editIconImg,
  expned: expned,
  children: (
    <>
      <h1>Content Gose here</h1>
    </>
  ),
};

/* 
Basic example

<Accordion
title="User Roles and Due Dates"
collapsed={true}
iconCSS="ms-icon ms-icon-edit"
editPageNumber={2}
setEditPage={setPreCurrentTab}
> 

*/
