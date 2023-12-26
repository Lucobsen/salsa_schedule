import Calendar from "@/components/Calendar/Calendar";
import styles from "./page.module.css";

const Home = () => {
  return (
    <main className={styles.main}>
      <Calendar />
    </main>
  );
};

export default Home;
