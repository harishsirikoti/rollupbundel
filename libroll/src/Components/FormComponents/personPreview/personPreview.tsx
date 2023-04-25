import {
  IPersonaSharedProps,
  Persona,
  PersonaPresence,
  PersonaSize,
} from "@fluentui/react";
import * as React from "react";
import { FC } from "react";

const personPreview: FC<any> = (data: any) => {
  return data.map((item: IPersonaSharedProps) => (
    <Persona
      text={item.text}
      size={PersonaSize.size24}
      presence={PersonaPresence.online}
      imageAlt={item.imageUrl}
      imageUrl={item.imageUrl}
      {...item}
    />
  ));
};
export default personPreview;
