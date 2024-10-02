import React, { useEffect, useState } from "react";
import * as SaltComponents from "@salt-ds/core";
import axios from "axios";

import { Profiles } from "../../constants";

const constructUI = (config) => {
  const Component = SaltComponents[config.component];

  return (
    <>
      {!!Component ? (
        <Component {...config.props}>
          {config?.children?.map((item, index) => (
            <React.Fragment key={`${item.level}-${index}`}>
              {typeof item === "object" ? constructUI(item) : item}
            </React.Fragment>
          ))}
        </Component>
      ) : null}
    </>
  );
};

export const Profile = () => {
  const [template, setTemplate] = useState(null);
  const [profile, setProfile] = useState(Profiles.CLIENT_A);

  const handleProfile = (evt) => {
    setProfile(evt.target.value);
  };

  useEffect(() => {
    axios
      .get(`/db/${profile}.json`)
      .then((res) => {
        console.log("Template ::", res?.data?.template);
        setTemplate(res.data?.template);
      })
      .catch((err) => {
        console.err(`Error in fetching template :: ${err}`);
      });
  }, [profile]);

  return (
    <>
      <SaltComponents.StackLayout>
        <SaltComponents.FlexItem>
          <SaltComponents.RadioButtonGroup
            onChange={handleProfile}
            defaultValue={Profiles.CLIENT_A}
            direction="horizontal"
          >
            <SaltComponents.RadioButton
              label="Client Profile A"
              value="clientA"
            />
            <SaltComponents.RadioButton
              label="Client Profile B"
              value="clientb"
            />
          </SaltComponents.RadioButtonGroup>
        </SaltComponents.FlexItem>
        {template ? constructUI(template) : <>No Template</>}
      </SaltComponents.StackLayout>
    </>
  );
};
