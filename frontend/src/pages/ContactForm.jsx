// src/pages/Contact.jsx
import { useState } from "react";
import styled from "styled-components";
import axios from "axios";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";

// BACKEND URL (update before deploying)
const BACKEND_URL = "http://localhost:5000/contact"; // or your live server

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

// Functional Component
function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    toast.loading("Sending...");

    try {
      await axios.post(BACKEND_URL, form);
      toast.dismiss();
      toast.success("Message sent successfully!");
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error:", error);
      toast.dismiss();
      toast.error("Failed to send message. Try again.");
    }
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
          <Form onSubmit={handleSubmit}>
            <Input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
            />
            <Input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              required
            />
            <TextArea
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              required
            />
            <Button type="submit">Send Message</Button>
          </Form>
        </motion.div>
      </Container>
    </ContactSection>
  );
}

export default ContactForm;
