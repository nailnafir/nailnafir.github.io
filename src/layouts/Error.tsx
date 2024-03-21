import { Link, useRouteError } from "react-router-dom";

interface ErrorData {
  status: number;
  data: {
    message: string;
  };
}

function ErrorLayout() {
  const error = useRouteError();

  let status = 0;
  let title = "An error occurred!";
  let message = "Something went wrong!";

  if (
    error &&
    typeof error === "object" &&
    "status" in error &&
    "data" in error
  ) {
    const errorData = error as ErrorData;
    if (errorData.status === 500) {
      status = 500;
      title = "Server Error!";
      message = errorData.data.message;
    }

    if (errorData.status === 404) {
      status = 404;
      title = "Not Found!";
      message = "Could not find resource or page";
    }
  }

  return (
    <main className="grid min-h-full px-6 py-24 bg-white place-items-center sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="text-base font-semibold text-red-500">{status}</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          {title}
        </h1>
        <p className="mt-6 text-base leading-7 text-gray-600">{message}</p>
        <div className="flex items-center justify-center mt-10 gap-x-6">
          <Link
            to="/"
            className="rounded-md bg-red-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500"
          >
            Go back home
          </Link>
        </div>
      </div>
    </main>
  );
}

export default ErrorLayout;
