import { useState, useRef } from "react";
import axios, { AxiosError } from "axios";
import { Alert, AlertDescription, AlertTitle } from "../../components/generated/ui/alert";
import { IconAlertCircle, IconX } from "@tabler/icons-react";
import { AlertInterface } from "../../interfaces/Basic";
import { getFormattedDateTimeNow } from "../../utilities/FormattedDateTime";
import { API_URL } from "../../utilities/Helper";

function Contact() {
  const [alertNotification, setAlertNotification] =
    useState<AlertInterface | null>(null);
  const fullNameRef = useRef<HTMLInputElement | null>(null);
  const emailRef = useRef<HTMLInputElement | null>(null);
  const thoughtsRef = useRef<HTMLTextAreaElement | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const fullName = fullNameRef.current?.value
      .trim()
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
    const email = emailRef.current?.value
      .trim()
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
    const thoughts = thoughtsRef.current?.value
      .trim()
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");

    if (!fullName || !email || !thoughts) {
      setAlertNotification({
        status: "Error",
        message: "Please fill out all fields",
      });
      return;
    }

    const formData = {
      fullName: fullName,
      email: email,
      thoughts: thoughts,
      dateTime: getFormattedDateTimeNow(),
    };

    try {
      const url = API_URL + "/contact.json";
      await axios.post(url, formData);

      setAlertNotification({
        status: "Success",
        message: "Message successfully sent",
      });
    } catch (error) {
      const axiosError = error as AxiosError;

      if (axiosError.response) {
        setAlertNotification({
          status: "Error",
          message: `Request failed with status ${axiosError.response.status}`,
        });
      } else if (axiosError.request) {
        setAlertNotification({
          status: "Error",
          message: "Request was made but no response received",
        });
      } else {
        setAlertNotification({
          status: "Error",
          message: "An error occurred while processing the request",
        });
      }
    }

    fullNameRef.current!.value = "";
    emailRef.current!.value = "";
    thoughtsRef.current!.value = "";
  };

  return (
    <section id="contact">
      <div className="relative grid min-h-screen place-items-center max-sm:py-12 dark:bg-slate-900">
        <div className="container">
          <div className="mx-8 text-center lg:mx-32">
            <h1
              className="mb-8 text-5xl font-bold text-red-500"
              data-aos="fade-up"
            >
              Contact
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
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                className="w-full px-8 py-3 mb-3 bg-white shadow-xl text-slate-900 dark:text-white dark:bg-slate-800 rounded-2xl"
                placeholder="Full Name...."
                data-aos="fade-up"
                ref={fullNameRef}
              />
              <input
                type="email"
                className="w-full px-8 py-3 mb-3 bg-white shadow-xl text-slate-900 dark:text-white dark:bg-slate-800 rounded-2xl"
                placeholder="Email Address...."
                data-aos="fade-up"
                ref={emailRef}
              />
              <textarea
                maxLength={300}
                rows={5}
                className="w-full px-8 py-3 mb-3 bg-white shadow-xl resize-none text-slate-900 dark:text-white dark:bg-slate-800 rounded-2xl"
                placeholder="Share Your Thoughts...."
                data-aos="fade-up"
                ref={thoughtsRef}
              />
              <button
                type="submit"
                data-aos="fade-up"
                className="px-12 py-3 mt-8 text-base font-semibold text-white transition duration-300 ease-in-out bg-red-500 lg:mx-0 rounded-2xl hover:opacity-80 hover:bg-red-700"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
