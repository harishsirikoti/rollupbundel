import * as React from "react";
import { Controller } from "react-hook-form";
import { ComboBox, IComboBox, IComboBoxOption } from "@fluentui/react";
import { IComboBoxFormProps } from "./IComboBox";
import './_inputComboBox.scss';


const ComboBoxMultiCheck: React.FC<IComboBoxFormProps> = ({
  name,
  label,
  options,
  placeholder,
  isRequired,
  selectedKeys,
  setSelectedKeys,
  isdisabled,
  setValue,
  control,
}: IComboBoxFormProps) => {

  const onChanges = React.useCallback(
    (
      event: React.FormEvent<IComboBox>,
      option?: IComboBoxOption,
      index?: number,
      value?: string
    ): void => {
      let selected = option?.selected;
      if (option) {
        setSelectedKeys((prevSelectedKeys: any) =>
          selected
            ? [...prevSelectedKeys, option!.key as string]
            : prevSelectedKeys.filter((k: any) => k !== option!.key)
        );
      }
    },
    []
  );
  React.useEffect(() => {
    if (selectedKeys) {
      setValue(name, selectedKeys);
    }
  }, [selectedKeys]);

  return (
    <>
      <Controller
        control={control}
        name={name}
        render={({ field: { value }, fieldState: { error } }) => {
          return (
            <>
              <ComboBox
                id={name}
                label={label}
                multiSelect
                placeholder={placeholder}
                selectedKey={value ? value : setSelectedKeys}
                options={options}
                onChange={onChanges}
                errorMessage={error ? error.message : ""}
                disabled={isdisabled}
              />
            </>
          );
        }}
      />
    </>
  );
};
export default ComboBoxMultiCheck;
