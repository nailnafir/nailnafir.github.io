import { URL_STORAGE } from "../../utilities/Helper";

function Me() {
  return (
    <section id="home">
      <div className="relative grid min-h-screen -mt-16 place-items-center max-sm:py-12 dark:bg-slate-900">
        <div className="container">
          <div className="flex flex-col-reverse justify-between mx-8 lg:flex-row lg:mx-32">
            {/* Bio Section */}
            <div className="flex flex-col justify-center mt-8 text-center lg:mt-0 lg:text-justify">
              <div>
                <small className="text-lg font-bold text-red-500">I am</small>
                <h1 className="my-3 text-4xl font-bold max-sm:my-0 lg:text-6xl text-slate-950 dark:text-white">
                  Nailul Firdaus
                </h1>
                <small className="text-lg font-light text-red-500">
                  Software Engineer
                </small>
              </div>
              <a
                className="w-40 px-8 py-3 mx-auto mt-12 text-base font-semibold text-center text-white transition duration-300 ease-in-out bg-red-500 lg:mx-0 rounded-2xl hover:opacity-80 hover:bg-red-700"
                href="https://t.me/nailnafir"
              >
                Let's Chat!
              </a>
            </div>

            {/* Photo Section */}
            <img
              className="transition-transform duration-300 ease-in-out bg-white shadow-xl dark:bg-slate-800 max-sm:mx-auto h-80 w-60 lg:w-72 rounded-3xl lg:h-96 hover:scale-110"
              src={`${URL_STORAGE}/o/images%2Fme.png?alt=media&token=73c44a5d-424c-4318-99ad-5a5ad6055811`}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Me;
