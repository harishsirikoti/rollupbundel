/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable no-debugger */
/* eslint-disable react/jsx-key */
import * as React from "react";
import { FC, ReactElement, useState } from "react";

import { DefaultButton } from "@fluentui/react/lib/Button";
import { TeachingBubble } from "@fluentui/react/lib/TeachingBubble";
import { DirectionalHint } from "@fluentui/react/lib/Callout";
import { useBoolean, useId } from "@fluentui/react-hooks";
import { Link, Overlay } from "@fluentui/react";
import { IMegamenuAppModel, IMegamenuDataModel } from "../IHeader";
import { AiOutlineDown } from "react-icons/ai";

interface IReactCompState extends React.ComponentState {}

// eslint-disable-next-line react/function-component-definition

/**
 * Megamenu - its a functional component it hase in header megameu section
 * @param {React.FC<IReactCompState>}
 * @returns {React.ReactElement}
 */

const Megamenu: FC<IReactCompState> = (props,ILink): ReactElement => {
  const { megaMenuItems } = props;
  const buttonId = useId("targetButton");
  const [menuProp, setMenuProp] = useState("Controlled Docs");
  const [teachingBubbleVisible, { toggle: toggleTeachingBubbleVisible }] =
    useBoolean(false);
  // eslint-disable-next-line no-unused-vars
  // const [megamenu] = useState<IMegamenuAppModel[]>(megaMenuItems);
  const menuName = (item: any) => {
    setMenuProp(item.name);
    toggleTeachingBubbleVisible();
  };
  return (
    <div className="megaMenu-wrapper">
      <div className={`${teachingBubbleVisible ? "megaMenu-active" : ""}`}>
        <DefaultButton id={buttonId} onClick={toggleTeachingBubbleVisible}>
          {menuProp}
          <div className="dropdownIcon">
            <AiOutlineDown />
          </div>
        </DefaultButton>
      </div>
      {teachingBubbleVisible && (
        <Overlay isDarkThemed onClick={toggleTeachingBubbleVisible}>
          <TeachingBubble
            styles={{
              root: { minWidth: "700px" },
              content: { minWidth: "700px" },
            }}
            calloutProps={{ directionalHint: DirectionalHint.bottomCenter }}
            target={`#${buttonId}`}
            isWide
            // hasCloseButton
            closeButtonAriaLabel="Close"
            onDismiss={toggleTeachingBubbleVisible}
            headline=""
            ariaLabelledBy="megaMenuBubble"
          >
            <div className="inner_menu">
              {Array.isArray(megaMenuItems) &&
                megaMenuItems?.map((item) => (
                  <div className="inner_menu_wrapper" key={item.id}>
                    {item.title && <h2>{item.title}</h2>}
                    <ul className="inner_menu_container">
                      {item.menus.map((menu: any) => (
                        <li
                          className={`${
                            menu.name === menuProp ? "mega-id-selector" : ""
                          }`}
                          key={menu.id}
                        >
                          <ILink to={menu.url} onClick={() => menuName(menu)}>
                            <span>{menu.image}</span>
                            <div className={`inner_menu_content`}>
                              <h3>{menu.name}</h3>
                              <p>{menu.discription}</p>
                            </div>
                          </ILink>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
            </div>
          </TeachingBubble>
        </Overlay>
      )}
    </div>
  );
};

export default Megamenu;
