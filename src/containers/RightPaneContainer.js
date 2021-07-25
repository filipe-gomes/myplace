import React from "react";

import { FriendStatus } from "../components/friend-status/FriendStatus";
import { Blurbs } from "../components/blurbs/Blurbs";
import { FriendSpace } from "../components/friend-space/FriendSpace";

import { blurbsProps } from "../sample-data/blurbsProps.sample";
import { friendSpaceProps } from "../sample-data/friendSpaceProps.sample";

import { useUserContext } from "../contexts/UserContext";

export const RightPaneContainer = () => {
  const { name, isInNetwork } = useUserContext();
  const { about, peopleInterest } = blurbsProps;
  const { friends, enemies } = friendSpaceProps;
  return (
    <div>
      <FriendStatus name={name} isInNetwork={isInNetwork} />
      <Blurbs name={name} about={about} peopleInterest={peopleInterest} />
      <FriendSpace name={name} friends={friends} enemies={enemies} />
    </div>
  );
};
