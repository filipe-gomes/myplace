import React from "react";

import styles from "./FriendStatus.module.css";

/**
 * Component for showing whether user is part of your network
 * @param {string} name name of user
 * @param {boolean} isInNetwork states whether user is part of your network
 * @returns {React.FC}
 */
export const FriendStatus = ({ name, isInNetwork }) => {
  if (isInNetwork) {
    return (
      <div className={styles.status}>{name} is in your network</div>
    );
  }
  return (
    <div className={styles.status}>{name} is in your extended network</div>
  );
};
