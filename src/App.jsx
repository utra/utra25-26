import { BrowserRouter } from "react-router-dom";
import Header from "./components/header";
import Router from "./components/Router";

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50 text-gray-900">
        <Header />
        <Router />
      </div>
    </BrowserRouter>
  );
}
