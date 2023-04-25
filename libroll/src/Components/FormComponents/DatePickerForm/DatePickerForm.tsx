import * as React from "react";
import {
  Controller,
} from "react-hook-form";
import {
  DatePicker,
  IDropdownOption,
} from "@fluentui/react";
import './_inputDatepicker.scss';

export interface IDatePickerFormProps {
  options?: IDropdownOption | any;
  name: string;
  label: any;
  isRequired?: boolean;
  control: any;
  register:any;
  placeholder?: any;
  minDate?: any;
  maxDate?:any;
  defaultSelectdate?: any;
  isdisabled?: boolean;
}

const DatePickerForm: React.FC<IDatePickerFormProps> = ({
  name,
  label,
  control,
  register,
  isRequired,
  placeholder,
  minDate,
  maxDate,
  defaultSelectdate,
  isdisabled,
}: IDatePickerFormProps) => {
  return (
    <>
      <Controller
        control={control}
        name={name}
        render={({ field: { value, onChange }, fieldState: { error } }) => {
          return (
            <div >
              <input
                {...register(name)}
                hidden
                defaultValue={defaultSelectdate}
                value={value}
              />
              <DatePicker
                className={
                  isRequired ? (error ? "errorGroup" : "errorGroupStar") : ""
                }
                placeholder={placeholder}
                label={label}
                id={name}
                value={value ? new Date(value) : defaultSelectdate}
                minDate={minDate}
                maxDate={maxDate}
                onSelectDate={onChange}
                disabled={isdisabled}
              />
              <div className={error ? "errorMessage" : ""}>
                {error ? error.message : ""}
              </div>
            </div>
          );
        }}
      />
    </>
  );
};
export default DatePickerForm;
