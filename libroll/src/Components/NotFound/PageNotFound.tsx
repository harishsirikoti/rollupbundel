import * as React from "react";
import { FC } from "react";
import "./_notfound.scss";
import PageNotFoundImg from "./PagenotfoundImg";

export interface IPageNotFoundProps {
  page_notfound_class?: string;
}

const PageNotFound: FC<IPageNotFoundProps> = ({ page_notfound_class }) => {
  return (
    <>
      <div className={`page-NotFound ${page_notfound_class}`}>
        <PageNotFoundImg />
      </div>
    </>
  );
};

export default PageNotFound;
