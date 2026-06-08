import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import Training from "./components/Training";
import Projects from "./components/Projects";

const App = () => {
  return (
    <div className=" min-h-screen bg-zinc-950 text-white">
      < Header />
      <Main />
      <Training />
      <Projects />
      <Footer />
    </div >
  );
};

export default App;
