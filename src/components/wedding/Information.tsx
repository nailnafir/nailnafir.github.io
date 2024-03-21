function Information() {
  return (
    <section id="informasi">
      <div className="relative grid min-h-screen px-40 place-items-center max-sm:py-12 max-sm:px-8">
        <div className="absolute flex items-center justify-center w-full h-full bg-black bg-center bg-cover -z-10"></div>
        <div className="container">
          <div className="flex flex-col items-center text-center">
            <div className="lg:px-52">
              <h1
                className="mb-8 font-bold text-pink-500 text-7xl max-sm:text-5xl font-sacramento"
                data-aos="fade-up"
              >
                Informasi Acara
              </h1>
              <p
                className="text-xl text-white max-sm:text-base"
                data-aos="fade-up"
              >
                Gedung Serbaguna Mahadaya
                <br />
                Jalan Masjid VI A No.6, RT.001/RW.007, Sudimara Timur, Kecamatan
                Ciledug, Kota Tangerang, Banten 15151
              </p>
            </div>
            <a
              href="https://goo.gl/maps/fRUfKn6cn4D7kQnB7"
              target="_blank"
              className="px-5 py-3 mt-12 text-lg font-bold text-pink-500 transition duration-300 ease-in-out bg-white max-sm:my-8 max-sm:text-base rounded-xl hover:text-white hover:bg-pink-500"
              data-aos="fade-up"
            >
              Kunjungi Lokasi
            </a>
            <div className="grid w-full grid-cols-2 lg:mt-12 max-sm:grid-cols-1">
              <div
                className="flex flex-col mr-3 bg-white max-sm:mr-0 rounded-3xl"
                data-aos="fade-up"
              >
                <div className="py-2 text-xl font-bold border-b border-b-pink-500 max-sm:text-base">
                  AKAD
                </div>
                <div className="grid w-full grid-cols-2 px-3 py-2 text-xl font-bold max-sm:grid-cols-1">
                  <div className="flex flex-col">
                    <div className="w-6 h-6 mx-auto">
                      <img src="/images/icon_time.svg" />
                    </div>
                    <p className="text-base font-bold text-center max-sm:text-sm max-sm:mb-3">
                      08:00 - 10:00
                    </p>
                  </div>
                  <div className="flex flex-col">
                    <div className="w-6 h-6 mx-auto">
                      <img src="/images/icon_schedule.svg" />
                    </div>
                    <p className="text-base font-bold text-center max-sm:text-sm">
                      Sabtu, 09 September 2023
                    </p>
                  </div>
                </div>
                <div className="px-3 py-2 text-sm font-light border-t border-t-pink-500 max-sm:text-[12px]">
                  Harap tenang saat acara akad
                </div>
              </div>
              <div
                className="flex flex-col ml-3 bg-white max-sm:ml-0 max-sm:mt-5 rounded-3xl"
                data-aos="fade-up"
              >
                <div className="py-2 text-xl font-bold border-b border-b-pink-500 max-sm:text-base">
                  RESEPSI
                </div>
                <div className="grid w-full grid-cols-2 px-3 py-2 text-xl font-bold max-sm:grid-cols-1">
                  <div className="flex flex-col">
                    <div className="w-6 h-6 mx-auto">
                      <img src="/images/icon_time.svg" />
                    </div>
                    <p className="text-base font-bold text-center max-sm:text-sm max-sm:mb-3">
                      10:00 - 17:00
                    </p>
                  </div>
                  <div className="flex flex-col">
                    <div className="w-6 h-6 mx-auto">
                      <img src="/images/icon_schedule.svg" />
                    </div>
                    <p className="text-base font-bold text-center max-sm:text-sm">
                      Sabtu, 09 September 2023
                    </p>
                  </div>
                </div>
                <div className="px-3 py-2 text-sm font-light border-t border-t-pink-500 max-sm:text-[12px]">
                  Nikmati acara perayaan pernikahan
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Information;
