import { BrowserRouter } from "react-router-dom";
import Router from "./components/Router";
import Footer from "./components/Footer";
import Header from "./components/Header";

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Router />
        <Footer />
      </div>
    </BrowserRouter>
  );
}
