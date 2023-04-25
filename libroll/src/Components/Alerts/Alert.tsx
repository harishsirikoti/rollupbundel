import * as React from 'react';
import { FC } from 'react';
import { MessageBar, MessageBarType } from '@fluentui/react';

export interface IMessageBoxDataModel {
  messageBarType: MessageBarType;
  messageText: string;
  classNames?: string;
}

export interface IMessageBox {
  dataModel: IMessageBoxDataModel;
  closeClickHandler?: () => void;
  classNames?: string;
}

export interface IReactCompState extends React.ComponentState, IMessageBox {}

/**
 * MessageBox
 * @param {React.Fc<IReactCompState>}
 * @returns {React.ReactElement}
 */

/**
 * @typedef {object}
 * @property {IMessageBoxDataModel} dataModel
 * @property { void | undefined} closeClickHandler
 */

const MessageBox: FC<IReactCompState> = ({
  dataModel,
  closeClickHandler,
  classNames,
}: IMessageBox): React.ReactElement => (
  <MessageBar
    messageBarType={dataModel.messageBarType}
    isMultiline
    onDismiss={closeClickHandler}
    dismissButtonAriaLabel="Close"
    className={`${classNames}`}
    truncated
  >
    {dataModel.messageText}
  </MessageBar>
);

export default MessageBox;