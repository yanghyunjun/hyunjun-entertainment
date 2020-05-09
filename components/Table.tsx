import React from "react";
import styled from "styled-components";
import Tr from "./Tr";

const Container = styled.table``;
const Table: React.FC = () => {
  return (
    <Container>
      <Tr />
    </Container>
  );
};

export default Table;
