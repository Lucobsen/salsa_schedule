import styles from "./page.module.css";
import FestivalItem from "@/app/components/FestivalItem/FestivalItem";
import { festivals } from "./lib/data";

const Home = () => (
  <main className={styles.main}>
    {festivals.map((fest) => (
      <FestivalItem key={fest.name} {...fest} />
    ))}
  </main>
);

export default Home;
