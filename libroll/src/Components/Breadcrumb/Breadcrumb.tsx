import * as React from "react";
import { FC, ReactElement } from "react";
import { Breadcrumb, IBreadcrumbItem, IconButton, IIconProps } from "@fluentui/react";

export interface IBreadcrumbProps {
  children: (string & React.ReactNode) | any;
  bLists: IBreadcrumbItem[];
  title: string;
  ILink?: any;
}

export interface IReactCompState
  extends React.ComponentState,
    IBreadcrumbProps {}

const BreadcrumbItems: FC<IReactCompState> = ({
  title,
  bLists,
  children,
  ILink,
}: IBreadcrumbProps): ReactElement => {
  
  const homeIcon: IIconProps = { iconName: "Home" };
  return (
    <div className="breadcrumb">
      <div className="breadcrumb__left">
        <h4 className="breadcrumb__left__title">{title}</h4>
        <div className="breadcrumb__left__nav">
          <ILink to="/home">
            <IconButton
              iconProps={homeIcon}
              title="Home Icon"
              ariaLabel="Home Icon"
            />
          </ILink>
          <Breadcrumb
            className="breadcrumb__left_links"
            items={bLists}
            maxDisplayedItems={4}
            overflowIndex={1}
          />
        </div>
      </div>
      <div className="breadcrumb__right">{children}</div>
    </div>
  );
};

export default BreadcrumbItems;
