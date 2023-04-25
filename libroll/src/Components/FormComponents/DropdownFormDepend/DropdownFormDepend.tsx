import * as React from "react";
import {
  useFormContext,
  Controller,
  FieldErrors,
  Control,
} from "react-hook-form";
import { Dropdown, IDropdownOption } from "@fluentui/react";

export interface IDropDownProps {
  options: IDropdownOption | any;
  name: string;
  label: any;
  placeholder?: string;
  isRequired?: boolean;
  control: any;
  handleRelationDropdown?: any;
  isdisabled?: boolean;
}

const DropdownFormDepend: React.FC<IDropDownProps> = ({
  name,
  label,
  options,
  placeholder,
  isRequired,
  handleRelationDropdown,
  isdisabled,
  control,
}: IDropDownProps) => {
  return (
    <>
      <Controller
        control={control}
        name={name}
        render={({
          field: { onChange, onBlur, value },
          fieldState: { error },
        }) => {
          return (
            <>
              <Dropdown
                placeholder={placeholder}
                label={label}
                options={options}
                required={isRequired}
                id={name}
                onBlur={onBlur}
                selectedKey={value}
                disabled={isdisabled}
                onChange={(
                  e: React.FormEvent<HTMLDivElement> | any,
                  value1: IDropdownOption | any
                ) => {
                  onChange(value1.key);
                  handleRelationDropdown(value1.key);
                }}
                errorMessage={error ? error.message : ""}
              />
            </>
          );
        }}
      />
    </>
  );
};
export default DropdownFormDepend;
