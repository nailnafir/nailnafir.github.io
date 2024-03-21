import Introduction from "../components/wedding/Introduction";
import Home from "../components/wedding/Home";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FloatingButton from "../components/FloatingButton";
import Information from "../components/wedding/Information";
import Gift from "../components/wedding/Gift";
import Wish from "../components/wedding/Wish";
import Gallery from "../components/wedding/Gallery";

function MainWedding() {
  const darkModeWedding = false;
  const colorThemeWedding = "pink";
  const titlePersonal = "NayBey";
  const menuWedding = ["Beranda", "Informasi", "Ucapan", "Kado", "Galeri"];

  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();
  };

  return (
    <div onContextMenu={handleContextMenu}>
      <Introduction />
      <Header
        title={titlePersonal}
        colorTheme={colorThemeWedding}
        useDarkMode={darkModeWedding}
        listMenu={menuWedding}
      />
      <Home />
      <Information />
      <Wish />
      <Gift />
      <Gallery />
      <Footer colorTheme={colorThemeWedding} />
      <FloatingButton colorTheme={colorThemeWedding} />
    </div>
  );
}

export default MainWedding;
