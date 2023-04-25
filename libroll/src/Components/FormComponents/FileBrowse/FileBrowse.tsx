import * as React from "react";
import { Controller, Control, useFormContext } from "react-hook-form";
import { CommandBarButton, IIconProps, TextField } from "@fluentui/react";
//import "./FileUpload.scss";
import { useBoolean } from "@fluentui/react-hooks";
import ConfirmDialog from "../../ConfirmDialog";

export interface IFileBrowseProps {
  name: string;
  label: any;
  setValue?: any;
  placeholder?: string;
  isRequired?: boolean;
  control?: Control<any>;
  discription?: string;
  fileTypes?: any;
}

const FileBrowse: React.FC<IFileBrowseProps> = ({
  name,
  label,
  isRequired,
  discription,
  fileTypes
}: //setValue,
IFileBrowseProps) => {
  const uploadIcon: IIconProps = { iconName: "Upload" };
  const { setValue, watch, control, register, getValues } = useFormContext();
  const [isConfirmDialog, { toggle: toggleConfrimDialog }] = useBoolean(true);
  const [fileUrl, setFileUrl] = React.useState<string>();

  const onConfrimSubmit = () => {
    toggleConfrimDialog();
  };

  const fileFormat = (extFile: any) => {
    const ext:any = fileTypes;
    return ext.some((el:any) => extFile.endsWith(el));
  };

  const handleUpload = (e: any): void => {
    let file = e.target.files[0];
    if (!fileFormat(file.name)) {
      toggleConfrimDialog();
    } else {
      const fileName: any = file.name;
      const fileContent: File = file;
      setFileUrl(fileName);
      console.log(fileName);
      setValue(name, { fileName, fileContent });
    }
  };

  return (
    <>
      <Controller
        control={control}
        name={name}
        render={({
          field: { onChange, onBlur, value, ref },
          fieldState: { error, isTouched, isDirty },
        }) => {
          return (
            <>
              <div
                id="fileBrowse"
                className={
                  isRequired ? (error ? "errorGroup" : "errorGroupStar") : ""
                }
              >
                <TextField
                  label={label}
                  onChange={onChange}
                  onBlur={onBlur}
                  value={fileUrl}
                  errorMessage={error ? error.message : ""}
                  className={
                    isRequired ? (error ? "errorGroup" : "errorGroupStar") : ""
                  }
                />
                <CommandBarButton
                  iconProps={uploadIcon}
                  className="primary uploadBtn"
                >
                  Upload
                  <input
                    type="file"
                    onBlur={onBlur}
                    onChange={(e: React.FormEvent<HTMLDivElement> | any) => {
                      onChange(handleUpload(e));
                    }}
                  />
                </CommandBarButton>
              </div>
              <ConfirmDialog
                toggleHideDialog={toggleConfrimDialog}
                hideDialog={isConfirmDialog}
                title=""
                discription={discription? discription:''}
                onConfirm={onConfrimSubmit}
                dialogStatus="warning"
              ></ConfirmDialog>
            </>
          );
        }}
      />
    </>
  );
};

export default FileBrowse;