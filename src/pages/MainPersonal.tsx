import Header from "../components/Header";
import Me from "../components/personal/Me";
import About from "../components/personal/About";
import Projects from "../components/personal/Projects";
import Skills from "../components/personal/Skills";
import Contact from "../components/personal/Contact";
import Footer from "../components/Footer";
import FloatingButton from "../components/FloatingButton";

function MainPersonal() {
  const darkModePersonal = true;
  const colorThemePersonal = "red";
  const titlePersonal = "nailnafir";
  const menuPersonal = ["About", "Projects", "Skills", "Contact"];

  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();
  };

  return (
    <div onContextMenu={handleContextMenu}>
      <Header
        title={titlePersonal}
        colorTheme={colorThemePersonal}
        useDarkMode={darkModePersonal}
        listMenu={menuPersonal}
      />
      <Me />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer colorTheme={colorThemePersonal} />
      <FloatingButton colorTheme={colorThemePersonal} />
    </div>
  );
}

export default MainPersonal;
