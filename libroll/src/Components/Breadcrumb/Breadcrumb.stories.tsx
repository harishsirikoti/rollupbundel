import * as React from "react";
import { Meta, Story } from "@storybook/react";
import BreadcrumbItems, { IBreadcrumbProps } from "./Breadcrumb";

export default {
  title: "Components/Breadcrumb",
  component: BreadcrumbItems,
} as Meta;

const Template: Story<IBreadcrumbProps> = (args) => (
 <BreadcrumbItems {...args} />
);

const BREADCRUMBLISTS = [
  { text: `page title`, key: "f1", to: "/" },
  {
    text: `current page`,
    key: "f2",
    to: "/",
    isCurrentItem: true,
  },
];

export const BREADCRUMB = Template.bind({});
BREADCRUMB.args = {
  bLists: BREADCRUMBLISTS,
  children: <>children</>,
  title: 'Template'
};

/* 
Basic example

  const BREADCRUMBLISTS = [
    { text: `${parmsId}`, key: "f1", to: "/" },
    {
      text: `Version History`,
      key: "f2",
      to: "/",
      isCurrentItem: true,
    },
  ];

 <BreadcrumbItems title={"Page title gose here"} bLists={BREADCRUMBLISTS}>
        <CommandBar
          items={[]}
          overflowItems={Version_OVERFLOWITEMS}
          className=""
          ariaLabel="Version History Actions"
          primaryGroupAriaLabel="Version History Actions"
          farItemsGroupAriaLabel="Version History Actions"
        />
  </BreadcrumbItems>

*/
