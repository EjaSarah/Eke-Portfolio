import { useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { workItems } from "../data/workItems";

const GallerySection = styled.section`
  padding: 4rem 2rem;
  background-color: #111;
  color: white;
`;

const Title = styled.h2`
  text-align: center;
  font-size: 2rem;
  margin-bottom: 2rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const ImageContainer = styled(motion.div)`
  position: relative;
  overflow: hidden;
  /* border-radius: 20px; */
  cursor: pointer;

  &:hover img {
    transform: scale(1.05);
    filter: brightness(60%);
  }

  &:hover div {
    opacity: 1;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 10px;
  transition: transform 0.3s ease, filter 0.3s ease;
`;

const OverlayText = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1rem;
  background: rgba(0, 0, 0, 0.6);
  color: gold;
  opacity: 0;
  transition: 0.3s ease;
  border-radius: 0 0 10px 10px;
`;

const ModalOverlay = styled(motion.div)`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.85);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

const ModalContent = styled(motion.div)`
  background: #222;
  padding: 2rem;
  border-radius: 12px;
  text-align: center;
  max-width: 90%;
  max-height: 90%;
  overflow-y: auto;
`;

const ModalImage = styled.img`
  width: 100%;
  height: 60vh;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 1rem;
`;
const CloseButton = styled.button`
  margin-top: 1rem;
  padding: 0.6rem 1.2rem;
  background: gold;
  color: black;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background: #ffc107;
  }
`;

function WorkGallery() {
  const [selectedWork, setSelectedWork] = useState(null);

  return (
    <GallerySection>
      <Title>Previous Work</Title>

      <Grid>
        {workItems.map((item) => (
          <ImageContainer
            key={item.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: item.id * 0.1 }}
            viewport={{ once: true }}
            onClick={() => setSelectedWork(item)}
          >
            <Image src={item.img} alt={item.title} />
            <OverlayText>
              <strong>{item.title}</strong>
              <br />
              {item.description}
            </OverlayText>
          </ImageContainer>
        ))}
      </Grid>

      <AnimatePresence>
        {selectedWork && (
          <ModalOverlay
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedWork(null)}
          >
            <ModalContent
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <ModalImage src={selectedWork.img} alt={selectedWork.title} />
              <h3>{selectedWork.title}</h3>
              <p>{selectedWork.description}</p>
              <CloseButton onClick={() => setSelectedWork(null)}>
                Close
              </CloseButton>
            </ModalContent>
          </ModalOverlay>
        )}
      </AnimatePresence>
    </GallerySection>
  );
}

export default WorkGallery;
