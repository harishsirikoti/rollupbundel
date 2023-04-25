import * as React from "react";

import {
  IStyleSet,
  Label,
  ILabelStyles,
  Pivot,
  PivotItem,
} from "@fluentui/react";

const labelStyles: Partial<IStyleSet<ILabelStyles>> = {
  root: { marginTop: 10 },
};
export interface IPivotProps {
  items: any;
  children: React.ReactNode | any;
}
const PivotVertical: React.FC<IPivotProps> = ({
  items,
}): React.ReactElement => (
  <Pivot aria-label="Document Details">
    {items?.map((item: any) => (
      <PivotItem headerText={item.title}>
        <Label>{item.children}</Label>
      </PivotItem>
    ))}
  </Pivot>
);

export default PivotVertical;
