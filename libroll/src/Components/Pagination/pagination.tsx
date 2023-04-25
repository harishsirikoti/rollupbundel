import { IconButton, IIconProps } from '@fluentui/react';
import * as React from 'react';
import { FC, ReactElement } from 'react';
import ReactPaginate from 'react-paginate';
import { Icon } from '@fluentui/react/lib/Icon';
import "./pagination.scss";
 
const ChevronRight = () => <Icon iconName="ChevronRight" />;
const ChevronLeft = () => <Icon iconName="ChevronLeft" />;


export interface PaginationProps {
    itemPerRow: number;
    totalItems: number;
    paginate: (pagenumber: number) => number;
    classNames: string;
    itemOffset: number;
    currentPage:any;
}
export interface IReactComponentSate
    extends React.ComponentState,
    PaginationProps { }


/**
 * @property {React.FC<IReactComponentSate>}
 * @returns {React.ReactElement}
 */

/**
 * @typedef {object}
 * @property {number} itemPerRow
 * @property {number} totalItems
 * @property {number} paginate
 * @property {number} currentPage
 * @property {number} itemOffset
 * @property {string} classNames //pagination--no-boder pagination--light-background  pagination--small pagination-medium pagination--large
 *
 */

const Pagination: FC<IReactComponentSate> = ({
    itemPerRow,
    totalItems,
    paginate, 
    classNames,
    itemOffset,
    currentPage
}: PaginationProps): ReactElement => { 

    const handlePageClick = (event: any) => {
        const newOffset = event.selected * itemPerRow % totalItems;
        paginate(newOffset)
    };

    return (
        <div className={`pagination ${classNames}`}>
            <ReactPaginate
                breakLabel="..."
                nextLabel={<ChevronRight />}
                onPageChange={handlePageClick}
                pageRangeDisplayed={itemPerRow}
                pageCount={totalItems / itemPerRow}
                activeClassName="active"
                disabledLinkClassName="disabled"
                previousLabel={<ChevronLeft />}
                forcePage={currentPage}
            />

        </div>
    );
};

export default Pagination;
