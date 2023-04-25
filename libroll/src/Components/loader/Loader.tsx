import { Spinner, SpinnerSize } from "@fluentui/react";
import * as React from "react";
import { FC, ReactElement } from "react";
import "./Loader.scss";
export type IReactCompState = React.ComponentState;
export interface ILoaderProp {
  loadingText?: string;
  loaderExtraClass?: string;
}
const Loader: FC<ILoaderProp> = ({
  loadingText,
  loaderExtraClass,
}: ILoaderProp): ReactElement => (
  <div className={`${loaderExtraClass} loading`}>
    <Spinner size={SpinnerSize.large} label={loadingText} />
  </div>
);

export default Loader;
