import { useEffect, useState } from "react";
import { FloatingButtonInterface } from "../interfaces/Basic";

function FloatingButton({ colorTheme }: FloatingButtonInterface) {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setShowButton(false);
      } else {
        setShowButton(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  let colorThemeProperties: {
    backgroundColor?: string;
  } = {};

  switch (colorTheme) {
    case "red":
      colorThemeProperties = {
        backgroundColor: "bg-red-500",
      };
      break;

    case "pink":
      colorThemeProperties = {
        backgroundColor: "bg-pink-500",
      };
      break;

    default:
      break;
  }

  const { backgroundColor } = colorThemeProperties;

  return (
    <button
      onClick={scrollToTop}
      className={`z-50 fixed bottom-8 right-8 p-4 text-white ${backgroundColor} rounded-full shadow-lg ${
        showButton ? "block" : "hidden"
      }`}
    >
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="3"
          d="M5 10l7-7m0 0l7 7m-7-7v18"
        ></path>
      </svg>
    </button>
  );
}

export default FloatingButton;
