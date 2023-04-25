export interface ITextFieldFormProps {
    name: string | number | any;
    typeoffield: string | number;
    label: string; 
    control: any;
    isRequired?: boolean;
    isdisabled?: boolean;
    isReadyOnly?: boolean;
    defaultValue?: string;
    placeholder?: string;
    multiline?:any;
    rows?:number; 
  }