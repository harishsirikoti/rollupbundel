import * as React from "react";
import { Meta, Story } from "@storybook/react";
import ModalPopup, { IModalOpenProps } from "./ModalPopup";
import { useBoolean } from "@fluentui/react-hooks";

export default {
  title: "Components/Modal",
  component: ModalPopup,
} as Meta;

const Template: Story<IModalOpenProps> = (args) => <ModalPopup {...args} />;

const hideModal = () => {};

export const ModalExample = Template.bind({});
ModalExample.args = {
  modalOpen: true,
  modalHide: hideModal,
  title: "Modal Example",
  headerChildren: <>I'm header</>,
  bodyChildren: <>I'm Main</>,
  footerChildren: <>I'm Footer</>,
};

/* 
 
  const [isModalOpen, { setTrue: showModal, setFalse: hideModal }] = useBoolean(false);
  
<DefaultButton secondaryText="Opens the Sample Modal" onClick={showModal} text="Open Modal" />
  
  
  */
