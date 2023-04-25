import * as React from "react";
import { Meta, Story } from "@storybook/react";
import FileUploadForm, { IfileuploadProps } from "./FileUploadForm";

export default {
  title: "FormControllers/FileUploadForm",
  component: FileUploadForm,
} as Meta;

const Template: Story<IfileuploadProps> = (args) => (
  <FileUploadForm {...args} />
);

/**
 * Upload document
 */
/**
 * 
 * ```
declare the schema in yup validation 

```
UploadDocument: yup.object().nullable().required(),
```
inside form control use like below example
```
<FileDragandUpload
control={allFormsMethods.control}
setValue={allFormsMethods.setValue}
isError={allFormsMethods.formState.errors.UploadDocument}
name="UploadDocument"
label="Upload Document"
isRequired={true} 

/> 
``` 
 */
export const FileUpload = Template.bind({});
FileUpload.args = {
  name: "my refereance this component required more generic, remove states inside this, styled need to clean up",
  label: "label",
  isRequired: true,
  fileTypes: ["jpg", "jpeg", "bmp", "gif", "png", "svg", "xlsx", "doc"],
  fileNotAavalible: "Drop file here, or upload it manually",
};
