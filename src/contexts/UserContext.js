import React, { useState } from "react";

const UserContext = React.createContext({
  name: "",
  email: "",
  home: "",
  blog: "",
  inNetwork: false,
});

export const useUserContext = () => React.useContext(UserContext);

/**
 * Build a component wrapper around {UserContext} to provide access to "global" data to children components
 * @param {Object} UserProviderProps
 * @param {React.ReactNode} UserProviderProps.children component children to wrap with the user context 
 * @returns 
 */
export const UserContextProvider = ({ children }) => {
  const [name, setName] = useState("Filipe");
  const [email, setEmail] = useState("filipegomes404@gmail.com");
  const [home, setHome] = useState("https://filipeloves.tech");
  const [blog, setBlog] = useState("https://bloggr.tech");
  const [isInNetwork, setIsInNetwork] = useState(false)

  const changeUser = (name, email, home, blog) => {
    setName(name);
    setEmail(email);
    setHome(home);
    setBlog(blog);
  };

  return (
    <UserContext.Provider
      value={{
        name,
        email,
        home,
        blog,
        isInNetwork,
        setIsInNetwork,
        changeUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
