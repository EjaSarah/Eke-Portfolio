// src/pages/Reviews.jsx
import styled from "styled-components";
import { motion } from "framer-motion";
import reviews from "../data/reviews";

const ReviewsSection = styled.section`
  padding: 4rem 2rem;
  color: white;
`;

const Title = styled.h2`
  margin-bottom: 2rem;
  text-align: center;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 2rem;
`;

const ReviewCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 1rem;
  padding: 2rem;
  text-align: center;
  backdrop-filter: blur(5px);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
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
`;

const Name = styled.h4`
  font-weight: bold;
  font-size: 1rem;
  color: #f0f0f0;
`;

function Reviews() {
  return (
    <ReviewsSection>
      <Title>See what colleagues say about me</Title>
      <Grid>
        {reviews.map((review, i) => {
          const { id, image, text, name } = review;
          return (
            <ReviewCard
              key={id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <Avatar loading="lazy" src={image} alt={name} />
              <Comment>“{text}”</Comment>
              <Name>- {name}</Name>
            </ReviewCard>
          );
        })}
      </Grid>
    </ReviewsSection>
  );
}

export default Reviews;
