import React from "react";

import { UserDetails } from "../components/user-details/UserDetails";
import { ContactControls } from "../components/contact-controls/ContactControls";
import { UserInterests } from "../components/user-interests/UserInterests";
import { userDetailsProps } from "../sample-data/userDetailsProps.sample";
import { userInterestsProps } from "../sample-data/userInterestsProps.sample";

const { description, gender, age, location, lastLogin } = userDetailsProps;

export const LeftPaneContainer = () => (
  <div>
    <UserDetails
      description={description}
      gender={gender}
      age={age}
      location={location}
      lastLogin={lastLogin}
    />
    <ContactControls />
    <UserInterests interests={userInterestsProps} />
  </div>
);
