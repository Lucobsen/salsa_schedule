import styles from "./page.module.css";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import Loader from "./loading";
import Errorer from "./error";
import FestivalList from "./components/FestivalList/FestivalList";

const Page = ({
  searchParams,
}: {
  searchParams?: {
    style?: string[] | string;
    startDate?: string;
    endDate?: string;
  };
}) => (
  <main className={styles.main}>
    <Suspense fallback={<Loader />}>
      <ErrorBoundary fallback={<Errorer />}>
        <FestivalList
          style={searchParams?.style || ""}
          startDate={searchParams?.startDate}
          endDate={searchParams?.endDate}
        />
      </ErrorBoundary>
    </Suspense>
  </main>
);

export default Page;
