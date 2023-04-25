import * as React from "react";
import { FC, ReactElement } from "react";
import "./Footer.scss";

export interface IFooterProps {
  links?: any;
  logo?:any;
  footerleft?:string;
  footer_theme_Class?: string;
}
const Footer: FC<IFooterProps> = ({
  links,
  logo,
  footerleft,
  footer_theme_Class,
}: IFooterProps): ReactElement => {
  return (
    <footer className={`footer ${footer_theme_Class}`}>
      <div className="footer__left">{footerleft}</div>
      <div className="footer__center">
        <span className="logo">
          <img src={logo} alt="logo" />
        </span>
      </div>
      <div className="footer__right">
        {links?.map((item: any, index: number) => (
          <a key={index} href={item.link} target="_blank">
            {item.title}
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
