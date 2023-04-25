import * as React from "react";
import { Meta, Story } from "@storybook/react";
import ConfirmDialog, { IConfirmDialogProp } from "./confrimDialog";

export default {
  title: "Components/Dialogs",
  component: ConfirmDialog,
} as Meta;

const Template: Story<IConfirmDialogProp> = (args) => (
  <ConfirmDialog {...args} />
);

const onRestDocument = () => {
  alert(`Confirm dialogStatus`);
};
export const SuccessDialog = Template.bind({});
SuccessDialog.args = {
  toggleHideDialog: true,
  hideDialog: false,
  title: "Success!",
  discription: "Your request has successfully submitted.",
  onConfirm: onRestDocument,
  dialogStatus: "success",
  Imagepath: "",
  subText: "",
};

export const confirmDialog = Template.bind({});
confirmDialog.args = {
  toggleHideDialog: true,
  hideDialog: false,
  title: "Confirm!",
  discription: "Your request has successfully submitted.",
  onConfirm: onRestDocument,
  dialogStatus: "confirm",
};

export const saveDialog = Template.bind({});
saveDialog.args = {
  toggleHideDialog: true,
  hideDialog: false,
  title: "save!",
  discription: "Your request has successfully submitted.",
  onConfirm: onRestDocument,
  dialogStatus: "save",
};

export const warningDialog = Template.bind({});
warningDialog.args = {
  toggleHideDialog: true,
  hideDialog: false,
  title: "warning!",
  discription: "Your request has successfully submitted.",
  onConfirm: onRestDocument,
  dialogStatus: "warning",
};

export const deleteDialog = Template.bind({});
deleteDialog.args = {
  toggleHideDialog: true,
  hideDialog: false,
  title: "delete!",
  discription: "Your request has successfully submitted.",
  onConfirm: onRestDocument,
  dialogStatus: "delete",
};

/* 
example 1: ConfirmDialog
  const [isConfirmDialog, { toggle: toggleConfrimDialog }] = useBoolean(true);
  <ConfirmDialog
    toggleHideDialog={toggleConfrimDialog}
    hideDialog={isConfirmDialog}
    title=""
    discription="Upon submission, the identified SME and Regulatory user will be notified to complete their SME Evaluation Task."
    subText="Please confirm your submission."
    onConfirm={onConfrimSubmit}
    dialogStatus="confirm"
  ></ConfirmDialog>

  example 2: ConfirmDialog
  const [successDialog, { toggle: toggleSuccessDialog }] = useBoolean(true);

  <ConfirmDialog
    toggleHideDialog={toggleSuccessDialog}
    hideDialog={successDialog}
    title="Success!"
    discription="Your request has successfully submitted."
    onConfirm={onRestDocument}
    dialogStatus="success"
  ></ConfirmDialog>
                     */
