import * as React from "react";
import { Meta, Story } from "@storybook/react";

import { useBoolean } from "@fluentui/react-hooks";
import Header, { IHeader } from "./Header";
import {
  ICreateMenuAppModel,
  IHeaderNavItem,
  IMegamenuAppModel,
} from "./IHeader";
import { IconButton, IIconProps } from "@fluentui/react";

export default {
  title: "Components/Header",
  component: Header,
} as Meta;

const Template: Story<IHeader> = (args) => <Header {...args} />;

const hideModal = () => {};
const megamenuCollection: IMegamenuAppModel[] = [
  {
    id: "1",
    title: "Quality Suite",
    menus: [
      {
        id: "CONTROLDOCS",
        name: "Controlled Docs",
        discription:
          "Lorem Ipsum is simply dummy text of the printing and typesetting.",
        url: "/ControlledDocs",
        image: "",
      },
      {
        id: "2",
        name: "LMS",
        discription:
          "Lorem Ipsum is simply dummy text of the printing and typesetting.",
        url: "/logs",
        image: "",
      },
      {
        id: "3",
        name: "Change Control",
        discription:
          "Lorem Ipsum is simply dummy text of the printing and typesetting.",
        url: "/logs",
        image: "",
      },
      {
        id: "4",
        name: "Event",
        discription:
          "Lorem Ipsum is simply dummy text of the printing and typesetting.",
        url: "/event",
        image: "",
      },
    ],
  },
  {
    id: "2",
    title: "Clinical Suite",
    menus: [
      {
        id: "1",
        name: "eTMF",
        discription:
          "Lorem Ipsum is simply dummy text of the printing and typesetting.",
        url: "/eTMF",
        image: "",
      },
      {
        id: "2",
        name: "quisquerutrun",
        discription:
          "Lorem Ipsum is simply dummy text of the printing and typesetting.",
        url: "/quisquerutrun",
        image: "",
      },
      {
        id: "3",
        name: "inter tincident",
        discription:
          "Lorem Ipsum is simply dummy text of the printing and typesetting.",
        url: "/logs",
        image: "",
      },
    ],
  },
  {
    id: "3",
    title: " ",
    menus: [
      {
        id: "1",
        name: "Common",
        discription:
          "Lorem Ipsum is simply dummy text of the printing and typesetting.",
        url: "/Common",
        image: "",
      },
    ],
  },
];
const createMenuCollection: ICreateMenuAppModel[] = [
  {
    id: "CREATECD",
    name: "Control Docs",
    label: "Control Docs",
    discription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting.",
    routeURL: "/ControlledDocs/createCD",
    image: "",
    active: false,
  },
  {
    id: "2",
    name: "LMS",
    discription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting.",
    routeURL: "/logs",
    image: "",
    active: false,
  },
  {
    id: "3",
    name: "Change Control",
    discription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting.",
    routeURL: "/logs",
    image: "",
    active: false,
  },
  {
    id: "4",
    name: "Event",
    discription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting.",
    routeURL: "/event",
    image: "",
    active: false,
  },
];

const NAVDATAITEM: IHeaderNavItem[] = [
  {
    id: "HOME",
    label: "Home",
    routeURL: "/home",
    active: false,
  },
  {
    id: "LOG",
    label: "Log",
    routeURL: "/log",
    active: false,
  },
  {
    id: "REPORTS",
    label: "Reports",
    routeURL: "/reports",
    active: false,
  },
  {
    id: "LIBRARY",
    label: "Library",
    routeURL: "/library",
    active: false,
  },
];
const notificationIcon: IIconProps = { iconName: "Notification" };

export const HeaderExample = Template.bind({});
HeaderExample.args = {
  logo: "abc.png",
  navItems: NAVDATAITEM,
  megaMenuItems: megamenuCollection,
  createMenuItems: createMenuCollection,
  actionItems: [
    {
      name: "Notification",
      action: () => <div>Notification Component</div>,
      component: () => (
        <IconButton
          iconProps={notificationIcon}
          className="imageIcon"
          title="Notifications"
          ariaLabel="Notifications"
        />
      ),
      isEnabled: true,
    },
    {
      name: "signout",
      action: () => <div>signout Component</div>,
      component: () => <div>signout Component</div>,
      isEnabled: false,
    },
  ],
  currentRouteId: "active",
  isBackdrop: true,
};
