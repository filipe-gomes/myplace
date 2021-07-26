import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

import { UserInterests } from "./UserInterests";
import { userInterestsProps } from "../../sample-data/userInterestsProps.sample";

const name = "Filipe";
const interests = userInterestsProps;

describe("UserInterests", () => {
  it("should render successfully", () => {
    const { baseElement } = render(
      <UserInterests name={name} interests={interests} />
    );
    expect(baseElement).toBeTruthy();
  });

  it("should contain a 'General' section of interests", () => {
    const { baseElement } = render(
      <UserInterests name={name} interests={interests} />
    );
    expect(baseElement).toBeTruthy();
    expect(baseElement).toHaveTextContent("General");
  });
});
