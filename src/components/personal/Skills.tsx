import { useEffect, useState } from "react";
import axios, { AxiosError } from "axios";
import { Alert, AlertDescription, AlertTitle } from "../../components/generated/ui/alert";
import { IconAlertCircle, IconX } from "@tabler/icons-react";
import { AlertInterface } from "../../interfaces/Basic";
import { SkillInterface } from "../../interfaces/Basic";
import { API_URL } from "../../utilities/Helper";

function Skills() {
  const [alertNotification, setAlertNotification] = useState<AlertInterface | null>(null);
  const [skills, setSkills] = useState<SkillInterface[]>([]);

  async function getSkills() {
    try {
      const url = API_URL + "/skills.json";
      const response = await axios.get(url);
      const skillsData = await response.data;

      const loadedSkills = [];

      for (const key in skillsData) {
        loadedSkills.push(skillsData[key]);
      }

      setSkills(loadedSkills);
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
  }

  useEffect(() => {
    getSkills();
  }, []);

  return (
    <section id="skills">
      <div className="relative grid min-h-screen place-items-center max-sm:py-12 dark:bg-slate-900">
        <div className="container">
          <div className="p-8 mx-8 text-center bg-white shadow-xl lg:mx-32 dark:bg-slate-800 rounded-3xl">
            <h1
              className="mb-8 text-5xl font-bold text-red-500"
              data-aos="fade-up"
            >
              Skills
            </h1>
            <p
              className="py-2 dark:text-white text-slate-900"
              data-aos="fade-up"
            >
              As an experienced Mobile Application and Website Developer more
              than 3 years of programming experience, I have honed a diverse set
              of skills that enable me to deliver exceptional results.
            </p>
            <p
              className="py-2 dark:text-white text-slate-900"
              data-aos="fade-up"
            >
              That I'm now pretty confident in building apps using these tools
            </p>
            {alertNotification != null && (
              <div
                className={`flex text-start mt-12 ${
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
            <div
              className="flex flex-wrap mt-8 lg:justify-center max-sm:justify-between"
              data-aos="fade-up"
            >
              {skills.map((item, index) => (
                <img
                  key={index}
                  src={item.iconPath}
                  className="h-12 my-3 max-sm:mx-2 lg:mx-3"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
