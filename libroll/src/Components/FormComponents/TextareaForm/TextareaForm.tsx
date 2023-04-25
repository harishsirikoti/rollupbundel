import * as React from "react";
import { FC, ReactElement } from "react";
import { TextField } from "@fluentui/react";
import { Controller } from "react-hook-form";
import { ITextareaFormProps } from "./TextareaFormProps";

const TextareaForm: FC<ITextareaFormProps> = ({
  name,
  label,
  control,
  placeholder,
  rows,
  isRequired,
  isdisabled,
  isReadyOnly,
  defaultValue,
}: ITextareaFormProps): ReactElement => {
  return (
    <>
      <Controller
        control={control}
        name={name}
        render={({ field, fieldState: { error } }) => {
          return (
            <div
              className={isRequired && error ? "errorGroup" : "errorGroupStar"}
            >
              <TextField
                {...field}
                placeholder={placeholder}
                required={isRequired}
                label={label}
                disabled={isdisabled}
                readOnly={isReadyOnly}
                defaultValue={defaultValue}
                errorMessage={error ? error.message : ""}
                multiline
                rows={rows}
                className={isRequired && error ? "errorGroup" : "errorGroupStar"}
              />
            </div >
          );
        }}
      />
    </>
  );
};

export default TextareaForm;
