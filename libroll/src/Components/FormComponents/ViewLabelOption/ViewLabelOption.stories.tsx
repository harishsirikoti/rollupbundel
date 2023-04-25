import * as React from "react";
import { Meta, Story } from "@storybook/react";
import ViewLabelOption, { IViewprops } from "./ViewLabelOption";

export default {
  title: "Components/ViewLabelOption",
  component: ViewLabelOption,
} as Meta;

const Template: Story<IViewprops> = (args) => <ViewLabelOption {...args} />;

export const viewLabels = Template.bind({});
viewLabels.args = {
  type: "PeoplePickerForm",
  label: "Personviews",
  value: [
    {
      imageUrl:
        "https://static2.sharepointonline.com/files/fabric/office-ui-fabric-react-assets/persona-female.png",
      imageInitials: "PV",
      text: "SnigdhaShree",
      secondaryText: "Developer",
      tertiaryText: "In a meeting",
      optionalText: "Available at 4:00pm",
      isValid: true,
      presence: 0,
    },
  ],
};

export const viewLabelDate = Template.bind({});
viewLabelDate.args = {
  type: "DatePickerForm",
  label: "Date",
  value: 'Wed Aug 31 2022 20:34:57 GMT+0530 (India Standard Time)',
};

export const ViewText = Template.bind({});
ViewText.args = {
  label: "Name",
  value: 'Rajashekhar Adukani',
};
