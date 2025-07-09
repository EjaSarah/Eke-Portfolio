import styled from "styled-components";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

// Styled components

// Styled components
const ContactSection = styled.section`
  min-height: 100vh; /* Full viewport height */
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  background-color: #0a0a0a; /* Optional dark background */
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

// Functional Component
function ContactForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    toast.loading("Sending message...");

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          toast.dismiss();
          toast.success("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          toast.dismiss();
          toast.error("Failed to send message: " + error.text);
        }
      );
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
          <Form ref={form} onSubmit={sendEmail}>
            <Input
              type="text"
              name="from_name"
              placeholder="Your Name"
              required
            />
            <Input
              type="email"
              name="from_email"
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
