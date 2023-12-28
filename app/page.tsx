import styles from "./page.module.css";
import FestivalItem from "@/components/Festival/Festival";
import { festivals } from "@/data/_data";
import { getFestivals } from "./actions";

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
