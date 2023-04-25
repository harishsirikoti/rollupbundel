import * as React from "react";
import { Meta, Story } from "@storybook/react";
import MessageBox, { IMessageBox } from "./Alert";
import {
    MessageBarType,
  } from "@fluentui/react";

export default {
  title: "Components/Alert",
  component: MessageBox,
} as Meta;

const Template: Story<IMessageBox> = (args) => (
  <MessageBox {...args} />
);


export const ALERT = Template.bind({});
ALERT.args = {
   dataModel:{
       messageText: 'note',
       messageBarType: MessageBarType.info,
   }
};

