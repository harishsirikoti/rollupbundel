import * as React from "react";
import { Meta, Story } from "@storybook/react";
import Pagination, { PaginationProps } from "./pagination";

export default {
  title: "Components/Pagination",
  component: Pagination,
} as Meta;

const Template: Story<PaginationProps> = (args) => <Pagination {...args} />;

const paginate = (): any => {
 
}; 
export const PaginationExample = Template.bind({});
PaginationExample.args = {
  itemPerRow:2, 
  totalItems:100,
  paginate:paginate,
  classNames:'pagination--no-border'
}; 
/* 

  const paginate = (pageNumber: number): any => {
    setCurrentPage(pageNumber);
  };

 <Pagination
      paginate={paginate}
      itemPerRow={itemsPerPage}
      currentPage={currentPage}
      totalItems={documentData?.length}
    />
             
  */
