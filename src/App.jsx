import GlobalStyle from "./styles/GlobalStyles";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import WorkGallery from "./pages/WorkGallery";
import Reviews from "./pages/Reviews";
import ContactForm from "./pages/ContactForm";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./components/AppLayout";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="services" element={<Services />} />
            <Route path="work" element={<WorkGallery />} />
            <Route path="reviews" element={<Reviews />} />
            <Route path="contact" element={<ContactForm />} />
          </Route>

          <Route path="*" element={<PageNotFound />} />
        </Routes>

        <Toaster
          position="top-center"
          gutter={12}
          containerStyle={{ margin: "8px" }}
          toastOptions={{
            success: {
              duration: 3000,
            },
            error: {
              duration: 5000,
            },
            style: {
              fontSize: "16px",
              maxWidth: "500px",
              padding: "16px 24px",
              backgroundColor: "var(--color-grey-0)",
              color: "var(--color-grey-700)",
            },
          }}
        />
      </BrowserRouter>
    </>
  );
}

export default App;
