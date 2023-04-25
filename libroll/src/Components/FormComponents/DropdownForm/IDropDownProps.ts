import { IDropdownOption } from "@fluentui/react";

export interface IDropDownProps {
  options: IDropdownOption | any;
  name: string;
  label: any;
  control: any;
  register?: any;
  placeholder?: string;
  isRequired?: boolean;
  isdisabled?: boolean;
  styles?: any;
  defaultSelectedKeys?:any;
  defaultSelectedKey?:string
}
