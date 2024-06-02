import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar";
import SectionContactMe from "./Components/SectionContactMe";
import SectionProfile from "./Components/SectionProfile";
import SectionProjects from "./Components/SectionProjects";
function App() {
  return (
    <div className="App">
      <NavBar />
      <SectionProfile />
      <SectionProjects />
      <SectionContactMe />
      <Footer />
    </div>
  );
}

export default App;