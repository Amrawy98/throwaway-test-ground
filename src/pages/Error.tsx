import { useRouteError } from "react-router-dom";

export default function Error() {
  const error = useRouteError() as ErrorEvent;
  console.error(error);

  return (
    <div>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.message}</i>
      </p>
    </div>
  );
}
