import * as React from "react";
import {
  DefaultButton,
  Panel,
  PrimaryButton,
  Checkbox,
  List,
  Dropdown,
  IDropdownOption,
  ChoiceGroup,
  IChoiceGroupOption,
} from "@fluentui/react";

const SortGrid = ({ isOpenSort, dismissSort, columns, setColumns, applySortProps }: any) => {
  // code for reordering and sorting
  let sortedColumns: any,
    backupColumns: any,
    sortProps: any = { item: "", order: 'asc' },
    backupData: any;

  const [sortList, setSortList] = React.useState([...columns]);
  const [selectedItem, setSelectedItem] = React.useState<IDropdownOption>();
  const [selectedOrder, setSelectedOrder] = React.useState<
    string | undefined
  >();

  const onSortChange = React.useCallback(
    (
      event: React.FormEvent<HTMLDivElement>,
      item: IDropdownOption[] | any
    ): void => {
      setSelectedItem(item);
      sortProps.item = item.fieldName;
    },
    []
  );

  React.useEffect(() => {
    sortedColumns = [...columns];
    backupColumns = [...columns];
    // backupData = [...data];
  }, []);

  const dragItem: any = React.useRef();
  const dragOverItem: any = React.useRef();

  const dragStart = (e: any, position: any) => {
    dragItem.current = position;
  };

  const dragEnter = (e: any, position: any) => {
    dragOverItem.current = position;
  };

  const drop = (e: any) => {
    const copyListItems = [...sortedColumns];
    const dragItemContent = copyListItems[dragItem.current];
    copyListItems.splice(dragItem.current, 1);
    copyListItems.splice(dragOverItem.current, 0, dragItemContent);
    dragItem.current = null;
    dragOverItem.current = null;
    sortedColumns = copyListItems;
    setSortList(sortedColumns);
  };

  const onSortApply = () => {
    const filteredColumns = sortedColumns.filter((sc: any) => sc.showColumn);
    setColumns(filteredColumns);
    backupColumns = [...filteredColumns];
    applySortProps(sortProps);
    dismissSort();
  };

  const onSortDismiss = () => {
    columns.map((column: any) => (column.showColumn = true));
    sortedColumns = [...columns];
    setColumns(sortedColumns);
    setSortList(sortedColumns);
    sortProps = { item: "", order: 'asc' };
  };

  const onShowHideChange = (name: string) => {
    const columnsToSort = [...sortedColumns]
    columnsToSort.map((column) => {
      if (column.name === name) column.showColumn = !column.showColumn;
    });
    const list = [...columnsToSort];
    sortedColumns = [...list];
    setSortList(sortedColumns);
  };

  const getSortOptions = () => {
    return columns.filter(
      (list: any) => list.showColumn && !list.isSortColumn
    ) as IDropdownOption[];
  };

  const sortOrders: IChoiceGroupOption[] = [
    { key: 'asc', text: 'A to Z' },
    { key: 'desc', text: 'Z to A' },
  ];

  const onSortOrderChange = React.useCallback(
    (
      ev: React.SyntheticEvent<HTMLElement> | undefined,
      option: IChoiceGroupOption | undefined
    ) => {
      setSelectedOrder(option?.key);
      sortProps.order = option?.key;
    },
    []
  );

  // end of reordering and sorting

  /* Sort side panel footer */
  const onRenderFooterSort = React.useCallback(
    () => (
      <>
        <DefaultButton className="secondary" onClick={onSortDismiss}>
          Reset All
        </DefaultButton>
        <PrimaryButton onClick={onSortApply}>Apply</PrimaryButton>
      </>
    ),
    [dismissSort]
  );

  const onRenderListCell = React.useCallback(
    (item, index) =>
      !item.isSortColumn ? (
        <div
          className="item_drag"
          key={item.name}
          draggable
          onDragStart={(e) => dragStart(e, index)}
          onDragEnter={(e) => dragEnter(e, index)}
          onDragEnd={drop}
        >
          <Checkbox
            label={item.name}
            checked={item.showColumn}
            onChange={() => onShowHideChange(item.name)}
          />
        </div>
      ) : null,
    []
  );

  return (
    <>
      <Panel
        isLightDismiss
        isOpen={isOpenSort}
        onDismiss={dismissSort}
        headerText="Sorting"
        closeButtonAriaLabel="Close"
        onRenderFooterContent={onRenderFooterSort}
        isFooterAtBottom={true}
        className="sortings-container"
      >
        <List items={sortList} onRenderCell={onRenderListCell}></List>
        <Dropdown
          label="Controlled example"
          selectedKey={selectedItem ? selectedItem.key : undefined}
          onChange={onSortChange}
          placeholder="Select an option"
          options={getSortOptions()}
        />
        <ChoiceGroup
          selectedKey={selectedOrder}
          options={sortOrders}
          onChange={onSortOrderChange}
          label="Pick one"
        />
      </Panel>
    </>
  );
};

export default SortGrid;
