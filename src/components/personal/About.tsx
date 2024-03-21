import { Link } from "react-router-dom";
import { IconBrandLinkedin, IconBrandInstagram, IconBrandGithub } from "@tabler/icons-react";

function About() {
  return (
    <section id="about">
      <div className="relative grid min-h-screen place-items-center max-sm:py-12 dark:bg-slate-900">
        <div className="container">
          <div className="p-12 mx-8 text-center bg-white shadow-xl dark:bg-slate-800 rounded-3xl lg:mx-32">
            <h1
              className="mb-8 text-5xl font-bold text-red-500"
              data-aos="fade-up"
            >
              About Me
            </h1>
            <p className="dark:text-white text-slate-900" data-aos="fade-up">
              I am a creative and enthusiastic developer specializing in Mobile
              Application and Website development with a strong passion for
              technology, I constantly seek to expand my knowledge and skills in
              various domains. I am particularly interested in IT Security,
              Blockchain, and Artifical Intelligence.
            </p>
            <div
              className="flex flex-row items-center justify-center mt-12"
              data-aos="fade-up"
            >
              <Link
                to="https://linkedin.com/in/nailul-firdaus-0a2b72146/"
                className="dark:text-white text-slate-950"
                title="LinkedIn"
              >
                <IconBrandLinkedin
                  size={50}
                  className="p-2 text-white transition duration-300 ease-in-out bg-red-500 rounded-lg hover:bg-red-700"
                />
              </Link>
              <Link
                to="https://instagram.com/firdaus.nailul"
                className="mx-3 dark:text-white text-slate-950"
                title="Instagram"
              >
                <IconBrandInstagram
                  size={50}
                  className="p-2 text-white transition duration-300 ease-in-out bg-red-500 rounded-lg hover:bg-red-700"
                />
              </Link>
              <Link
                to="https://github.com/nailnafir"
                className="dark:text-white text-slate-950"
                title="Github"
              >
                <IconBrandGithub
                  size={50}
                  className="p-2 text-white transition duration-300 ease-in-out bg-red-500 rounded-lg hover:bg-red-700"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
