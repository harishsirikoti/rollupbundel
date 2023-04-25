import {
  ContextualMenu,
  DefaultButton,
  Dialog,
  DialogContent,
  DialogFooter,
  DialogType,
  PrimaryButton,
} from "@fluentui/react";
import { useBoolean } from "@fluentui/react-hooks";
import * as React from "react";
import { Confirm, Success, Trash, Warning } from "../../coreAssets/Images/icons";

import "./confrimDialog.scss";
 
export interface IConfirmDialogProp {
  hideDialog: any;
  toggleHideDialog: any;
  title: string;
  discription: string;
  onConfirm: () => any;
  dialogStatus: string;
  subText?: string;
  Imagepath?: string;
  summary?: string;
}

export interface IReactCompState
  extends React.ComponentState,
  IConfirmDialogProp { }

const ConfirmDialog = ({
  toggleHideDialog,
  hideDialog,
  title,
  discription,
  subText,
  onConfirm,
  dialogStatus,
  summary,
  Imagepath
}: IConfirmDialogProp) => {
  const [isDraggable, { toggle: toggleIsDraggable }] = useBoolean(false);

  const modalPropsStyles = { main: { maxWidth: 450 } };
  const dragOptions = {
    moveMenuItemText: "Move",
    closeMenuItemText: 'Close',
    menu: ContextualMenu,
  };
  const dialogContentProps = {
    type: DialogType.normal,
    title: title,
    //subText: discription,
  };

  const modalProps = React.useMemo(
    () => ({
      isBlocking: true,
      styles: modalPropsStyles,
      dragOptions: isDraggable ? dragOptions : undefined,
    }),
    [isDraggable]
  );

  return (
    <Dialog
      hidden={hideDialog}
      onDismiss={toggleHideDialog}
      modalProps={modalProps}
      className="confrimDialog"
      dialogContentProps={dialogContentProps}
    >
      {(() => {
        switch (dialogStatus) {
          case 'confirm':
            return (
              <>
                <DialogContent>
                  {<Confirm />}
                  <h5>{summary}</h5>
                  <p className="ms-Dialog-subText">{discription}</p>
                  <p className="ms-Dialog-subText">{subText}</p>
                </DialogContent>
                <DialogFooter>
                  <DefaultButton
                    onClick={toggleHideDialog}
                    text="Cancel"
                    className="cancel"
                  />
                  <PrimaryButton
                    onClick={onConfirm}
                    text="Confirm"
                    className="submit"
                  />
                </DialogFooter>
              </>
            );
          case 'success':
            return (
              <>
                <DialogContent>
                  {<Success />}
                  <h5>{summary}</h5>
                  <p className="ms-Dialog-title">{title}</p>
                  <p className="ms-Dialog-subText">{discription}</p>
                </DialogContent>
                <DialogFooter>
                  <PrimaryButton
                    onClick={onConfirm}
                    text="Great"
                    className="submit"
                  />
                </DialogFooter>
              </>
            );
          case 'save':
            return (
              <>
                <DialogContent>
                  { <Success />}
                  <h5>{summary}</h5>
                  <p className="ms-Dialog-title">{title}</p>
                  <p className="ms-Dialog-subText">{discription}</p>
                </DialogContent>
                <DialogFooter>
                  <PrimaryButton
                    onClick={onConfirm}
                    text="Great"
                    className="submit"
                  />
                </DialogFooter>
              </>
            );
          case 'warning':
            return (
              <>
                <DialogContent>
                  {<Warning/>}
                  <h5>{summary}</h5>
                  <p className="ms-Dialog-title">{title}</p>
                  <p className="ms-Dialog-subText">{discription}</p>
                </DialogContent>
                <DialogFooter>
                  <PrimaryButton
                    onClick={toggleHideDialog}
                    text="Ok, Got it"
                    className="submit"
                  />
                </DialogFooter>
              </>
            );
          case 'delete':
            return (
              <>
                <DialogContent>
                  {<Trash/>}
                  {summary && <h5>{summary}</h5>}
                  <p className="ms-Dialog-subText">{discription}</p>
                </DialogContent>
                <DialogFooter>
                  <DefaultButton
                    onClick={toggleHideDialog}
                    text="Cancel"
                    className="cancel"
                  />
                  <PrimaryButton
                    onClick={onConfirm}
                    text="Confirm"
                    className="submit"
                  />
                </DialogFooter>
              </>
            );
          case 'signout':
            return (
              <>
                <DialogContent className="signout-popup">
                  {<Warning/>}
                  {summary && <h5>{summary}</h5>}
                  <p className="ms-Dialog-title"> <b>{title}</b></p>
                  <p className="ms-Dialog-subText">{discription}</p>
                </DialogContent>
                <DialogFooter>
                  <DefaultButton
                    onClick={toggleHideDialog}
                    text="Cancel"
                    className="cancel"
                  />
                  <PrimaryButton
                    onClick={onConfirm}
                    text="Yes, sign out"
                    className="submit"
                  />
                </DialogFooter>
              </>
            );
          case 'deleteAllNotifications':
            return (
              <>
                <DialogContent>
                  {<Trash/>}
                  {summary && <h5>{summary}</h5>}
                  <p className="ms-Dialog-title"> <b>{title}</b> </p>
                  <p className="ms-Dialog-subText">{discription}</p>
                </DialogContent>
                <DialogFooter>
                  <DefaultButton
                    onClick={toggleHideDialog}
                    text="No"
                    className="cancel"
                  />
                  <PrimaryButton
                    onClick={onConfirm}
                    text="Yes"
                    className="submit"
                  />
                </DialogFooter>
              </>
            );
          default:
            return null;
        }
      })()}
    </Dialog>
  );
};

export default ConfirmDialog;
