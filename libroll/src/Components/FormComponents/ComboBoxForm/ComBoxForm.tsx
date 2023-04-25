import * as React from 'react';
import {
  Controller,
  Control,
} from 'react-hook-form';
import { ComboBox, IDropdownOption } from '@fluentui/react';
import './_inputComboBox.scss';

export interface IComboBoxFormProps {
  options: IDropdownOption | any;
  name: string;
  label: any;
  placeholder?: string;
  isRequired?: boolean;
  control?: Control<any>;
  defaultSelectedKey?: any;
  register?: any;
}

/**
 * ComboBoxForm
 * @param {React.FC<IComboBoxFormProps>}
 * @returns {IComboBoxFormProps}
 */

/**
 * @typedef {object}
 * @property {string} name
 * @property {any} label
 * @property {string | undefined} placeholder
 * @property {boolean | undefined} isRequired
 * @property {any} defaultSelectedKey
 * @property {any} options
 */

const ComboBoxForm: React.FC<IComboBoxFormProps> = ({
  name,
  label,
  options,
  placeholder,
  isRequired,
  defaultSelectedKey,
  control,
  register
}: 
IComboBoxFormProps) => {

  return (
    <Controller
      control={control}
      name={name}
      render={({
        field: { onChange },
        fieldState: { error },
      }) => (
        <>
          <ComboBox
            defaultSelectedKey={defaultSelectedKey}
            {...register}
            label={label}
            multiSelect
            options={options}
            id={name}
            autoComplete="on"
            onChange={(
              e: React.FormEvent<HTMLDivElement> | any,
              value: IDropdownOption | any,
            ) => {
              onChange(value.text);
            }}
            errorMessage={error ? error.message : ''}
          />
        </>
      )}
    />
  );
};

export default ComboBoxForm;
