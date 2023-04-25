import * as React from "react";
import { FC } from "react";
import { MessageBar, MessageBarButton, MessageBarType } from "@fluentui/react";

export interface IMessageBoxDataModel {
  messageBarType: MessageBarType;
  messageText: string;
}

export interface IMessageBox {
  dataModel: IMessageBoxDataModel;
  resetChoice?: () => void;
}

/**
 * @typedef {object}
 * @property {IMessageBoxDataModel} dataModel
 * @property { void | undefined} closeClickHandler
 */

const MessageBox: FC<IMessageBox> = ({
  dataModel,
  resetChoice,
}: IMessageBox): React.ReactElement => {
  return (
    <MessageBar
      messageBarType={dataModel.messageBarType}
      isMultiline={false}
      onDismiss={resetChoice}
      dismissButtonAriaLabel="Close"
    >
      {dataModel.messageText}
    </MessageBar>
  );
};

export default MessageBox;
