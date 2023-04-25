import * as React from "react";
import { Meta, Story } from "@storybook/react";
import PeoplePickerForm, { IPeoplePickerFormProps } from "./PeoplePickerForm";

export default {
  title: "FormControllers/PeoplePickerForm",
  component: PeoplePickerForm,
} as Meta;

const Template: Story<IPeoplePickerFormProps> = (args) => (
  <PeoplePickerForm {...args} />
);

/**  
yup schema declartion 
Owner: yup.array().min(1).max(1).of(
        yup.object().shape({
          text: yup.string().min(1).required(),
        })
      ).nullable().required(),

//form usage example:
<PeoplePickerForm
control={allFormsMethods.control}
setValue={allFormsMethods.setValue}
name={"Owner"}
label={"Owner"}
allPeopleList={peoplePickerOption}
recentPeoplePick={peoplePickerOption} 
isRequired={true}
isPeoplePickerDisabled={false}
itemLimt={1}
/>  
 * 
*/

const peoplePickerOption = [
  {
    key: 0,
    imageUrl:
      "https://static2.sharepointonline.com/files/fabric/office-ui-fabric-react-assets/persona-female.png",
    imageInitials: "PV",
    text: "sni",
    secondaryText: "Developer",
    tertiaryText: "In a meeting",
    optionalText: "Available at 4:00pm",
    isValid: true,
    presence: 0,
  },
];
export const ComboBox = Template.bind({});
ComboBox.args = {
  name: "Owner",
  label: "Owner",
  allPeopleList: [],
  recentPeoplePick: peoplePickerOption,
  selectedPeopleList: [],
  isRequired: true,
  isPeoplePickerDisabled: false,
  itemLimt: 1,
};
