import { IconButton, IIconProps } from "@fluentui/react";
import * as React from "react";
import { FC, ReactElement } from "react";
import "./Accordion.scss";

export interface IAccordionProps {
  title: string;
  collapsed: boolean;
  children: React.ReactNode;
  ariaLabel: string;
  goToTab?: any;
  editPageNumber?: any;
  minimizeIcon?: any;
  editIconImg?: any;
  expned?: any;
  status?: string;
}

export interface IReactCompState
  extends React.ComponentState,
  IAccordionProps { }

const Accordion: FC<IReactCompState> = ({
  title,
  ariaLabel,
  collapsed,
  children,
  setEditPage,
  editPageNumber,
  minimizeIcon,
  editIconImg,
  expned,
  status
}): ReactElement => {
  const [isCollapsed, setIsCollapsed] = React.useState(collapsed);

  React.useEffect(() => {
    setIsCollapsed(collapsed);
  }, [collapsed]);

  const goToTab = (id: any) => {
    setEditPage(id);
  };

  const statusFun = (status: any) => {
    switch (status) {
      case 'completed':
        return (
          <div className='ac_completed'>
            {status}
          </div>
        )
      case 'pending':
        return (
          <div className='ac_pending'>
            {status}</div>
        )
      default:
        return null;
    }
  }

  return (
    <div className="accordion">
      <div className={`accordion__header ${isCollapsed ? 'accordion-close' : 'accordion-open'}`}>
        <div
          className="accordion__title"
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          {title}
        </div>
        <div className="accordion__actions">
          {editPageNumber && (
            <IconButton
              className="accordion__actions--iconBtn"
              iconProps={editIconImg}
              title={title}
              ariaLabel={title}
              onClick={() => goToTab(editPageNumber)}
            />
          )}
          {status && statusFun(status)}
          <IconButton
            className="accordion__actions--iconBtn"
            onClick={() => setIsCollapsed(!isCollapsed)}
            iconProps={!isCollapsed ? minimizeIcon : expned}
            title={title}
            ariaLabel={title}
          />
        </div>
      </div>
      <div
        className={`accordion__description ${isCollapsed ? 'hide' : 'show'}`}
        aria-expanded={isCollapsed}
      >
        {children}
      </div>
    </div>
  );
};
export default Accordion;
