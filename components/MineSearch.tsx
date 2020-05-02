import React from "react";
import styled from "styled-components";
import { createStore } from "redux";
import Form from "./Form";
import Table from "./Table";
import { START_GAME } from "../data";

const Container = styled.div``;

interface IProps {
  tableData: string[];
  timer: number;
  result: string;
}
const reducer = (state, action) => {
  switch (action.type) {
    case START_GAME:
      return {
        ...state,
        tableData: planeMine(),
      };
    default:
      return state;
  }
};
const MineSearch: React.FC<IProps> = ({ tableData, timer, result }) => {
  const store = createStore(reducer);
  return (
    <Container>
      <Form />
      <div>{timer}</div>
      <Table />
      <div>{result}</div>
    </Container>
  );
};

export default MineSearch;
