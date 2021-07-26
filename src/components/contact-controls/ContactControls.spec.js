import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

import { ContactControls } from "./ContactControls";
import { userDetailsProps } from "../../sample-data/userDetailsProps.sample";

const { name, email } = userDetailsProps;

describe("ContactControls", () => {
  it("should render successfully", () => {
    const { baseElement } = render(
      <ContactControls name={name} email={email} />
    );
    expect(baseElement).toBeTruthy();
  });

  it("should include link to email user", () => {
    const { baseElement } = render(
      <ContactControls name={name} email={email} />
    );
    expect(baseElement).toBeTruthy();
    expect(document.querySelector("a").getAttribute("href")).toBe(`mailto:${email}`)
  });
});
