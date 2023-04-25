import { IChoiceGroupOption, IDropdownOption } from "@fluentui/react";

export interface IChoiceGroupFormProps {
  options: IChoiceGroupOption | any;
  name: string;
  label: any;
  control: any;
  setValue:any;
  isRequired?: boolean;
  defaultSelectedKey?: any;
  dependChoice?: any;
  isdisabled?: boolean;
}
