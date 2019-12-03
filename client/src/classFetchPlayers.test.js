import React from "react";
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import PlayerList from "./classFetchPlayers";

afterEach(rtl.cleanup);

test("renders players", () => {
    const { getByTestId } = rtl.render(<PlayerList />)
    getByTestId("playerList")
});