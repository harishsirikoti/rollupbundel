import * as React from "react";
import { FC, ReactElement } from "react";
import { Modal } from "@fluentui/react";
import "./ModalPopup.scss";

export interface IModalOpenProps {
  modalOpen?: boolean;
  modalHide?: () => void;
  title?: string;
  headerChildren?: React.ReactNode;
  bodyChildren?: React.ReactNode;
  footerChildren?: React.ReactNode;
}

const ModalPopup: FC<IModalOpenProps> = ({
  modalOpen,
  modalHide,
  title,
  headerChildren,
  bodyChildren,
  footerChildren,
}: IModalOpenProps): ReactElement => {
  console.log("modal");
  return (
    <div className="mainModalPopup">
      <Modal titleAriaId={title} isOpen={modalOpen} onDismiss={modalHide}>
        <div className="modalContent">
          <div className="modalHeader">{headerChildren}</div>
          <div className="modalBody">{bodyChildren}</div>
          <div className="modalBottomActions">{footerChildren}</div>
        </div>
      </Modal>
    </div>
  );
};

export default ModalPopup;
