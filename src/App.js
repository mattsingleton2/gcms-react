import Home from "./components/HomeComponent";
import Header from "./components/HeaderComponent";
import Footer from "./components/FooterComponent";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <div className="outer-theme h-100 w-100">
        <Home />
      </div>
      <Footer />
    </>
  );
}

export default App;
