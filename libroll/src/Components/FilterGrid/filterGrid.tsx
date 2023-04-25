import * as React from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { DefaultButton, Panel, PrimaryButton } from '@fluentui/react';
import DynamicFieldLoad from '../FormComponents/DynamicFieldLoad/DynamicFieldLoad';

const FilterGrid = ({
  isOpenFilter,
  dismissFilter,
  columnsBackup,
  applyFilterProps,
}: any) => {
  /* {
    text: "File Type",
   filterCtrl: "TextFieldForm",
   filterOps: 'eq',
   showColumn: true,
   filterFieldName: "qmsid",
   dataType: "date", //only for date
   isFilterOnly: true, //only for date renge
 }
  */
  interface IFilterData {
    Status?: string;
    PendingTasksName?: string;
  }

  const columnsClone = JSON.parse(JSON.stringify(columnsBackup));
  // schema declaration validation
  const FilterSchema: yup.SchemaOf<IFilterData> = yup.object().shape({
    Status: yup.string(),
    PendingTasksName: yup.string(),
  });

  // React.useEffect(() => {
  //   columnsClone = JSON.parse(JSON.stringify(columnsBackup));
  // }, [columnsBackup])

  const FilterFormsMethods = useForm<any>({
    defaultValues: {
      documentid: "",
      taskname: "",
      status: "",
      department: "",
      documenttype: "",
      doctitle: "",
      docversion: "",
      taskduedate:"",
      approvaldate:"",
      effectivedate:"",
      title:'',
      version:'',
      owner:'',
      qmsid:'',
      docMajorversion:'',
    },
    mode: 'all',
    resolver: async (data, context, options) => yupResolver(FilterSchema)(data, context, options),
  });

 
  //console.log(FilterFormsMethods.watch());
  FilterFormsMethods.watch();
  const getAdditionalProps = (item: any) => {
    item.control = FilterFormsMethods.control;
    item.setValue = FilterFormsMethods.setValue;
    item.register = FilterFormsMethods.register;
    item.label = item.text;
    item.name = item.filterFieldName;
    return item;
  };

  const FilterFormSubmit: SubmitHandler<any> = async (
    filterData: any,
    save: any,
  ) => {
    applyFilterProps(filterData);
    dismissFilter();
  };

  const onReset = () => {
    applyFilterProps({});
    FilterFormsMethods.reset({
      documentid: "",
      taskname: "",
      status: "",
      department: "",
      documenttype: "",
      doctitle: "",
      docversion: "",
      taskduedate:"",
      approvaldate:"",
      effectivedate:"",
      title:'',
      version:'',
      owner:'',
      qmsid:'',
      docMajorversion:'',
    });
  };

  /* Filter side panel footer */
  const onRenderFooterFilter = React.useCallback(
    () => (
      <>
        <DefaultButton className="secondary" onClick={onReset}>
          Reset All
        </DefaultButton>
        <PrimaryButton
          text="Submit"
          type="submit"
          onClick={FilterFormsMethods.handleSubmit(FilterFormSubmit)}
        />
      </>
    ),
    [dismissFilter],
  );

  return (
    <FormProvider {...FilterFormsMethods}>
      <form onSubmit={FilterFormsMethods.handleSubmit(FilterFormSubmit)}>
        <Panel
          isLightDismiss
          isOpen={isOpenFilter}
          onDismiss={dismissFilter}
          headerText="Filter"
          closeButtonAriaLabel="Close"
          onRenderFooterContent={onRenderFooterFilter}
          isFooterAtBottom
        >
          {columnsClone?.map((item: any) => {
            const updatedItem = getAdditionalProps(item);
            return item.filterCtrl
              ? DynamicFieldLoad(item.filterCtrl, updatedItem)
              : null;
          })}
        </Panel>
      </form>
    </FormProvider>
  );
};

export default FilterGrid;