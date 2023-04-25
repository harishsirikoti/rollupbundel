import * as React from "react";
import { FC, ReactElement } from "react";
import { TextField } from "@fluentui/react";
import { Controller } from "react-hook-form";
import { ITextFieldFormProps } from "./ITextFieldFormProps";

const TextFieldForm: FC<ITextFieldFormProps> = (
  props: ITextFieldFormProps
): ReactElement => {
  const {
    control,
    name,
    label,
    defaultValue,
    placeholder,
    isRequired = false,
    isdisabled = false,
    isReadyOnly = false,
    multiline,
    rows,
    typeoffield
  } = props;
  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState: { error } }) => {
        return (
          <>
            <div
              className={
                isRequired ? (error ? "errorGroup" : "errorGroupStar") : ""
              }
            >
              <TextField
                type={typeoffield === 'number' ? "number" : "text"}
                label={label}
                disabled={isdisabled}
                readOnly={isReadyOnly}
                defaultValue={defaultValue}
                placeholder={placeholder}
                {...field}
                errorMessage={error ? error.message : ""}
                multiline={multiline}
                rows={rows}
                className={
                  isRequired ? (error ? "errorGroup" : "errorGroupStar") : ""
                }
              />
            </div>
          </>
        );
      }}
    />
  );
};

export default TextFieldForm;
