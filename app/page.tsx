import { months } from "./_data";
import styles from "./page.module.css";
import { Grid, Card, Button } from "@mui/material";

const Home = () => {
  return (
    <main className={styles.main}>
      <Grid container rowGap={2} columnGap={2} justifyContent="center">
        {months.map((month) => (
          <Grid item xs={3}>
            <Button fullWidth variant="contained" sx={{ height: 50 }}>
              {month}
            </Button>
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Home;
