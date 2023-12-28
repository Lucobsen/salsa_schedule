import styles from "./page.module.css";
import FestivalItem from "@/app/components/FestivalItem/FestivalItem";
import { getFestivals } from "./lib/actions";
import { festivals } from "./lib/data";

const Home = async () => {
  await getFestivals();

  return (
    <main className={styles.main}>
      {festivals.map((fest) => (
        <FestivalItem key={fest.name} {...fest} />
      ))}
    </main>
  );
};

export default Home;
