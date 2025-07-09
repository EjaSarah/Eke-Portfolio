import styled, { css } from "styled-components";

const Heading = styled.h1`
  color: gold;
  line-height: 1.4;
  margin-bottom: 1.6rem;

  ${(props) =>
    props.as === "h1" &&
    css`
      font-size: 3rem;
      font-weight: 700;
    `}

  ${(props) =>
    props.as === "h2" &&
    css`
      font-size: 2.5rem;
      font-weight: 600;
    `}

  ${(props) =>
    props.as === "h3" &&
    css`
      font-size: 2rem;
      font-weight: 500;
    `}
`;

export default Heading;
