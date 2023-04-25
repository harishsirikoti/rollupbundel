import * as React from "react";
import { Meta, Story } from "@storybook/react";
import MessageBox, { IMessageBox } from "./Messagebox";
import { MessageBarType } from "@fluentui/react";

export default {
  title: "Components/MessageBox",
  component: MessageBox,
} as Meta;

const Template: Story<IMessageBox> = (args) => <MessageBox {...args} />;

//const resetChoice = React.useCallback(() => setChoice(undefined), []);

export const Messageinfo = Template.bind({});
Messageinfo.args = {
  dataModel: {
    messageBarType: MessageBarType.info,
    messageText: "please enter your message text",
  },
};
const resetChoice = () => {

}

export const MessageError = Template.bind({});
MessageError.args = {
  dataModel: {
    messageBarType: MessageBarType.error,
    messageText: "please enter your message text",
  },
};
