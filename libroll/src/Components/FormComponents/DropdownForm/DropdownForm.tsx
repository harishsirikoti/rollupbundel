import * as React from "react";
import { Controller } from "react-hook-form";
import { Dropdown, IDropdownOption } from "@fluentui/react";
import { IDropDownProps } from "./IDropDownProps";

const DropdownForm: React.FC<IDropDownProps> = ({
  name,
  label,
  options,
  control,
  placeholder,
  isRequired,
  isdisabled,
  styles,
  defaultSelectedKeys,
  defaultSelectedKey,
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
                onBlur={onBlur}
                selectedKey={value}
                defaultSelectedKeys={defaultSelectedKeys}
                defaultSelectedKey={defaultSelectedKey}
                onChange={(
                  e: React.FormEvent<HTMLDivElement> | any,
                  value1: IDropdownOption | any
                ) => {
                  onChange(value1.key);
                }}
                errorMessage={error ? error.message : ""}
                disabled={isdisabled}
                styles={styles}
              />
            </>
          );
        }}
      />
    </>
  );
};
export default DropdownForm;
