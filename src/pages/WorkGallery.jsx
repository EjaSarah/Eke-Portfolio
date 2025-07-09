import { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

// Import images
import sample1 from "../assets/images/onset-1.jpg";
import sample2 from "../assets/images/onset-2.jpg";
import sample3 from "../assets/images/onset-3.jpg";
import sample4 from "../assets/images/onset-4.jpg";
import sample5 from "../assets/images/onset-5.jpg";
import sample6 from "../assets/images/onset-6.jpg";

// Work data
const workItems = [
  {
    id: 1,
    img: sample1,
    title: "Eke Logistics UI",
    description: "Modern UI for a delivery company’s web app",
  },
  {
    id: 2,
    img: sample2,
    title: "Nollywood Movie Page",
    description: "Movie trailer landing page with booking flow",
  },
  {
    id: 3,
    img: sample3,
    title: "Tech Conference Flyer",
    description: "Bold design for African tech summit",
  },
  {
    id: 4,
    img: sample4,
    title: "Actor Portfolio",
    description: "Professional site for filmmaker and producer",
  },
  {
    id: 5,
    img: sample5,
    title: "Rental Booking Dashboard",
    description: "Easy-to-use dashboard for film gear rental",
  },
  {
    id: 6,
    img: sample6,
    title: "Storytelling Brand Kit",
    description: "Full brand identity for African storytellers",
  },
];

const GallerySection = styled.section`
  padding: 4rem 2rem;
  color: white;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const ImageContainer = styled(motion.div)`
  position: relative;
  overflow: hidden;
  border-radius: 10px;
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
  height: 250px;
  object-fit: cover;
  transition: 0.3s ease;
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
`;

// Modal styles
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.85);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  max-width: 90%;
  max-height: 90%;
  text-align: center;
  color: white;
`;

const ModalImage = styled.img`
  max-width: 100%;
  max-height: 80vh;
  border-radius: 10px;
  margin-bottom: 1rem;
`;

const CloseButton = styled.button`
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  background: gold;
  color: black;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

function WorkGallery() {
  const [selectedWork, setSelectedWork] = useState(null);

  return (
    <GallerySection>
      <h2>Previous Work</h2>
      <Grid>
        {workItems.map((item) => (
          <ImageContainer
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
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

      {/* Modal Lightbox */}
      {selectedWork && (
        <ModalOverlay onClick={() => setSelectedWork(null)}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <ModalImage src={selectedWork.img} alt={selectedWork.title} />
            <h3>{selectedWork.title}</h3>
            <p>{selectedWork.description}</p>
            <CloseButton onClick={() => setSelectedWork(null)}>
              Close
            </CloseButton>
          </ModalContent>
        </ModalOverlay>
      )}
    </GallerySection>
  );
}

export default WorkGallery;
