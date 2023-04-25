import { IDropdownOption } from "@fluentui/react";

export interface IComboBoxFormProps {
  options: IDropdownOption | any;
  name: string;
  label: any;
  control: any;
  setValue:any
  placeholder?: string;
  isRequired?: boolean;
  defaultSelectedKey?: any;
  selectedKeys?: any;
  setSelectedKeys?: any;
  isdisabled?: boolean;
  isReadyOnly?:boolean
}