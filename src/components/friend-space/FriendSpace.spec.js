import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

import { FriendSpace } from "./FriendSpace";
import { friendSpaceProps } from "../../sample-data/friendSpaceProps.sample";

const { friends, enemies } = friendSpaceProps;
const name = "Filipe";

describe("FriendSpace", () => {
  it("should render successfully", () => {
    const { baseElement } = render(
      <FriendSpace name={name} friends={friends} enemies={enemies} />
    );
    expect(baseElement).toBeTruthy();
  });

  it("should include button to show enemies", () => {
    const { baseElement, getByTestId } = render(
      <FriendSpace name={name} friends={friends} enemies={enemies} />
    );
    expect(baseElement).toBeTruthy();
    expect(getByTestId("enemy-btn")).toHaveTextContent(
      `View ${name}'s Enemies`
    );
  });

  it("should change text on button and header when clicked", () => {
    const { baseElement, getByTestId } = render(
      <FriendSpace name={name} friends={friends} enemies={enemies} />
    );
    expect(baseElement).toBeTruthy();
    expect(getByTestId("friend-space-header")).toHaveTextContent(
      `${name}'s Friend Space`
    );
    expect(getByTestId("enemy-btn")).toHaveTextContent(
      `View ${name}'s Enemies`
    );
    fireEvent.click(getByTestId("enemy-btn"));
    expect(document.querySelector("button")).toHaveTextContent(
      `View ${name}'s Friends`
    );
    expect(getByTestId("friend-space-header")).toHaveTextContent(
      `${name}'s Enemy Space`
    );
  });
});
