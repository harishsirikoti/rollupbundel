import momentTZ from 'moment-timezone';

const getSortedList = (dataToSort: any, sortProps: any) => {
    //console.log('dataToSort', dataToSort);
  dataToSort.sort((value1: any, value2: any) =>
    value1[sortProps.item] > value2[sortProps.item]
      ? sortProps.order === "asc"
        ? 1
        : -1
      : sortProps.order === "asc"
      ? -1
      : 1
  );
  return dataToSort;
};

const applySortPaginate = (
  filterBackup: any,
  sortProps: any,
  itemsPerPage: number
) => {
  let rows = [...filterBackup];
  if (sortProps.item) {
    rows = getSortedList(rows, sortProps);
  }
  return {
    backupData: rows,
    data: rows.slice(sortProps.startIndex, sortProps.startIndex + itemsPerPage),
  };
};


const filterPaginate = (dataClone: any, columns: any, filterData: any, backupData: any, sortProps: any, itemsPerPage: number, DateFormatValue : string) => {
    let isFilterApplied = false;
    let filteredData: any = [...dataClone];
    columns.map((column:any) => {
      if (filterData[column.filterFieldName]) {
        isFilterApplied = true;
        switch (column.filterOps) {
          case "eq":
            filteredData = filteredData.filter(
              (row: any) =>
              row[column["fieldName"]] ===  filterData[column["filterFieldName"]] 
            );
            break;
          case "contains":
            
                filteredData = filteredData.filter((row: any) =>{
                    if(row[column.fieldName] != null && typeof row[column.fieldName] !== "undefined"){
                    return  row[column.fieldName].toString().toLowerCase().includes(filterData[column.filterFieldName].toString().toLowerCase())
                    }
                  }
                );
            break;
          case "gt":
            filteredData = filteredData.filter(
              (row: any) => 
              row[column["fieldName"]] > filterData[column["filterFieldName"]] 
            );
            break;
          case "lt":
            filteredData = filteredData.filter(
              (row: any) => 
              row[column["fieldName"]] < filterData[column["filterFieldName"]] 
            );
            break;
          case "gte":
            filteredData = filteredData.filter(
              (row: any) =>
              row[column["fieldName"]] >= filterData[column["filterFieldName"]] 
            );
            break;
          case "lte":
            filteredData = filteredData.filter(
              (row: any) =>
              row[column["fieldName"]] <= filterData[column["filterFieldName"]] 
            );
            break;
            case "deq":
            filteredData = filteredData.filter(
              (row: any) =>
                row[column["fieldName"]] === momentTZ(filterData[column["filterFieldName"]] ).format(DateFormatValue)
                );
                break;
        }
      }
    });
    let dataToUpdate = !isFilterApplied ? dataClone : filteredData;
    if (sortProps.item) {
      dataToUpdate = getSortedList(dataToUpdate, sortProps);
    }
    return {dataToUpdate: dataToUpdate.slice(sortProps.startIndex, sortProps.startIndex + itemsPerPage), dataForBackup: dataToUpdate};
}

export {
    getSortedList,
    applySortPaginate,
    filterPaginate
}