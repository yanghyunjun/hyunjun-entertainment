import React from "react";
import styled from "styled-components";
import { NextPage } from "next";
import MineSearch from "../components/MineSearch";

const Container = styled.div``;

const index: NextPage = () => {
  return (
    <Container>
      <MineSearch />
    </Container>
  );
};

export default index;
