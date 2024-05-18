import errorImg from "@/assets/error.svg";
import { useRouteError } from "react-router-dom";

interface ErrorMsg {
  error?: string;
  status?: string | number;
  message?: string;
}
function ErrorBoundary() {
  const error = useRouteError() as ErrorMsg;
  const text = error?.message || error?.error || "Something went wrong";

  return (
    <section className=" flex flex-col items-center justify-center gap-2 h-screen">
      <div className="flex flex-col items-center">
        {Boolean(error.status) && (
          <h3 className="text-red-600 font-semibold text-lg">{error.status}</h3>
        )}
        <p className="text-slate-500 ">{text}</p>
      </div>
      <img
        src={errorImg}
        alt={text}
        className="w-11/12 min-w-52 max-w-[350px]"
      />
    </section>
  );
}

export default ErrorBoundary;
