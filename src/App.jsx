import { BrowserRouter } from "react-router-dom";
import Header from "./components/header";
import Router from "./components/Router";
import Footer from './components/Footer.jsx'

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
