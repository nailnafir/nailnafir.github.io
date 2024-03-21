import { Link } from "react-router-dom";
import { IconBrandLinkedin, IconBrandInstagram, IconBrandGithub } from "@tabler/icons-react";
import { FooterInterface } from "../interfaces/Basic";

function Footer({ colorTheme }: FooterInterface) {
  let colorThemeProperties: {
    backgroundColor?: string;
    hoverBackgroundColor?: string;
  } = {};

  switch (colorTheme) {
    case "red":
      colorThemeProperties = {
        backgroundColor: "bg-red-500",
        hoverBackgroundColor: "hover:bg-red-700",
      };
      break;

    case "pink":
      colorThemeProperties = {
        backgroundColor: "bg-pink-500",
        hoverBackgroundColor: "hover:bg-pink-700",
      };
      break;

    default:
      break;
  }

  const { backgroundColor, hoverBackgroundColor } = colorThemeProperties;

  return (
    <section id="footer">
      <div className={`flex flex-col justify-center ${backgroundColor} h-1/2`}>
        <div className="py-12 mx-8 text-center text-white lg:mx-40">
          <div className="flex flex-row items-center justify-center">
            <Link
              to="https://linkedin.com/in/nailul-firdaus-0a2b72146/"
              className="dark:text-white text-slate-950"
              title="LinkedIn"
            >
              <IconBrandLinkedin
                size={50}
                className={`p-2 text-white transition duration-300 ease-in-out ${backgroundColor} rounded-lg ${hoverBackgroundColor}`}
              />
            </Link>
            <Link
              to="https://instagram.com/firdaus.nailul"
              className="mx-3 dark:text-white text-slate-950"
              title="Instagram"
            >
              <IconBrandInstagram
                size={50}
                className={`p-2 text-white transition duration-300 ease-in-out ${backgroundColor} rounded-lg ${hoverBackgroundColor}`}
              />
            </Link>
            <Link
              to="https://github.com/nailnafir"
              className="dark:text-white text-slate-950"
              title="Github"
            >
              <IconBrandGithub
                size={50}
                className={`p-2 text-white transition duration-300 ease-in-out ${backgroundColor} rounded-lg ${hoverBackgroundColor}`}
              />
            </Link>
          </div>
          <hr className="my-5" style={{ border: "1px solid white" }} />
          <p className="flex justify-center font-bold">Created With</p>
          <div className="flex justify-center my-2">
            <svg
              width="24px"
              height="24px"
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
              className="ml-1"
            >
              <path
                d="M18.6789 15.9759C18.6789 14.5415 17.4796 13.3785 16 13.3785C14.5206 13.3785 13.3211 14.5415 13.3211 15.9759C13.3211 17.4105 14.5206 18.5734 16 18.5734C17.4796 18.5734 18.6789 17.4105 18.6789 15.9759Z"
                fill="#FFFFFF"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M24.7004 11.1537C25.2661 8.92478 25.9772 4.79148 23.4704 3.39016C20.9753 1.99495 17.7284 4.66843 16.0139 6.27318C14.3044 4.68442 10.9663 2.02237 8.46163 3.42814C5.96751 4.82803 6.73664 8.8928 7.3149 11.1357C4.98831 11.7764 1 13.1564 1 15.9759C1 18.7874 4.98416 20.2888 7.29698 20.9289C6.71658 23.1842 5.98596 27.1909 8.48327 28.5877C10.9973 29.9932 14.325 27.3945 16.0554 25.7722C17.7809 27.3864 20.9966 30.0021 23.4922 28.6014C25.9956 27.1963 25.3436 23.1184 24.7653 20.8625C27.0073 20.221 31 18.7523 31 15.9759C31 13.1835 26.9903 11.7923 24.7004 11.1537ZM24.4162 19.667C24.0365 18.5016 23.524 17.2623 22.8971 15.9821C23.4955 14.7321 23.9881 13.5088 24.3572 12.3509C26.0359 12.8228 29.7185 13.9013 29.7185 15.9759C29.7185 18.07 26.1846 19.1587 24.4162 19.667ZM22.85 27.526C20.988 28.571 18.2221 26.0696 16.9478 24.8809C17.7932 23.9844 18.638 22.9422 19.4625 21.7849C20.9129 21.6602 22.283 21.4562 23.5256 21.1777C23.9326 22.7734 24.7202 26.4763 22.85 27.526ZM9.12362 27.5111C7.26143 26.47 8.11258 22.8946 8.53957 21.2333C9.76834 21.4969 11.1286 21.6865 12.5824 21.8008C13.4123 22.9332 14.2816 23.9741 15.1576 24.8857C14.0753 25.9008 10.9945 28.557 9.12362 27.5111ZM2.28149 15.9759C2.28149 13.874 5.94207 12.8033 7.65904 12.3326C8.03451 13.5165 8.52695 14.7544 9.12123 16.0062C8.51925 17.2766 8.01977 18.5341 7.64085 19.732C6.00369 19.2776 2.28149 18.0791 2.28149 15.9759ZM9.1037 4.50354C10.9735 3.45416 13.8747 6.00983 15.1159 7.16013C14.2444 8.06754 13.3831 9.1006 12.5603 10.2265C11.1494 10.3533 9.79875 10.5569 8.55709 10.8297C8.09125 9.02071 7.23592 5.55179 9.1037 4.50354ZM20.3793 11.5771C21.3365 11.6942 22.2536 11.85 23.1147 12.0406C22.8562 12.844 22.534 13.6841 22.1545 14.5453C21.6044 13.5333 21.0139 12.5416 20.3793 11.5771ZM16.0143 8.0481C16.6054 8.66897 17.1974 9.3623 17.7798 10.1145C16.5985 10.0603 15.4153 10.0601 14.234 10.1137C14.8169 9.36848 15.414 8.67618 16.0143 8.0481ZM9.8565 14.5444C9.48329 13.6862 9.16398 12.8424 8.90322 12.0275C9.75918 11.8418 10.672 11.69 11.623 11.5748C10.9866 12.5372 10.3971 13.5285 9.8565 14.5444ZM11.6503 20.4657C10.6679 20.3594 9.74126 20.2153 8.88556 20.0347C9.15044 19.2055 9.47678 18.3435 9.85796 17.4668C10.406 18.4933 11.0045 19.4942 11.6503 20.4657ZM16.0498 23.9915C15.4424 23.356 14.8365 22.6531 14.2448 21.8971C15.4328 21.9423 16.6231 21.9424 17.811 21.891C17.2268 22.6608 16.6369 23.3647 16.0498 23.9915ZM22.1667 17.4222C22.5677 18.3084 22.9057 19.1657 23.1742 19.9809C22.3043 20.1734 21.3652 20.3284 20.3757 20.4435C21.015 19.4607 21.6149 18.4536 22.1667 17.4222ZM18.7473 20.5941C16.9301 20.72 15.1016 20.7186 13.2838 20.6044C12.2509 19.1415 11.3314 17.603 10.5377 16.0058C11.3276 14.4119 12.2404 12.8764 13.2684 11.4158C15.0875 11.2825 16.9178 11.2821 18.7369 11.4166C19.7561 12.8771 20.6675 14.4086 21.4757 15.9881C20.6771 17.5812 19.7595 19.1198 18.7473 20.5941ZM22.8303 4.4666C24.7006 5.51254 23.8681 9.22726 23.4595 10.8426C22.2149 10.5641 20.8633 10.3569 19.4483 10.2281C18.6239 9.09004 17.7698 8.05518 16.9124 7.15949C18.1695 5.98441 20.9781 3.43089 22.8303 4.4666Z"
                fill="#FFFFFF"
              />
            </svg>
            <svg
              width="24px"
              height="24px"
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
              className="ml-1"
            >
              <path
                d="M9,13.7q1.4-5.6,7-5.6c5.6,0,6.3,4.2,9.1,4.9q2.8.7,4.9-2.1-1.4,5.6-7,5.6c-5.6,0-6.3-4.2-9.1-4.9Q11.1,10.9,9,13.7ZM2,22.1q1.4-5.6,7-5.6c5.6,0,6.3,4.2,9.1,4.9q2.8.7,4.9-2.1-1.4,5.6-7,5.6c-5.6,0-6.3-4.2-9.1-4.9Q4.1,19.3,2,22.1Z"
                fill="white"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              width="24px"
              height="24px"
              className="ml-1"
            >
              <path
                d="M383.1 257.4c.6-5.4.9-10 .9-13.8 0-19.6-3.3-19.7-16-19.7h-75.5c7.3-12 11.5-24.4 11.5-37 0-37.9-57.3-56.4-57.3-88 0-11.7 5.1-21.3 9.3-34.9-26.5 7-47.4 33.5-47.4 61.6 0 48.3 56.3 48.7 56.3 84.8 0 4.5-1.4 8.5-2.1 13.5h-55.9c.8-3 1.3-6.2 1.3-9.3 0-22.8-39.1-33.9-39.1-52.8 0-7 1-12.8 3.2-21-12.9 5.1-28.3 20-28.3 36.8 0 26.7 31.9 29.3 36.8 46.3H80c-12.7 0-16 .1-16 19.7 0 19.6 7.7 61.3 28.3 111s44.4 71.6 61.2 86.2l.1-.2c5.1 4.6 11.8 7.3 19.2 7.3h102.4c7.4 0 14.1-2.7 19.2-7.3l.1.2c9-7.8 20-17.8 31.4-32.9 4.7 2 9.8 3.7 15.4 5 8.4 2 16.8 3 24.8 3 24 0 45.6-9.2 60.8-25.8 13.4-14.6 21.1-34.4 21.1-54.2 0-38.9-28-71.4-64.9-78.5zm-17 126.8c-8.6 0-15.6-1.2-22.1-4.2 4-8 7.9-15.9 11.7-25.1 10.1-24.4 17.1-47 21.6-65.8 22 4.3 38.7 23.8 38.7 47.1 0 22.7-17.2 48-49.9 48z"
                fill="#ffffff"
              ></path>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              width="24px"
              height="24px"
              className="ml-1"
            >
              <path
                d="M-735.728 1099.062c-1.886-1.09-3.98-1.496-5.93-1.042-1.949.453-3.73 1.774-4.998 3.97-1.33 2.304-.946 5.382.035 8.752.981 3.371 2.607 7.077 3.948 10.724.082.21.32.346.542.312 3.827-.661 7.848-1.116 11.26-1.942 3.414-.825 6.28-2.002 7.625-4.33 1.282-2.22 1.498-4.42.912-6.33-.586-1.91-1.956-3.51-3.84-4.599-1.939-1.119-4.283-.842-6.212-.303-.497-1.93-1.407-4.095-3.342-5.212z"
                overflow="visible"
                transform="rotate(-30 -2403.87 -841.402)"
                fill="#ffffff"
              ></path>
            </svg>
          </div>
          <p className="flex justify-center font-bold">
            Copyright {`2020 - ${new Date().getFullYear()}. Nailul Firdaus`}
          </p>
        </div>
      </div>
    </section>
  );
}

export default Footer;