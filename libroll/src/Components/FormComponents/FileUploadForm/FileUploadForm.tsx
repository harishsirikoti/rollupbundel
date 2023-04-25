import * as React from "react";
import { Label } from "@fluentui/react";
import { FileUploader } from "react-drag-drop-files";
 
import { useBoolean } from "@fluentui/react-hooks";
import ConfirmDialog from "../../ConfirmDialog";
import './_fileuploadDrag.scss';

export interface IfileuploadProps {
  name: string;
  label: any;
  setValue: any;
  control: any;
  isRequired?: boolean;
  fileTypes?: Array<string>;
  maxSize?: number;
  fileNotAavalible?: string;
  isError?: any;
}

const FileUploadForm: React.FC<IfileuploadProps> = ({
  name,
  label,
  setValue,
  isRequired,
  isError,
  fileTypes,
  fileNotAavalible,
}: IfileuploadProps) => {
  
  const [isConfirmDialog, { toggle: toggleConfrimDialog }] = useBoolean(true);
  const [file, setFile] = React.useState<any>(); 

  const handleChange = (file: any) => { 
      setFile(file);
      const fileName: any = file[0].name;
      const fileContent: File = file[0];
      setValue(name, { fileName, fileContent }); 
  };
 
  const onConfrimSubmit = () => {
    toggleConfrimDialog();
    setFile('');
    setValue(name, {}); 
  };

  return (
    <>
      <div
        className={
          isRequired ? (isError ? "errorGroup" : "errorGroupStar") : ""
        }
      >
        <Label>{label}</Label>
        <div className="fileDrag">
          <FileUploader
            multiple={true}
            handleChange={handleChange}
            name={name}
            types={fileTypes}
            label={label}
            onTypeError={onConfrimSubmit}
            fileOrFiles={file} 
          />
          <p>{file && `File Name: ${file[0]?.name}`}</p>
        </div>
        <span className="error-message">{isError ? isError.message : ""}</span>
      </div>
      <ConfirmDialog
        toggleHideDialog={toggleConfrimDialog}
        hideDialog={isConfirmDialog}
        title={"Unsupported file format"}
        discription={`Please upload ${fileTypes}`}
        onConfirm={onConfrimSubmit}
        dialogStatus="warning"
        subText=""
      />
    </>
  );
};

export default FileUploadForm;
