import styles from "./page.module.css";
import FestivalItem from "@/components/Festival/Festival";
import { festivals } from "@/data/_data";

const Home = () => {
  return (
    <main className={styles.main}>
      {festivals.map((fest) => (
        <FestivalItem key={fest.name} {...fest} />
      ))}
    </main>
  );
};

export default Home;
