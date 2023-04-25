import { Link, Spinner, SpinnerSize} from "@fluentui/react";
import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { ICreateMenuAppModel, IHeaderNavItem, IMegamenuAppModel } from "./IHeader";
import Megamenu from "./MegaMenu";
import { CreateMenu } from "./Menu";
import "./_header.scss";
export interface IHeader {
  logo: any;
  navItems: IHeaderNavItem[];
  megaMenuItems: IMegamenuAppModel[];
  createMenuItems: ICreateMenuAppModel[];
  actionItems: any;
  currentRouteId?: any;
  isBackdrop: boolean;
  ILink?: any;
}

const Header: React.FC<any> = ({
  logo,
  navItems,
  megaMenuItems,
  createMenuItems,
  actionItems,
  currentRouteId,
  isBackdrop,
  ILink,
}: IHeader) => {
  const [isMenuOpen, toggleMenuOpen] = useState(true);
  const toggleMenu = () => {
    toggleMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="header-main">
        <div className="header-main__left">
          <div className="hummenu">
            <AiOutlineMenu onClick={toggleMenu} />
          </div>
          <span className="logo">
            <ILink to="/home">
              {logo ? (
                <img src={logo} alt="logo" />
              ) : (
                <Spinner className="" label="" size={SpinnerSize.small} />
              )}
            </ILink>
          </span>
          <div className="megaMenuContianer">
            <Megamenu megaMenuItems={megaMenuItems} ILink={ILink}/>
          </div>
        </div>
        <div
          className={`header-main__navigation ${
            isMenuOpen ? "" : "isMenuOpen"
          }`}
        >
          <div className="linesMenu">
            <AiOutlineClose onClick={toggleMenu} />
          </div>
          <ul className="nav_item_group mobileMenu">
            {navItems.map((item: IHeaderNavItem) => (
              <li
                onClick={toggleMenu}
                className={currentRouteId === item.id ? "active" : ""}
                key={item.id}
              >
                <ILink to={item.routeURL}>{item.label}</ILink>
              </li>
            ))}
          </ul>
        </div>
        <div
          onClick={toggleMenu}
          className={`${isMenuOpen ? "" : "isMenuOpen"}`}
        />

        <div className="header-main__right">
          <CreateMenu createMenuItems={createMenuItems} ILink={ILink}/>
          <div className="actionButton">
            {actionItems?.map((component) => {
              if (component.isEnabled) {
                return (
                  <div key={component.name} onClick={component.action} className='test'>
                    {component.component()}
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>
      {isBackdrop && <div className="gradient-primary header-backdrop"></div>} 
    </>
  );
};

export default Header;
