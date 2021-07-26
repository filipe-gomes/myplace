import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

import { Blurbs } from "./Blurbs";
import { blurbsProps } from "../../sample-data/blurbsProps.sample";

const { name, about, peopleInterest } = blurbsProps;

describe("Blurbs", () => {
  it("should render successfully", () => {
    const { baseElement } = render(
      <Blurbs name={name} about={about} peopleInterest={peopleInterest} />
    );
    expect(baseElement).toBeTruthy();
  });
  it("should container an 'about me' and 'who I'd like to meet' sections", () => {
    const { baseElement } = render(
      <Blurbs name={name} about={about} peopleInterest={peopleInterest} />
    );
    expect(baseElement).toHaveTextContent("About me");
    expect(baseElement).toHaveTextContent("Who I'd like to meet");
  });
});
