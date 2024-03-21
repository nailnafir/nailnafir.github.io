import { useState, useEffect } from "react";
import { HeaderInterface } from "../interfaces/Basic";

function Header({ title, colorTheme, useDarkMode, listMenu }: HeaderInterface) {
  const [activeMenu, setActiveMenu] = useState(99);
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const changeMenuHandler = (index: number) => {
    setActiveMenu(index);
    handleMenuClick(listMenu[index].toLowerCase());
  };

  const mobileMenuHandler = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  const toggleTheme = () => setDarkMode((prevMode) => !prevMode);

  const handleMenuClick = (targetId: string) => {
    const targetElement = document.getElementById(targetId);
    targetElement!.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    const mediaQuery = window.matchMedia("(prefers-color-scheme: light)");
    const handleChange = (e: MediaQueryListEvent) => setDarkMode(e.matches);
    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("dark", darkMode);
  }, [darkMode]);

  useEffect(() => {
    const handleScroll = () => {
      const currentSectionIndex = listMenu.findIndex((menu) => {
        const section = document.getElementById(menu.toLowerCase());
        if (section) {
          const rect = section.getBoundingClientRect();
          return rect.top <= 0 && rect.bottom > 0;
        }
        return false;
      });

      if (currentSectionIndex !== -2) {
        setActiveMenu(currentSectionIndex);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [listMenu]);

  let colorThemeProperties: {
    textColor?: string;
    hoverTextColor?: string;
    darkHoverTextColor?: string;
    fillColor?: string;
    borderBottomColor?: string;
    hoverBorderBottomColor?: string;
    darkHoverBorderBottomColor?: string;
  } = {};

  switch (colorTheme) {
    case "red":
      colorThemeProperties = {
        textColor: "text-red-500",
        hoverTextColor: "hover:text-red-500",
        darkHoverTextColor: "dark:hover:text-red-500",
        fillColor: "fill-red-500",
        borderBottomColor: "border-b-red-500",
        hoverBorderBottomColor: "hover:border-b-red-500",
        darkHoverBorderBottomColor: "dark:hover:border-b-red-500",
      };
      break;

    case "pink":
      colorThemeProperties = {
        textColor: "text-pink-500",
        hoverTextColor: "hover:text-pink-500",
        darkHoverTextColor: "dark:hover:text-pink-500",
        fillColor: "fill-pink-500",
        borderBottomColor: "border-b-pink-500",
        hoverBorderBottomColor: "hover:border-b-pink-500",
        darkHoverBorderBottomColor: "dark:hover:border-b-pink-500",
      };
      break;

    default:
      break;
  }

  const {
    textColor,
    hoverTextColor,
    darkHoverTextColor,
    fillColor,
    borderBottomColor,
    hoverBorderBottomColor,
    darkHoverBorderBottomColor,
  } = colorThemeProperties;

  console.log("colorTheme: ", colorTheme);

  return (
    <header className="sticky top-0 z-50 items-center w-full bg-white bg-white/60 dark:bg-slate-900/80 backdrop-blur-sm">
      <div className="px-3 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center">
            {/* <!-- Mobile menu button--> */}
            <a
              className="flex items-center flex-shrink-0"
              onClick={() => handleMenuClick("home")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                data-name="Layer 1"
                viewBox="0 0 24 24"
                className="w-auto h-8"
              >
                <path
                  className={fillColor}
                  d="M6 6a2 2 0 0 1 2-2 1 1 0 0 0 0-2 4 4 0 0 0-4 4v3a2 2 0 0 1-2 2 1 1 0 0 0 0 2 2 2 0 0 1 2 2v3a4 4 0 0 0 4 4 1 1 0 0 0 0-2 2 2 0 0 1-2-2v-3a4 4 0 0 0-1.38-3A4 4 0 0 0 6 9Zm16 5a2 2 0 0 1-2-2V6a4 4 0 0 0-4-4 1 1 0 0 0 0 2 2 2 0 0 1 2 2v3a4 4 0 0 0 1.38 3A4 4 0 0 0 18 15v3a2 2 0 0 1-2 2 1 1 0 0 0 0 2 4 4 0 0 0 4-4v-3a2 2 0 0 1 2-2 1 1 0 0 0 0-2Z"
                ></path>
              </svg>
            </a>
          </div>
          <div className="flex items-center justify-center flex-1 sm:items-stretch sm:justify-start sm:pl-14">
            <h1 className="text-3xl font-bold text-gray-800 font-sacramento dark:text-white">
              {title}
            </h1>
          </div>
          {/* <!-- Icon when Dark Mode: "block", Light Mode: "hidden" --> */}
          <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
            {useDarkMode && (
              <>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="hidden w-6 h-6 mx-3 dark:block"
                  onClick={toggleTheme}
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M17.715 15.15A6.5 6.5 0 0 1 9 6.035C6.106 6.922 4 9.645 4 12.867c0 3.94 3.153 7.136 7.042 7.136 3.101 0 5.734-2.032 6.673-4.853Z"
                    className="fill-transparent"
                  ></path>
                  <path
                    d="m17.715 15.15.95.316a1 1 0 0 0-1.445-1.185l.495.869ZM9 6.035l.846.534a1 1 0 0 0-1.14-1.49L9 6.035Zm8.221 8.246a5.47 5.47 0 0 1-2.72.718v2a7.47 7.47 0 0 0 3.71-.98l-.99-1.738Zm-2.72.718A5.5 5.5 0 0 1 9 9.5H7a7.5 7.5 0 0 0 7.5 7.5v-2ZM9 9.5c0-1.079.31-2.082.845-2.93L8.153 5.5A7.47 7.47 0 0 0 7 9.5h2Zm-4 3.368C5 10.089 6.815 7.75 9.292 6.99L8.706 5.08C5.397 6.094 3 9.201 3 12.867h2Zm6.042 6.136C7.718 19.003 5 16.268 5 12.867H3c0 4.48 3.588 8.136 8.042 8.136v-2Zm5.725-4.17c-.81 2.433-3.074 4.17-5.725 4.17v2c3.552 0 6.553-2.327 7.622-5.537l-1.897-.632Z"
                    className="fill-gray-800 dark:fill-white"
                  ></path>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M17 3a1 1 0 0 1 1 1 2 2 0 0 0 2 2 1 1 0 1 1 0 2 2 2 0 0 0-2 2 1 1 0 1 1-2 0 2 2 0 0 0-2-2 1 1 0 1 1 0-2 2 2 0 0 0 2-2 1 1 0 0 1 1-1Z"
                    className="fill-gray-800 dark:fill-white"
                  ></path>
                </svg>
                {/* <!-- Icon when Dark Mode: "hidden", Light Mode: "block" --> */}
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="block w-6 h-6 mx-3 dark:hidden"
                  onClick={toggleTheme}
                >
                  <path
                    d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    className="stroke-gray-800 dark:stroke-white"
                  ></path>
                  <path
                    d="M12 4v1M17.66 6.344l-.828.828M20.005 12.004h-1M17.66 17.664l-.828-.828M12 20.01V19M6.34 17.664l.835-.836M3.995 12.004h1.01M6 6l.835.836"
                    className="stroke-gray-800 dark:stroke-white"
                  ></path>
                </svg>
              </>
            )}
            <button
              type="button"
              className="relative inline-flex items-center justify-center rounded-md"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span
                className="absolute -inset-0.5"
                onClick={mobileMenuHandler}
              ></span>
              <span className="sr-only">Menu</span>
              {/* <!-- Icon when menu is closed. Menu open: "hidden", Menu closed: "block" --> */}
              <svg
                className={`${isOpen ? "hidden" : "block"} h-6 w-6`}
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  className="stroke-gray-800 dark:stroke-white"
                />
              </svg>
              {/* <!-- Icon when menu is open. Menu open: "block", Menu closed: "hidden" --> */}
              <svg
                className={`${isOpen ? "block" : "hidden"} h-6 w-6`}
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                  className="stroke-gray-800 dark:stroke-white"
                />
              </svg>
            </button>
          </div>

          {/* Menu */}
          <nav className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {listMenu.map((menu, index) => (
                  <a
                    key={index}
                    className={`${
                      activeMenu === index
                        ? `${textColor} border-b-2 ${borderBottomColor} rounded-none`
                        : `text-gray-800 dark:text-white`
                    } rounded-none px-3 py-2 text-md font-bold ${hoverTextColor} ${hoverBorderBottomColor} ${darkHoverTextColor} ${darkHoverBorderBottomColor} border-b-2 border-b-transparent hover:border-b-2`}
                    aria-current="page"
                    onClick={() => changeMenuHandler(index)}
                  >
                    {menu.toUpperCase()}
                  </a>
                ))}
                {useDarkMode && (
                  <div className="pl-6 my-auto border-l border-gray-500">
                    {/* <!-- Icon when Dark Mode: "block", Light Mode: "hidden" --> */}
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      className="hidden w-6 h-6 dark:block"
                      onClick={toggleTheme}
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M17.715 15.15A6.5 6.5 0 0 1 9 6.035C6.106 6.922 4 9.645 4 12.867c0 3.94 3.153 7.136 7.042 7.136 3.101 0 5.734-2.032 6.673-4.853Z"
                        className="fill-transparent"
                      ></path>
                      <path
                        d="m17.715 15.15.95.316a1 1 0 0 0-1.445-1.185l.495.869ZM9 6.035l.846.534a1 1 0 0 0-1.14-1.49L9 6.035Zm8.221 8.246a5.47 5.47 0 0 1-2.72.718v2a7.47 7.47 0 0 0 3.71-.98l-.99-1.738Zm-2.72.718A5.5 5.5 0 0 1 9 9.5H7a7.5 7.5 0 0 0 7.5 7.5v-2ZM9 9.5c0-1.079.31-2.082.845-2.93L8.153 5.5A7.47 7.47 0 0 0 7 9.5h2Zm-4 3.368C5 10.089 6.815 7.75 9.292 6.99L8.706 5.08C5.397 6.094 3 9.201 3 12.867h2Zm6.042 6.136C7.718 19.003 5 16.268 5 12.867H3c0 4.48 3.588 8.136 8.042 8.136v-2Zm5.725-4.17c-.81 2.433-3.074 4.17-5.725 4.17v2c3.552 0 6.553-2.327 7.622-5.537l-1.897-.632Z"
                        className="fill-gray-800 dark:fill-white"
                      ></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M17 3a1 1 0 0 1 1 1 2 2 0 0 0 2 2 1 1 0 1 1 0 2 2 2 0 0 0-2 2 1 1 0 1 1-2 0 2 2 0 0 0-2-2 1 1 0 1 1 0-2 2 2 0 0 0 2-2 1 1 0 0 1 1-1Z"
                        className="fill-gray-800 dark:fill-white"
                      ></path>
                    </svg>
                    {/* <!-- Icon when Dark Mode: "hidden", Light Mode: "block" --> */}
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="block w-6 h-6 dark:hidden"
                      onClick={toggleTheme}
                    >
                      <path
                        d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                        className="stroke-gray-800 dark:stroke-white"
                      ></path>
                      <path
                        d="M12 4v1M17.66 6.344l-.828.828M20.005 12.004h-1M17.66 17.664l-.828-.828M12 20.01V19M6.34 17.664l.835-.836M3.995 12.004h1.01M6 6l.835.836"
                        className="stroke-gray-800 dark:stroke-white"
                      ></path>
                    </svg>
                  </div>
                )}
              </div>
            </div>
          </nav>
        </div>
      </div>

      {/* <!-- Mobile menu, show/hide based on menu state. --> */}
      <div
        className={`${isOpen ? "block" : "hidden"} sm:hidden`}
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          {listMenu.map((menu, index) => (
            <a
              key={index}
              className={`${
                activeMenu === index
                  ? `${textColor}`
                  : `text-gray-800 dark:text-white ${hoverTextColor}`
              } block rounded-md px-3 py-2 text-base font-bold text-center`}
              aria-current="page"
              onClick={() => changeMenuHandler(index)}
            >
              {menu.toUpperCase()}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}

export default Header;
