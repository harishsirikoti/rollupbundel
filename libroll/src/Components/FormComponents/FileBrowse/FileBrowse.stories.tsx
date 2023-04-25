import * as React from "react";
import { Meta, Story } from "@storybook/react";
import FileBrowse, {IFileBrowseProps } from "./FileBrowse";

export default {
  title: "FormControllers/FormBrowse",
  component: FileBrowse,
} as Meta;

const Template: Story<IFileBrowseProps> = (args) => (
  <FileBrowse {...args} />
); 
export const FileBrowseVal = Template.bind({});
FileBrowseVal.args = {
  name: "UploadDocuments",
  label: "Upload Documents",
  isRequired: true,
  fileTypes: [
    ".jpeg",
    ".bmp",
    ".gif",
    ".png",
    ".svg",
    ".xlsx",
    ".doc",
    ".docm",
    ".docx",
    ".html",
    ".htm",
    ".odt",
    ".csv",
    ".xls",
    ".xlsx",
    ".ppt",
    ".pptx",
    ".zip",
  ],
  discription:"Please Upload Word, Excel, PowerPoint, PDF, Mp4, Jpg, PNG, HTML, and Scorm", 
};
