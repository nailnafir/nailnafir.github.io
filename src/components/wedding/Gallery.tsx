import { useEffect, useState } from "react";
import axios, { AxiosError } from "axios";
import { Alert, AlertDescription, AlertTitle } from "../../components/generated/ui/alert";
import { IconAlertCircle, IconX } from "@tabler/icons-react";
import { AlertInterface } from "../../interfaces/Basic";
import { PhotosInterface } from "../../interfaces/Basic";
import { API_URL, URL_STORAGE } from "../../utilities/Helper";

function Gallery() {
  const [alertNotification, setAlertNotification] =
    useState<AlertInterface | null>(null);
  const [photos, setPhotos] = useState<PhotosInterface[]>([]);

  async function getPhotos() {
    try {
      const url = API_URL + "/wedding/gallery.json";
      const response = await axios.get(url);
      const photosData = await response.data;

      const loadedPhotos = [];

      for (const key in photosData) {
        loadedPhotos.push(photosData[key]);
      }

      setPhotos(loadedPhotos);
    } catch (error) {
      const axiosError = error as AxiosError;

      if (axiosError.response) {
        setAlertNotification({
          status: "Error",
          message: `Permintaan pengiriman data gagal dengan status ${axiosError.response.status}`,
        });
      } else if (axiosError.request) {
        setAlertNotification({
          status: "Error",
          message: "Permintaan berhasil dibuat, tapi tidak ada respon server",
        });
      } else {
        setAlertNotification({
          status: "Error",
          message: "Terjadi kesalahan saat permintaan pengiriman data",
        });
      }
    }
  }

  useEffect(() => {
    getPhotos();
  }, []);

  return (
    <section id="galeri">
      <div className="flex flex-row justify-center lg:relative max-sm:py-12 lg:py-24">
        <div
          className="absolute lg:inset-0 flex flex-col justify-center w-full h-full px-40 bg-center bg-cover max-sm:translate-y-[210rem] max-sm:px-8 -z-10"
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
              Galeri Foto
            </h1>
            <h3
              className="pb-3 text-xl font-medium text-black max-sm:text-base"
              data-aos="fade-up"
            >
              Cerminan kebahagiaan dan kemesraan dalam persiapan menuju
              pernikahan kami
            </h3>
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
                    alertNotification.status === "Error" ? "danger" : "success"
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
          </div>
          <div className="flex flex-wrap justify-center mt-5 max-sm:px-5">
            {photos.map((photo: PhotosInterface, index) => (
              <div
                data-aos="fade-up"
                key={index}
                className={`flex flex-col justify-center lg:w-72 p-8 bg-white border border-pink-500 rounded-3xl mb-8 mx-3`}
              >
                <img
                  src={photo.photoPath}
                  alt={photo.photoTitle}
                  className="h-full rounded-2xl"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Gallery;
