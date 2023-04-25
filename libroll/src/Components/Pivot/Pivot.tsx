import * as React from 'react';
import {  Pivot, PivotItem, Label } from '@fluentui/react';
import { FC, ReactElement } from 'react';
import "./Pivot.scss";


interface PivotProps {
    items: any;
  children: React.ReactNode | any;
    iconName?: string,
    classNames?: string;
}
export interface IReactComponentSate
    extends React.ComponentState,
    PivotProps { }

/**
 * @property {React.FC<IReactComponentSate>}
 * @returns {React.ReactElement}
 */

/**
 * @typedef {object}
 * @property {string} iconName
 * @property {string} classNames
 *
 */

const PivotComponent: FC<IReactComponentSate> = ({
    items,
    iconName,
    classNames
}: PivotProps): ReactElement => {
    return (
        <Pivot aria-label="Basic Pivot Example" className={`pivot ${classNames}`}>
            {items?.map((item: any) => (
                <PivotItem
                headerText={item.title}
                itemIcon={iconName}
                >
                    <Label>{item.children}</Label>
            </PivotItem>
            ))}
        </Pivot>
        );
};

export default PivotComponent;
