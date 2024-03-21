import { useEffect, useRef, useState } from "react";
import axios, { AxiosError } from "axios";
import { Alert, AlertDescription, AlertTitle } from "../../components/generated/ui/alert";
import { IconAlertCircle, IconX } from "@tabler/icons-react";
import { AlertInterface } from "../../interfaces/Basic";
import { CommentInterface } from "../../interfaces/Basic";
import { getFormattedDateTimeNow } from "../../utilities/FormattedDateTime";
import { API_URL, URL_STORAGE } from "../../utilities/Helper";

function Wish() {
  const [alertNotification, setAlertNotification] =
    useState<AlertInterface | null>(null);
  const [comments, setComments] = useState<CommentInterface[]>([]);
  const fullNameRef = useRef<HTMLInputElement | null>(null);
  const commentRef = useRef<HTMLTextAreaElement | null>(null);
  const attendRef = useRef<HTMLInputElement | null>(null);
  const notAttendRef = useRef<HTMLInputElement | null>(null);

  async function getComments() {
    try {
      const url = API_URL + "/wedding/comments.json";
      const response = await axios.get(url);
      const commentsData = await response.data;

      const loadedComments = [];

      for (const key in commentsData) {
        loadedComments.push(commentsData[key]);
      }

      setComments(loadedComments);
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const fullName = fullNameRef.current?.value
      .trim()
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
    const comment = commentRef.current?.value
      .trim()
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
    const status = attendRef.current?.checked
      ? attendRef.current?.value
      : notAttendRef.current?.checked
      ? notAttendRef.current?.value
      : undefined;

    if (!fullName || !comment || !status) {
      setAlertNotification({
        status: "Error",
        message: "Harap isi data dengan benar",
      });
      return;
    }

    const formData = {
      fullName: fullName,
      status: status,
      comment: comment,
      dateTime: getFormattedDateTimeNow(),
    };

    try {
      const url = API_URL + "/wedding/comments.json";
      await axios.post(url, formData);
      setAlertNotification({
        status: "Success",
        message: "Berhasil kirim ucapan",
      });
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

    fullNameRef.current!.value = "";
    commentRef.current!.value = "";
    attendRef.current!.checked = false;
    notAttendRef.current!.checked = false;

    getComments();
  };

  useEffect(() => {
    getComments();
  }, []);

  return (
    <section id="ucapan">
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
              Ucapan & Doa
            </h1>
            <h3
              className="pb-3 text-xl font-medium text-black max-sm:text-base"
              data-aos="fade-up"
            >
              Terimakasih kepada Bapak/Ibu/Saudara/i atas segala ucapan dan doa
              yang telah diberikan kepada kami
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
          <div className="grid grid-cols-2 mx-8 mt-5 max-sm:grid-cols-1 lg:px-32">
            <div
              className="p-3 border border-pink-500 lg:mr-3 rounded-3xl"
              data-aos="fade-up"
            >
              <div
                id="comments-container"
                className="overflow-auto lg:max-h-80 max-sm:max-h-52"
              >
                {comments.length == 0 ? (
                  <div className="flex justify-center font-bold text-pink-500">
                    Belum ada ucapan
                  </div>
                ) : (
                  comments.map((data: CommentInterface, index) => (
                    <div
                      id="comment"
                      className={`p-3 bg-white border border-pink-500 rounded-3xl ${
                        index == 0 ? "mt-0" : "mt-3"
                      }`}
                      key={index}
                    >
                      <div className="flex flex-row">
                        <img
                          src="/images/user_default.jpg"
                          className="w-8 h-8 mt-1 rounded-full"
                        />
                        <div className="flex flex-col ml-3">
                          <p className="text-base font-bold max-sm:text-sm">
                            {data.fullName}
                          </p>
                          <div className="flex flex-row">
                            <p className="text-sm font-medium max-sm:text-[12px]">
                              {data.dateTime}
                            </p>
                            <p
                              className={`px-3 ml-2 text-sm font-bold text-center text-white ${
                                data.status === "Hadir"
                                  ? "bg-green-500"
                                  : "bg-red-500"
                              } rounded-lg max-sm:text-[10px]`}
                            >
                              {data.status}
                            </p>
                          </div>
                          <p className="mt-3 text-base font-medium max-sm:text-sm">
                            {data.comment}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
            <div className="lg:ml-3 max-sm:mt-3">
              <form className="w-full" onSubmit={handleSubmit}>
                <div
                  className="p-3 mb-3 bg-white border border-pink-500 rounded-2xl"
                  data-aos="fade-up"
                >
                  <input
                    className="w-full outline-none placeholder:max-sm:text-sm"
                    type="text"
                    placeholder="Masukkan Nama...."
                    ref={fullNameRef}
                  />
                </div>
                <div
                  className="p-3 mb-3 bg-white border border-pink-500 rounded-2xl"
                  data-aos="fade-up"
                >
                  <textarea
                    rows={3}
                    placeholder="Masukkan Ucapan...."
                    className="w-full outline-none resize-none lg:h-32 placeholder:max-sm:text-sm"
                    maxLength={250}
                    ref={commentRef}
                  ></textarea>
                </div>
                <div
                  className="flex flex-col justify-center text-base max-sm:text-sm"
                  data-aos="fade-up"
                >
                  <div className="flex items-center">
                    <input
                      className="mr-1 accent-pink-500"
                      id="Hadir"
                      type="radio"
                      name="radio-button"
                      value="Hadir"
                      ref={attendRef}
                    />
                    <label htmlFor="Hadir">Hadir</label>
                  </div>
                  <div className="flex items-center">
                    <input
                      className="mr-1 accent-pink-500"
                      type="radio"
                      name="radio-button"
                      value="Tidak Hadir"
                      id="Tidak Hadir"
                      ref={notAttendRef}
                    />
                    <label htmlFor="Tidak Hadir">Tidak Hadir</label>
                  </div>
                </div>
                <button
                  data-aos="fade-up"
                  className="flex items-center justify-center w-full px-5 py-3 mx-auto mt-3 text-lg font-bold text-center text-white transition duration-300 ease-in-out bg-pink-500 hover:text-white hover:bg-pink-700 max-sm:text-base rounded-xl"
                  type="submit"
                >
                  Kirim
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Wish;
