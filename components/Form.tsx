import React, { useState, useCallback, useContext } from "react";
import styled from "styled-components";
import { TableContext } from "./MineSearch";
import { START_GAME } from "../data";

const Container = styled.div``;

const Form: React.FC = () => {
  const [row, setRow] = useState(10);
  const [col, setCol] = useState(10);
  const [mine, setMine] = useState(20);
  const { store } = useContext(TableContext);

  const onChangeRow = useCallback((e) => {
    setRow(e.target.value);
  }, []);
  const onChangeCol = useCallback((e) => {
    setCol(e.target.value);
  }, []);
  const onChangeMine = useCallback((e) => {
    setMine(e.target.value);
  }, []);

  const onChangeBtn = useCallback(() => {});
  return (
    <Container>
      <input
        type="number"
        placeholder="가로"
        value={col}
        onChange={onChangeCol}
      />
      <input
        type="number"
        placeholder="세로"
        value={row}
        onChange={onChangeRow}
      />
      <input
        type="number"
        placeholder="지뢰"
        value={mine}
        onChange={onChangeMine}
      />
    </Container>
  );
};

export default Form;
