import { URL_STORAGE } from "../../utilities/Helper";

function Home() {
  return (
    <section id="beranda">
      <div className="relative grid min-h-screen place-items-center max-sm:py-12">
        <div
          className="absolute flex items-center justify-center w-full h-full px-40 bg-center bg-cover max-sm:px-8 -z-10"
          style={{
            backgroundImage: `url('${URL_STORAGE}/o/images%2Fmenikah%2Ffloral-pattern.png?alt=media&token=a75eed9c-ab53-4509-9736-451f55bc6f51')`,
          }}
        ></div>
        <div className="container">
          <div className="text-center lg:px-52 max-sm:px-8">
            <h1
              className="mb-8 font-bold text-pink-500 text-7xl max-sm:text-5xl font-sacramento"
              data-aos="fade-up"
            >
              Kami Yang Berbahagia
            </h1>
            <h3
              className="pb-3 text-xl font-medium text-black max-sm:text-base"
              data-aos="fade-up"
            >
              Maha suci Allah yang telah menciptakan makhluk-Nya
              berpasang-pasangan
            </h3>
            <p
              className="text-base text-gray-500 max-sm:text-sm"
              data-aos="fade-up"
            >
              Kami bermaksud untuk mengundang Bapak/Ibu/Saudara/i, untuk hadir
              pada acara pernikahan kami. Karena hadirnya Bapak/Ibu/Saudara/i
              merupakan suatu kehormatan dan berarti bagi kami
            </p>
          </div>
          <div
            className="absolute z-10 w-12 p-3 transform -translate-x-1/2 translate-y-24 bg-white rounded-full max-sm:translate-y-14 left-1/2"
            style={{ boxShadow: "0 0 5px rgba(0, 0, 0, 0.35)" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="w-6 h-6 animate-pulse"
            >
              <path
                d="M-735.728 1099.062c-1.886-1.09-3.98-1.496-5.93-1.042-1.949.453-3.73 1.774-4.998 3.97-1.33 2.304-.946 5.382.035 8.752.981 3.371 2.607 7.077 3.948 10.724.082.21.32.346.542.312 3.827-.661 7.848-1.116 11.26-1.942 3.414-.825 6.28-2.002 7.625-4.33 1.282-2.22 1.498-4.42.912-6.33-.586-1.91-1.956-3.51-3.84-4.599-1.939-1.119-4.283-.842-6.212-.303-.497-1.93-1.407-4.095-3.342-5.212z"
                overflow="visible"
                transform="rotate(-30 -2403.87 -841.402)"
                className="fill-pink-500"
              ></path>
            </svg>
          </div>
          <div className="grid grid-cols-2 mx-8 mt-5 lg:px-24">
            <div className="flex flex-row flex-wrap-reverse justify-end">
              <div className="flex flex-col justify-center text-end max-sm:mr-3 max-sm:mt-3">
                <h3
                  className="mb-1 text-3xl font-bold text-pink-500 max-sm:text-xl font-sacramento"
                  data-aos="fade-up"
                >
                  Nailul Firdaus
                </h3>
                <p
                  className="mb-1 text-gray-500 max-sm:text-sm"
                  data-aos="fade-up"
                >
                  Putra pertama dari:
                </p>
                <p
                  className="text-black max-sm:text-base"
                  data-aos="fade-up"
                >
                  Bapak Daryono (Almarhum)
                  <br />
                  dan
                  <br />
                  Ibu Masadah
                </p>
              </div>
              <img
                src={`${URL_STORAGE}/o/images%2Fmenikah%2Fsuami-new.png?alt=media&token=53cdf471-ba5c-41f7-9916-a6bf92a3b287`}
                className="ml-8 mr-3 rounded-full w-52 h-52 max-sm:w-32 max-sm:h-32"
                alt="Nailul Firdaus"
                data-aos="fade-up"
              />
            </div>
            <div className="flex flex-row-reverse flex-wrap-reverse justify-end">
              <div className="flex flex-col justify-center text-start max-sm:ml-3 max-sm:mt-3">
                <h3
                  className="mb-1 text-3xl font-bold text-pink-500 max-sm:text-xl font-sacramento"
                  data-aos="fade-up"
                >
                  Berliana Rizka
                </h3>
                <p
                  className="mb-1 text-gray-500 max-sm:text-sm"
                  data-aos="fade-up"
                >
                  Putri pertama dari:
                </p>
                <p className="text-black max-sm:text-base" data-aos="fade-up">
                  Bapak Trisno Tarmanto
                  <br />
                  dan
                  <br />
                  Ibu Sri Suyati
                </p>
              </div>
              <img
                src={`${URL_STORAGE}/o/images%2Fmenikah%2Fistri-new.png?alt=media&token=f5e05061-eeab-48da-a623-00074d111df1`}
                className="ml-3 mr-8 rounded-full w-52 h-52 max-sm:w-32 max-sm:h-32"
                alt="Berliana Rizka"
                data-aos="fade-up"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
