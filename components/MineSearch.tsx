import React from "react";
import styled from "styled-components";
import { createStore, combineReducers } from "redux";
import Form from "./Form";
import Table from "./Table";
import { START_GAME, TIMER, RESULT } from "../data";

const Container = styled.div``;

// interface IProps {
//   tableData: string[];
//   timer: number;
//   result: string;
// }

const MineSearch: React.FC = () => {
  const tableDataReducer = (tableData = [], action) => {
    switch (action.type) {
      case START_GAME:
        return {
          ...tableData,
        };
      default:
        return tableData;
    }
  };
  const timerReducer = (timer = 0, action) => {
    switch (action.type) {
      case TIMER:
        return {
          timer,
        };
      default:
        return timer;
    }
  };
  const resultReducer = (result = "", action) => {
    switch (action.type) {
      case RESULT:
        return {
          result,
        };
      default:
        return result;
    }
  };
  const rootReducer = combineReducers({
    tableDataReducer,
    timerReducer,
    resultReducer,
  });
  const store = createStore(rootReducer);
  store.dispatch({ type: START_GAME });
  return (
    <Container>
      <Form />
      <div>{store.getState().timerReducer}</div>
      <Table />
      <div>{store.getState().resultReducer}</div>
    </Container>
  );
};

export default MineSearch;
