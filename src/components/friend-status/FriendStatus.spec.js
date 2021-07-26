import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

import { FriendStatus } from "./FriendStatus";

const name = "Filipe";

describe("FriendSpace", () => {
  it("should render successfully", () => {
    const { baseElement } = render(
      <FriendStatus name={name} isInNetwork={false} />
    );
    expect(baseElement).toBeTruthy();
  });

  it("should say user is in extended network when isInNetwork is false", () => {
    const { baseElement } = render(
      <FriendStatus name={name} isInNetwork={false} />
    );
    expect(baseElement).toHaveTextContent("Filipe is in your extended network");
  });

  it("should say user is in your network when isInNetwork is false", () => {
    const { baseElement } = render(
      <FriendStatus name={name} isInNetwork={true} />
    );
    expect(baseElement).toHaveTextContent("Filipe is in your network");
  });
});
