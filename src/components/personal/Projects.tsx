import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios, { AxiosError } from "axios";
import { Alert, AlertDescription, AlertTitle } from "../../components/generated/ui/alert";
import { IconAlertCircle, IconX } from "@tabler/icons-react";
import { AlertInterface } from "../../interfaces/Basic";
import { ProjectInterface } from "../../interfaces/Basic";
import { API_URL } from "../../utilities/Helper";

function Projects() {
  const [alertNotification, setAlertNotification] =
    useState<AlertInterface | null>(null);
  const [projects, setProjects] = useState<ProjectInterface[]>([]);

  async function getProjects() {
    try {
      const url = API_URL + "/projects.json";
      const response = await axios.get(url);
      const projectsData = await response.data;

      const loadedProjects = [];

      for (const key in projectsData) {
        loadedProjects.push(projectsData[key]);
      }

      setProjects(loadedProjects);
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
    getProjects();
  }, []);

  return (
    <section id="projects">
      <div className="flex flex-row justify-center max-sm:py-12 lg:py-24 dark:bg-slate-900">
        <div className="container">
          <div className="text-center">
            <h1
              className="mb-8 text-5xl font-bold text-red-500"
              data-aos="fade-up"
            >
              Projects
            </h1>
            <div className="flex flex-wrap justify-center">
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
              {projects.map((project: ProjectInterface, index) => (
                <div
                  key={index}
                  className={`flex flex-col justify-center max-sm:mx-8 lg:mx-3 w-96 py-8 bg-white shadow-xl dark:bg-slate-800 rounded-3xl mb-8`}
                >
                  <div className="flex flex-col">
                    <h3
                      className="px-3 mb-3 text-2xl font-bold dark:text-white text-slate-900"
                      data-aos="fade-up"
                    >
                      {project.title}
                    </h3>
                    <p
                      className="px-3 font-light dark:text-white text-slate-900"
                      data-aos="fade-up"
                    >
                      {project.description}
                    </p>
                  </div>
                  <img
                    src={project.imagePath}
                    alt={project.title}
                    className="h-full mx-8 my-8 rounded-2xl"
                    data-aos="fade-up"
                  />
                  <div className="flex flex-row justify-center">
                    {project.tools.map((tools, index) => (
                      <img
                        key={index}
                        src={tools.iconPath}
                        alt={tools.name}
                        className="h-12 mx-3 mb-3"
                        data-aos="fade-up"
                      />
                    ))}
                  </div>
                  <Link
                    to={project.url}
                    className="p-2 mx-auto font-bold text-center text-white transition duration-300 ease-in-out bg-red-500 rounded-lg hover:bg-red-700 w-28"
                    data-aos="fade-up"
                  >
                    Visit
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
