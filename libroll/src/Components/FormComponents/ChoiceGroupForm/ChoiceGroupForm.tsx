import * as React from "react";
import { Controller } from "react-hook-form";
import { Label } from "@fluentui/react";
import { IChoiceGroupFormProps } from "./IChoiceGroupForm";
import './_inputChoiceGroup.scss';

const ChoiceGroupForm: React.FC<IChoiceGroupFormProps> = ({
  name,
  label,
  options,
  isRequired,
  dependChoice,
  isdisabled,
  control,
  setValue
}: IChoiceGroupFormProps) => {
  

  const onChangeChoice = (e: any) => {
    if (e.target.value === "Yes") {
      dependChoice(true);
    } else {
      dependChoice(false);
    }
    setValue(name, e.target.value);
  };

  return (
    <>
      <Controller
        control={control}
        name={name}
        render={({ field: { value, onChange }, fieldState: { error } }) => {
          return (
            <>
              <div
                className={
                  isRequired ? (error ? "errorGroup" : "errorGroupStar") : ""
                }
              >
                <Label>{label}</Label>
                <div className="ChoiceGroup">
                  {options.map((item: any) => (
                    <label className="choicebtn" key={item.key} id={item.key}>
                      <input
                        name={name}
                        type="radio"
                        value={item.text}
                        onChange={(e) => {
                          onChange(e.target.value);
                          onChangeChoice(e);
                        }}
                        checked={item.text === value}
                        disabled={isdisabled}
                      />
                      <span>{item.text}</span>
                    </label>
                  ))}
                </div>
                <span className="error-message">
                  {error ? error.message : ""}
                </span>
              </div>
            </>
          );
        }}
      />
    </>
  );
};

export default ChoiceGroupForm;
