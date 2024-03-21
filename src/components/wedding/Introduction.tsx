import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { URL_STORAGE } from "../../utilities/Helper";

function Introduction() {
  const [isScrollEnabled, setScrollEnabled] = useState(false);
  const [currentTime, setCurrentTime] = useState(Date.now());

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const value = queryParams.get("to");

  const targetTime = new Date("2023-09-09 08:00:00").getTime();

  const timeBetween = targetTime - currentTime;
  const seconds = Math.abs(Math.floor((timeBetween / 1000) % 60));
  const minutes = Math.abs(Math.floor((timeBetween / 1000 / 60) % 60));
  const hours = Math.abs(Math.floor((timeBetween / (1000 * 60 * 60)) % 24));
  const days = Math.abs(Math.floor(timeBetween / (1000 * 60 * 60 * 24)));

  const handleMenuClick = (targetId: string) => {
    setScrollEnabled(true);

    const targetElement = document.getElementById(targetId);
    targetElement!.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (!isScrollEnabled) {
      document.body.classList.add("overflow-y-hidden");
    } else {
      document.body.classList.remove("overflow-y-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-y-hidden");
    };
  }, [isScrollEnabled]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(Date.now());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="pembukaan">
      <div
        className={`relative grid min-h-screen place-items-center bg-black/70 max-sm:py-12 ${
          isScrollEnabled ? "overflow-y-auto" : "overflow-y-hidden"
        }`}
      >
        <div
          className="absolute flex items-center justify-center w-full h-full px-40 bg-center bg-cover max-sm:px-8 -z-10"
          style={{
            backgroundImage: `url('${URL_STORAGE}/o/images%2Fmenikah%2Fnaybey-landscape.jpeg?alt=media&token=a0d1853d-9245-4477-9a87-9d1e51ed94e7')`,
          }}
        ></div>
        <div className="container">
          <div className="container flex flex-col items-center text-center">
            <div
              className="mb-8 font-bold text-white text-8xl max-sm:text-6xl font-sacramento max-sm:flex max-sm:flex-col"
              style={{ textShadow: "0 2px 2px rgba(0, 0, 0, 0.5)" }}
            >
              <span>Firdaus</span>
              <span>&nbsp;&&nbsp;</span>
              <span>Rizka</span>
            </div>
            <h3
              className="text-lg font-medium text-white max-sm:text-sm"
              style={{ textShadow: "0 2px 2px rgba(0, 0, 0, 0.5)" }}
            >
              Kepada Bapak/Ibu/Saudara/i,
            </h3>
            <h3 className="text-3xl font-bold text-white max-sm:text-lg">
              {value}
            </h3>
            <p
              className="text-lg font-medium text-white max-sm:text-sm"
              style={{ textShadow: "0 2px 2px rgba(0, 0, 0, 0.5)" }}
            >
              Kami akan melangsungkan acara akad dan resepsi pernikahan dalam:
            </p>
            {currentTime > targetTime && (
              <span className="pt-3 text-3xl font-bold text-white underline animate-pulse">
                Kami Sudah Menikah
              </span>
            )}
            <div className="flex flex-row my-5 text-2xl font-bold text-white max-sm:my-3 max-sm:text-sm">
              <div className="py-6 mx-3 bg-pink-500 rounded-full max-sm:mx-1 w-28 max-sm:w-16 max-sm:h-16 max-sm:py-2">
                <div>{days}</div>
                <div>Hari</div>
              </div>
              <div className="py-6 mx-3 bg-pink-500 rounded-full max-sm:mx-1 w-28 max-sm:w-16 max-sm:h-16 max-sm:py-2">
                <div>{hours}</div>
                <div>Jam</div>
              </div>
              <div className="py-6 mx-3 bg-pink-500 rounded-full max-sm:mx-1 w-28 max-sm:w-16 max-sm:h-16 max-sm:py-2">
                <div>{minutes}</div>
                <div>Menit</div>
              </div>
              <div className="py-6 mx-3 bg-pink-500 rounded-full max-sm:mx-1 w-28 max-sm:w-16 max-sm:h-16 max-sm:py-2">
                <div>{seconds}</div>
                <div>Detik</div>
              </div>
            </div>
            {currentTime > targetTime && (
              <span className="pb-3 text-lg font-bold text-white underline animate-pulse">
                Yang Lalu
              </span>
            )}
            <a
              className="px-5 py-3 mt-12 text-lg font-bold text-pink-500 transition duration-300 ease-in-out bg-white max-sm:text-base rounded-xl hover:text-white hover:bg-pink-500"
              onClick={() => handleMenuClick("beranda")}
            >
              Lihat Undangan
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Introduction;
