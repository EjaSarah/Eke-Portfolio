// src/pages/Services.jsx
import styled from "styled-components";

const ServicesSection = styled.section`
  padding: 4rem 2rem;
  color: white;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const ServiceCard = styled.div`
  background-color: #111;
  border: 1px solid gold;
  padding: 2rem;
  border-radius: 10px;
  text-align: center;
`;

const ServiceTitle = styled.h3`
  color: gold;
  margin-bottom: 1rem;
`;

function Services() {
  return (
    <ServicesSection>
      <h2>Services I Offer</h2>
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
