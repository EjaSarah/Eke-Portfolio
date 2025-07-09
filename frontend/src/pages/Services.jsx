import styled from "styled-components";

const ServicesSection = styled.section`
  padding: 4rem 2rem;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.color};
  transition: all 0.3s ease;
`;

const Title = styled.h2`
  text-align: center;
  color: ${({ theme }) => theme.accent};
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 2rem;

  @media (max-width: 960px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const ServiceCard = styled.div`
  background-color: ${({ theme }) =>
    theme.name === "dark" ? "#111" : "#f9f9f9"};
  color: ${({ theme }) => theme.color};
  border: 1px solid ${({ theme }) => theme.accent};
  padding: 2rem;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 4px 20px ${({ theme }) => theme.shadow};
  transition: all 0.3s ease;

  p {
    color: ${({ theme }) =>
      theme.name === "dark" ? "#ccc" : "#333"}; // Ensures visibility
    margin-top: 1rem;
    line-height: 1.6;
  }
`;

const ServiceTitle = styled.h3`
  color: ${({ theme }) => theme.accent};
  margin-bottom: 1rem;
`;

function Services() {
  return (
    <ServicesSection>
      <Title>Services I Offer</Title>
      <Grid>
        <ServiceCard>
          <ServiceTitle>Film Production</ServiceTitle>
          <p>
            From ideation to post-production, I oversee and manage the entire
            movie production process.
          </p>
        </ServiceCard>

        <ServiceCard>
          <ServiceTitle>Event Logistics</ServiceTitle>
          <p>
            Efficient and detailed logistics planning and execution for media
            and entertainment events.
          </p>
        </ServiceCard>

        <ServiceCard>
          <ServiceTitle>Location Management</ServiceTitle>
          <p>
            Scouting, securing, and managing ideal locations for film and
            commercial shoots.
          </p>
        </ServiceCard>

        <ServiceCard>
          <ServiceTitle>Talent Coordination</ServiceTitle>
          <p>
            Organizing and managing talent schedules, communication, and travel.
          </p>
        </ServiceCard>

        <ServiceCard>
          <ServiceTitle>Production Consulting</ServiceTitle>
          <p>
            Advising producers and directors with expert insights on production
            workflows and budgeting.
          </p>
        </ServiceCard>

        <ServiceCard>
          <ServiceTitle>Vendor Sourcing</ServiceTitle>
          <p>
            Linking your production with trusted vendors for gear, catering, and
            other essentials.
          </p>
        </ServiceCard>
      </Grid>
    </ServicesSection>
  );
}

export default Services;
