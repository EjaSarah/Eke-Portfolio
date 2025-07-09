import styled from "styled-components";
import profileImg from "../assets/images/bg-image.jpg";

const AboutSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 4rem 2rem;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
  }
`;

const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;

const ProfileImage = styled.img`
  width: 250px;
  height: 250px;
  border-radius: 50%;
  object-fit: cover;
  position: relative;
  box-shadow: 0 0 15px ${({ theme }) => theme.accent}55; /* Transparent accent */
`;

const TextContent = styled.div`
  flex: 2;
  color: ${({ theme }) => theme.color}; /* Uses light or dark text */
  font-size: 1.1rem;
  line-height: 1.8;
`;

function About() {
  return (
    <AboutSection>
      <ImageContainer>
        <ProfileImage src={profileImg} alt="Eke Ume" loading="lazy" />
      </ImageContainer>
      <TextContent>
        <p>
          Eke Ume is a renowned movie producer and logistics expert with a
          decade of hands-on experience in the entertainment industry. His deep
          understanding of both creative storytelling and seamless logistical
          execution sets him apart in the field. From coordinating
          multi-location shoots to producing gripping films, he brings vision
          and excellence to every project.
        </p>
      </TextContent>
    </AboutSection>
  );
}

export default About;
