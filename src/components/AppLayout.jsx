import { Outlet } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import Navbar from "./Navbar";
import Footer from "./Footer";
import WhatsAppButton from "./WhatsAppButton";
import Page from "./Page";
import { useState } from "react";
import GlobalStyle from "../styles/GlobalStyles"; // ✅ Add this line

// Theme definitions
const darkTheme = {
  background: "#000",
  color: "#fff",
  accent: "#FFD700",
  shadow: "rgba(255, 215, 0, 0.2)",
};

const lightTheme = {
  background: "#fff",
  color: "#000",
  accent: "#DAA520",
  shadow: "rgba(218, 165, 32, 0.2)",
};

const StyledAppLayout = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.color};
`;

const Main = styled.main`
  padding-inline: clamp(1rem, 4vw, 2rem);
  padding-block: clamp(2rem, 6vh, 4rem);
  overflow-y: auto;
  width: 100%;
`;

const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: clamp(2rem, 4vh, 3rem);
  flex-grow: 1;
`;

function AppLayout() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <>
        <GlobalStyle />
        <StyledAppLayout>
          <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
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
      </>
    </ThemeProvider>
  );
}

export default AppLayout;
