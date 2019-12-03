import React from "react";
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from './App';
import PlayerList from "./classFetchPlayers";

afterEach(rtl.cleanup);
 
  test('darkmode is found', () => {
    const { getByText } = rtl.render(<App />);
    getByText('Dark Mode');
    rtl.render(<App />).debug()
  });