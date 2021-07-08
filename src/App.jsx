import { Switch } from "react-router-dom";
import styled from "styled-components";
import { Routes } from "@/router";
import Navbar from "#/Navbar";
import Footer from "#/Footer";

import "%/css/main.css";

const Wrapper = styled.div`
  min-height: 100%;
  max-width: calc(768px + 16px * 2);

  display: flex;
  flex-direction: column;

  margin: 0 auto;
  padding: 0 16px;
`;

export default function App() {
  return (
    <Wrapper>
      <Navbar />
      <Switch>
        <Routes />
      </Switch>
      <Footer />
    </Wrapper>
  );
}
