import styled from "styled-components";

const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80vh;
  text-align: center;
  padding: 2rem;
  color: ${(props) => props.theme.accent}; /* ✅ Dynamic accent color */
`;

const IntroText = styled.h1`
  font-size: 2.5rem;
  line-height: 1.6;
  font-weight: 400;
  max-width: 800px;
`;

function Home() {
  return (
    <Section>
      <IntroText>
        Hi, thanks for stopping by my website. I am <strong>Eke Ume</strong>, a
        movie producer and logistics pro based in Lagos, Nigeria.
      </IntroText>
    </Section>
  );
}

export default Home;
