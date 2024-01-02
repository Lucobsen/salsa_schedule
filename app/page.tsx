import styles from "./page.module.css";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import Loader from "./loading";
import Errorer from "./error";
import FestivalList from "./components/FestivalList/FestivalList";

const Home = () => (
  <main className={styles.main}>
    <Suspense fallback={<Loader />}>
      <ErrorBoundary fallback={<Errorer />}>
        <FestivalList />
      </ErrorBoundary>
    </Suspense>
  </main>
);

export default Home;
