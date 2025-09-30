import { BrowserRouter } from "react-router-dom";
import Router from "./components/Router";
import Footer from "./components/Footer";
import Header from "./components/Header";

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50 text-gray-900">
        <Header />
        <Router />
        <Footer />
      </div>
    </BrowserRouter>
  );
}
