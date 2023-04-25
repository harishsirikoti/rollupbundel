/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from "react";
import { FC, ReactElement, useState } from "react";

import {
  CommandBarButton,
  DirectionalHint,
  IIconProps,
  Overlay,
  TeachingBubble,
  DefaultButton,
  Link,
} from "@fluentui/react";
import { useBoolean, useId } from "@fluentui/react-hooks";

const addDoc: IIconProps = { iconName: "dropdownIcon" };

export interface ICreateMenuAppModel {
  id: string;
  name: string;
  discription: string;
  routeURL: string;
  image?: string;
  label?: string;
  active?: boolean;
  routerClick?: boolean;
  ILink?: any;
}

export type IReactCompState = React.ComponentState;

// eslint-disable-next-line react/function-component-definition
/**
 * CreateMenu
 * @param {React.FC<IReactCompState>}
 * @returns {React.ReactElement}
 */

export const CreateMenu: FC<IReactCompState> = (
  props,
  ILink,
): ReactElement => {
  const { createMenuItems } = props;
  const buttonId = useId("targetButton");
  const [teachingBubbleVisible, { toggle: toggleTeachingBubbleVisible }] =
    useBoolean(false);
  // const [createMenuItem] = useState<ICreateMenuAppModel[]>(createMenuItems);
  const [isOpenDelegation, { setTrue: openPanel, setFalse: dismissPanel }] =
    useBoolean(false);

  const delegationPanel = () => {
    openPanel();
  };
  const delegateDismiss = () => {
    //toggleTeachingBubbleVisible();
    dismissPanel();
  };

  return (
    <div className="createDocMain">
      <div className={`${teachingBubbleVisible ? "request-active" : ""}`}>
        <CommandBarButton
          className="iconRight"
          iconProps={addDoc}
          text="Request"
          id={buttonId}
          onClick={toggleTeachingBubbleVisible}
        />
      </div>
      {teachingBubbleVisible && (
        <Overlay isDarkThemed onClick={toggleTeachingBubbleVisible}>
          <TeachingBubble
            calloutProps={{ directionalHint: DirectionalHint.bottomCenter }}
            target={`#${buttonId}`}
            onDismiss={toggleTeachingBubbleVisible}
            headline=""
            ariaDescribedBy="createMenu"
          >
            <div className="inner_menu">
              <div className="inner_menu_wrapper">
                <ul className="inner_menu_container">
                  {Array.isArray(createMenuItems) &&
                    createMenuItems?.map((menu: ICreateMenuAppModel) => (
                      <li key={menu.id}>
                        {menu.routerClick && (
                          <div
                            role="button"
                            onClick={toggleTeachingBubbleVisible}
                          >
                            <DefaultButton onClick={() => delegationPanel()}>
                              <span>
                                <img src={menu.image} />{" "}
                              </span>
                              <div className="inner_menu_content">
                                <h3>{menu.name}</h3>
                                <p>{menu.discription}</p>
                              </div>
                            </DefaultButton>
                          </div>
                        )}

                        {!menu.routerClick && (
                          <ILink
                            to={menu.routeURL}
                            onClick={toggleTeachingBubbleVisible}
                          >
                            <span>
                              <img src={menu.image} />
                            </span>
                            <div className="inner_menu_content">
                              <h3>{menu.name}</h3>
                              <p>{menu.discription}</p>
                            </div>
                          </ILink>
                        )}
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          </TeachingBubble>
        </Overlay>
      )}
      {/* {isOpenDelegation ? <UserDelegationComp isOpen={isOpenDelegation} dismissPanel={delegateDismiss} /> : ''} */}
    </div>
  );
};
