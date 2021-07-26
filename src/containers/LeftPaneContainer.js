import React from "react";

import { UserDetails } from "../components/user-details/UserDetails";
import { ContactControls } from "../components/contact-controls/ContactControls";
import { UserInterests } from "../components/user-interests/UserInterests";
import { userDetailsProps } from "../sample-data/userDetailsProps.sample";
import { userInterestsProps } from "../sample-data/userInterestsProps.sample";
import { useUserContext } from "../contexts/UserContext";

const { description, gender, age, location, lastLogin } = userDetailsProps;

/**
 * Build container that wraps left pane components into a single functional component
 * @returns {React.FC}
 */
export const LeftPaneContainer = () => {
  const { name, email } = useUserContext();
  return (
    <div>
      <UserDetails
        name={name}
        description={description}
        gender={gender}
        age={age}
        location={location}
        lastLogin={lastLogin}
      />
      <ContactControls name={name} email={email} />
      <UserInterests name={name} interests={userInterestsProps} />
    </div>
  );
};
