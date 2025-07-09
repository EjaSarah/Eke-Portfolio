// src/components/AppLayout.jsx
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Navbar from "./Navbar";
import Footer from "./Footer";
import WhatsAppButton from "./WhatsAppButton";
import Page from "./Page";

const StyledAppLayout = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
`;

const Main = styled.main`
  padding: 4rem 2rem;
  background-color: #000;
  color: #fff;
  overflow-y: auto;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

function AppLayout() {
  return (
    <StyledAppLayout>
      <Navbar />
      <Main>
        <Container>
          <Page>
            <Outlet />
          </Page>
        </Container>
      </Main>
      <Footer />
      <WhatsAppButton />
    </StyledAppLayout>
  );
}

export default AppLayout;
