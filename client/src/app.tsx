import { useState, lazy, Suspense } from "react";
import Loader from "./components/loader";
const MainPage = lazy(() => import("./components/inputs"));
const ListUser = lazy(() => import("./components/list"));

export const App = () => {
  const [changeElement, setChangeElement] = useState(true);

  return (
    <Suspense fallback={<Loader />}>
      {changeElement ? (
        <MainPage changeElement={setChangeElement} />
      ) : (
        <ListUser changeElement={setChangeElement} />
      )}
    </Suspense>
  );
};
