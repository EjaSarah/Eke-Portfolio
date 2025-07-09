import styled from "styled-components";
import { useMoveBack } from "../hooks/useMoveBack";
import Heading from "../components/Heading";

const StyledPageNotFound = styled.main`
  height: 100vh;
  background-color: #0d0d0d; /* dark background */
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4.8rem;
`;

const Box = styled.div`
  background-color: #1a1a1a;
  border: 1px solid #333;
  border-radius: 12px;
  padding: 4.8rem;
  max-width: 700px;
  width: 100%;
  text-align: center;
  color: white;

  & h1 {
    margin-bottom: 3.2rem;
    color: gold;
  }
`;

const BackButton = styled.button`
  padding: 1rem 2rem;
  background-color: gold;
  color: #0d0d0d;
  border: none;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  font-size: 1rem;
  transition: all 0.3s ease;

  &:hover {
    background-color: #f5c400;
    transform: translateY(-2px);
  }
`;

function PageNotFound() {
  const moveBack = useMoveBack();

  return (
    <StyledPageNotFound>
      <Box>
        <Heading as="h1">
          The page you are looking for could not be found 😢
        </Heading>
        <BackButton onClick={moveBack}>&larr; Go back</BackButton>
      </Box>
    </StyledPageNotFound>
  );
}

export default PageNotFound;
