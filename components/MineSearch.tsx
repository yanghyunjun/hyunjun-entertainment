import React, { createContext, useMemo } from "react";
import styled from "styled-components";
import { createStore, combineReducers } from "redux";
import Form from "./Form";
import Table from "./Table";
import { START_GAME, TIMER, RESULT } from "../data";

const Container = styled.div``;

export const TableContext = createContext({
  tableData: [],
  store: () => {},
});

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
  const value = useMemo(
    () => ({
      tableData: store.getState().tableDataReducer,
      store,
    }),
    [store.getState().tableDataReducer]
  );
  return (
    <Container>
      <TableContext.Provider value={value}>
        <Form />
        <div>{store.getState().timerReducer}</div>
        <Table />
        <div>{store.getState().resultReducer}</div>
      </TableContext.Provider>
    </Container>
  );
};

export default MineSearch;
