export interface ITextareaFormProps {
    name: string;
    label: string;
    isRequired?: boolean;
    isdisabled?: boolean;
    isReadyOnly?: boolean;
    defaultValue?: string;
    rows?: number;
    control?:any;
    placeholder?: string;
  }