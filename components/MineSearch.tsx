import React, { createContext, useMemo } from "react";
import styled from "styled-components";
import { createStore, combineReducers } from "redux";
import Form from "./Form";
import Table from "./Table";
import { START_GAME, TIMER, RESULT } from "../data";

const Container = styled.div``;

export const CODE = {
  MINE: -7,
  NOMAL: -1,
  QUESTION: -2,
  FLAG: -3,
  QUESTION_MINE: -4,
  FLAG_MINE: -5,
  CLICKED_MINE: -6,
  OPENED: 0,
};

const plantMine = (row, col, mine) => {
  console.log(row, col, mine);
  const condidate = Array(row * col)
    // .fill()
    .map((index) => {
      return index;
    });
  const shuffle = [];
  while (condidate.length > row * col - mine) {
    const chosen = condidate.splice(
      Math.floor(Math.random() * condidate.length),
      1
    )[0];
    shuffle.push(chosen);
  }
  const data = [];
  for (let i = 0; i < row; i++) {
    const rowData = [];
    data.push(rowData);
    for (let j = 0; j < col; j++) {
      rowData.push(CODE.NOMAL);
    }
  }
  for (let k = 0; k < shuffle.length; k++) {
    const ver = Math.floor(shuffle[k] / col);
    const hor = shuffle[k] % col;
    data[ver][hor] = CODE.MINE;
  }
  console.log(data);
  return data;
};
const tableDataReducer = (tableData = [], action) => {
  switch (action.type) {
    case START_GAME:
      return {
        ...tableData,
        tableData: plantMine(action.row, action.col, action.mine),
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

export const TableContext = createContext({
  tableData: [],
  store: store,
});
const MineSearch: React.FC = () => {
  const value = useMemo(
    () => ({
      tableData: store.getState().tableDataReducer,
      store: store,
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
