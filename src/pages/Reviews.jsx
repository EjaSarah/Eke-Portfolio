import styled from "styled-components";
import { motion } from "framer-motion";
import reviews from "../data/reviews";

const ReviewsSection = styled.section`
  padding: 4rem 2rem;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.color};
  transition: all 0.3s ease;
`;

const Title = styled.h2`
  margin-bottom: 2rem;
  text-align: center;
  color: ${({ theme }) => theme.accent};
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  align-items: start;

  @media (max-width: 960px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const ReviewCard = styled(motion.div)`
  background: ${({ theme }) =>
    theme.name === "dark" ? "rgba(255, 255, 255, 0.05)" : "#f5f5f5"};
  border-radius: 1rem;
  padding: 2rem;
  text-align: center;
  backdrop-filter: blur(4px);
  box-shadow: 0 4px 20px ${({ theme }) => theme.shadow};
  transition: background-color 0.3s ease, color 0.3s ease;
`;

const Avatar = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 1rem;
`;

const Comment = styled.p`
  font-style: italic;
  margin-bottom: 1rem;
  color: ${({ theme }) =>
    theme.name === "dark" ? "#ccc" : "#333"}; /* Ensures legibility */
`;

const Name = styled.h4`
  font-weight: bold;
  font-size: 1rem;
  color: ${({ theme }) =>
    theme.name === "dark" ? "#f0f0f0" : "#222"}; /* Dynamic name color */
`;

function Reviews() {
  return (
    <ReviewsSection>
      <Title>See what colleagues say about me</Title>
      <Grid>
        {reviews.map((review, i) => (
          <ReviewCard
            key={review.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            <Avatar loading="lazy" src={review.image} alt={review.name} />
            <Comment>“{review.text}”</Comment>
            <Name>- {review.name}</Name>
          </ReviewCard>
        ))}
      </Grid>
    </ReviewsSection>
  );
}

export default Reviews;
