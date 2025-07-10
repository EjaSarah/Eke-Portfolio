import { useRef } from "react";
import styled from "styled-components";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";
import emailjs from "emailjs-com";

// Styled Components
const ContactSection = styled.section`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  background-color: #0a0a0a;
  color: white;
`;

const Container = styled.div`
  width: 100%;
  max-width: 600px;
  text-align: center;
`;

const Title = styled.h2`
  margin-bottom: 2rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
`;

const Input = styled.input`
  padding: 1rem;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
`;

const TextArea = styled.textarea`
  padding: 1rem;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  height: 150px;
`;

const Button = styled.button`
  background-color: gold;
  color: black;
  padding: 1rem;
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #e6c200;
  }
`;

// Component
function ContactForm() {
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const toastId = toast.loading("Sending...");

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )

      .then(() => {
        toast.success("Message sent successfully!", { id: toastId });
        formRef.current.reset();
      })
      .catch(() => {
        toast.error("Failed to send message. Try again.", { id: toastId });
      });
  };

  return (
    <ContactSection>
      <Toaster position="top-center" />
      <Container>
        <Title>Want us to work together? Leave me a message.</Title>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Form ref={formRef} onSubmit={handleSubmit}>
            <Input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
            />
            <Input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
            />
            <TextArea name="message" placeholder="Your Message" required />
            <Button type="submit">Send Message</Button>
          </Form>
        </motion.div>
      </Container>
    </ContactSection>
  );
}

export default ContactForm;
