import {
  CommandBarButton,
  IIconProps,
  Label,
} from "@fluentui/react";
import * as React from "react";
import personPreview from "../personPreview";
import './_viewLabel.scss';

export interface IViewprops {
  type: string;
  label: string;
  value: any;
}

const ViewLabelOption: React.FC<IViewprops> = ({
  type,
  label,
  value,
}: IViewprops) => {
  const IconDocoument: IIconProps = { iconName: "IconDocoument" };

  const isViewFormat = (type: any) => {
    if (type === "PeoplePickerForm") {
      return value ? personPreview(value) : "N/A";
    } else if (type === "DatePickerForm") {
      return value ? new Date(value).toLocaleDateString() : "N/A";
    } else if (type === "DynamicForm") {
      return value ? personPreview(value) : "N/A";
    } else if (label === "Reference Document") {
      return value
        ? value.map((doc: any) => (
            <CommandBarButton className="linkBtn" iconProps={IconDocoument}>
              {doc.documentname}
            </CommandBarButton>
          ))
        : "N/A";
    }
    return value ? value : "N/A";
  };

  return (
    <div className="viewOptionLabel">
      <Label>{label}</Label>
      <div className={"options"}>{isViewFormat(type)}</div>
    </div>
  );
};

export default ViewLabelOption;
