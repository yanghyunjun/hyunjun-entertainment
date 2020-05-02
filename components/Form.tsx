import React, { useState, useMemo } from "react";
import styled from "styled-components";
import { createStore } from "redux";
import { createContext } from "vm";

const Form: React.FC = () => {
  const planeMine = () => {};
  const [row, setRow] = useState(10);
  const [col, setCol] = useState(10);
  const [mine, setMine] = useState(20);

  const TableContext = createContext({
    tableData: [],
  });

  const value = useMemo(() => ({ tableData }), [tableData]);

  const START_GAME = "START_GAME";
  return <div>hello world</div>;
};

export default Form;
