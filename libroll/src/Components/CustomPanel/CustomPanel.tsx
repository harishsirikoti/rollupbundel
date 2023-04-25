import * as React from 'react';
import { FC, ReactElement } from 'react';
import { Panel, PanelType } from '@fluentui/react/lib/Panel';
import './CustomPanel.scss';


export interface IcustomPanelProps {
  title: string;
  panelOpen: boolean;
  panelHide: () => void;
  children: React.ReactNode;
  panelClassName: string;
  onRenderFooterContent?: any;
}
export interface IReactCompState
  extends React.ComponentState,
  IcustomPanelProps {}

/**
 *
 * @param {React.FC<IReactCompState>}
 * @returns {React.ReactElement}
 */

/**
 * @typedef {object}
 * @property {string} title
 * @property {boolean} panelOpen
 * @property {void} panelHide
 * @property { React.ReactNode} children
 * @property {string} panelClassName
 * @property {any} onRenderFooterContent
 */

const CustomPanel: FC<IReactCompState> = ({
  title,
  panelOpen,
  panelHide,
  children,
  panelClassName,
  onRenderFooterContent,
}: IcustomPanelProps): ReactElement => (
  <Panel
    isLightDismiss
    isOpen={panelOpen}
    onDismiss={panelHide}
    closeButtonAriaLabel="Close"
    headerText={title}
    type={PanelType.medium}
    className={panelClassName}
    onRenderFooterContent={onRenderFooterContent}
    isFooterAtBottom
  >
    {children}
  </Panel>
);

export default CustomPanel;

