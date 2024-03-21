import { useRef, useState } from "react";
import { Alert, AlertDescription, AlertTitle } from "../../components/generated/ui/alert";
import { IconAlertCircle, IconX } from "@tabler/icons-react";
import clipboardCopy from "clipboard-copy";
import { AlertInterface } from "../../interfaces/Basic";
import { URL_STORAGE } from "../../utilities/Helper";

function Gift() {
  const addressRef = useRef<HTMLParagraphElement>(null);
  const nayAccountRef = useRef<HTMLParagraphElement>(null);
  const beyAccountRef = useRef<HTMLParagraphElement>(null);

  const addressButtonRef = useRef<HTMLAnchorElement>(null);
  const nayButtonRef = useRef<HTMLAnchorElement>(null);
  const beyButtonRef = useRef<HTMLAnchorElement>(null);

  const [alertNotification, setAlertNotification] =
    useState<AlertInterface | null>(null);

  function copyText(
    ref: React.RefObject<HTMLParagraphElement>,
    buttonRef: React.RefObject<HTMLAnchorElement>
  ) {
    const text = ref.current;
    const button = buttonRef.current;

    if (text && button) {
      const buttonTextOriginal = button.textContent;

      clipboardCopy(text.innerText)
        .then(() => {
          button.textContent = "Berhasil Salin";
          setTimeout(() => {
            button.textContent = buttonTextOriginal;
          }, 1500);
        })
        .catch((error) => {
          setAlertNotification({
            status: "Error",
            message: "Tidak dapat menyalin teks: " + error.message,
          });
        });
    } else {
      setAlertNotification({
        status: "Error",
        message: "Tidak dapat menemukan elemen teks atau tombol",
      });
    }
  }

  return (
    <section id="kado">
      <div className="relative grid min-h-screen px-40 place-items-center max-sm:py-12 max-sm:px-8">
        <div className="absolute flex items-center justify-center w-full h-full bg-black bg-center bg-cover -z-10"></div>
        <div className="container">
          <div className="flex flex-col items-center text-center">
            <div className="lg:px-52">
              <h1
                className="mb-8 font-bold text-pink-500 text-7xl max-sm:text-5xl font-sacramento"
                data-aos="fade-up"
              >
                Kado Pernikahan
              </h1>
              {alertNotification != null && (
                <div
                  className={`flex text-start mb-12 ${
                    alertNotification.status === "Error"
                      ? "animate-shake"
                      : "animate-pulse"
                  }`}
                >
                  <Alert
                    variant={`${
                      alertNotification.status === "Error"
                        ? "danger"
                        : "success"
                    }`}
                  >
                    <div className="flex flex-row justify-between">
                      <div className="flex flex-row mb-3">
                        <IconAlertCircle className="w-4 h-4" strokeWidth={3} />
                        <AlertTitle className="ml-2 font-bold">
                          {alertNotification.status}
                        </AlertTitle>
                      </div>
                      <IconX
                        className="w-4 h-4"
                        strokeWidth={3}
                        onClick={() => setAlertNotification(null)}
                      />
                    </div>
                    <AlertDescription>
                      {alertNotification.message}
                    </AlertDescription>
                  </Alert>
                </div>
              )}
              <p
                className="text-xl text-white max-sm:text-base"
                data-aos="fade-up"
              >
                Jika Bapak/Ibu/Saudara/i berhalangan untuk hadir dalam acara
                pernikahan kami, silakan lihat informasi dibawah untuk mengirim
                kado
              </p>
              <div
                className="flex flex-col mt-5 bg-white rounded-3xl max-sm:mb-3"
                data-aos="fade-up"
              >
                <div className="py-2 text-xl font-bold border-b border-b-pink-500 max-sm:text-base">
                  ALAMAT
                </div>
                <p
                  className="py-3 text-base text-center max-sm:text-sm"
                  ref={addressRef}
                >
                  Jalan Sektor XIII RT.01 RW.10 No.47, Ciledug, Kota Tangerang,
                  Banten 15151
                </p>
                <div className="p-3 text-sm font-light border-t border-t-pink-500">
                  <a
                    className="px-5 py-1 text-sm font-bold text-white transition duration-300 ease-in-out bg-pink-500 rounded-xl hover:bg-pink-700"
                    ref={addressButtonRef}
                    onClick={() => copyText(addressRef, addressButtonRef)}
                  >
                    Salin Alamat
                  </a>
                </div>
              </div>
            </div>
            <div className="grid w-full grid-cols-2 lg:mt-5 max-sm:grid-cols-1">
              <div
                className="flex flex-col mr-3 bg-white max-sm:mr-0 rounded-3xl max-sm:mb-3"
                data-aos="fade-up"
              >
                <div className="py-2 text-xl font-bold border-b border-b-pink-500 max-sm:text-base">
                  <div className="w-48 mx-auto">
                    <img
                      src={`${URL_STORAGE}/o/images%2Fmenikah%2Fbca-digital.png?alt=media&token=018831fc-c92c-468b-9740-d4a6416d47cb`}
                    />
                  </div>
                </div>
                <div className="flex flex-col px-3 py-2">
                  <p
                    className="text-base text-center max-sm:text-sm"
                    ref={nayAccountRef}
                  >
                    001181181100
                  </p>
                  <p className="text-base text-center max-sm:text-sm">
                    Nailul Firdaus
                  </p>
                </div>
                <div className="p-3 text-sm font-light border-t border-t-pink-500">
                  <a
                    className="px-5 py-1 text-sm font-bold text-white transition duration-300 ease-in-out bg-pink-500 rounded-xl hover:bg-pink-700"
                    onClick={() => copyText(nayAccountRef, nayButtonRef)}
                    ref={nayButtonRef}
                  >
                    Salin Nomor Rekening
                  </a>
                </div>
              </div>
              <div
                className="flex flex-col ml-3 bg-white max-sm:ml-0 rounded-3xl"
                data-aos="fade-up"
              >
                <div className="py-2 text-xl font-bold border-b border-b-pink-500 max-sm:text-base">
                  <div className="w-24 mx-auto">
                    <img
                      src={`${URL_STORAGE}/o/images%2Fmenikah%2Fbni.png?alt=media&token=f8f73f18-6c03-447b-81eb-b0c07c0aa533`}
                    />
                  </div>
                </div>
                <div className="flex flex-col px-3 py-2">
                  <p
                    className="text-base text-center max-sm:text-sm"
                    ref={beyAccountRef}
                  >
                    1354023608
                  </p>
                  <p className="text-base text-center max-sm:text-sm">
                    Berliana Rizka
                  </p>
                </div>
                <div className="p-3 text-sm font-light border-t border-t-pink-500">
                  <a
                    className="px-5 py-1 text-sm font-bold text-white transition duration-300 ease-in-out bg-pink-500 rounded-xl hover:bg-pink-700"
                    onClick={() => copyText(beyAccountRef, beyButtonRef)}
                    ref={beyButtonRef}
                  >
                    Salin Nomor Rekening
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Gift;
