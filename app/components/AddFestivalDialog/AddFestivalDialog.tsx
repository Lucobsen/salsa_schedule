import { Festival, setFestivals, getFestivals } from "@/app/lib/actions";
import {
  Box,
  Button,
  Container,
  Dialog,
  DialogTitle,
  Grid,
  InputLabel,
  OutlinedInput,
} from "@mui/material";

const FESTIVAL_NAME_KEY = "festival-name";
const FESTIVAL_URL_KEY = "festival-url";
const FESTIVAL_LOCATION_KEY = "festival-location";
const FESTIVAL_STYLES_KEY = "festival-styles";
const FESTIVAL_START_DATE_KEY = "festival-start-date";
const FESTIVAL_END_DATE_KEY = "festival-end-date";
const MASTER_PASSWORD_KEY = "master-password-key";

interface DialogProps {
  showDialog: boolean;
  setShowDialog: (value: boolean) => void;
}

const validateForm = (formData: FormData): Festival | null => {
  const name = formData.get(FESTIVAL_NAME_KEY) as string | null;
  const url = formData.get(FESTIVAL_URL_KEY) as string | null;
  const location = formData.get(FESTIVAL_LOCATION_KEY) as string | null;
  const styles = formData.get(FESTIVAL_STYLES_KEY) as string | null;
  const startDate = formData.get(FESTIVAL_START_DATE_KEY) as string | null;
  const endDate = formData.get(FESTIVAL_END_DATE_KEY) as string | null;
  const masterPassword = formData.get(MASTER_PASSWORD_KEY) as string | null;

  const isValid =
    masterPassword &&
    masterPassword === "1960" &&
    name !== null &&
    url !== null &&
    location !== null &&
    styles !== null &&
    startDate !== null &&
    endDate !== null;

  //! TODO: patch styles here (perhaps add checkboxes)
  return isValid
    ? {
        name,
        location,
        url,
        styles: [styles],
        endDate: new Date(endDate).toISOString(),
        startDate: new Date(startDate).toISOString(),
      }
    : null;
};

const validateAndAddFestival = async (formData: FormData) => {
  const data = validateForm(formData);

  if (data === null) return;

  const festivals = await getFestivals();
  await setFestivals([...festivals, data]);
};

const AddFestivalDialog = ({ showDialog, setShowDialog }: DialogProps) => (
  <Dialog
    onClose={() => setShowDialog(false)}
    open={showDialog}
    disableScrollLock
  >
    <DialogTitle>Enter New Festival Info</DialogTitle>

    <Container sx={{ pb: 3 }}>
      <Box
        component="form"
        autoComplete="off"
        action={(formData: FormData) => {
          validateAndAddFestival(formData);
          setShowDialog(false);
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <InputLabel htmlFor={FESTIVAL_NAME_KEY}>Name</InputLabel>
            <OutlinedInput
              fullWidth
              name={FESTIVAL_NAME_KEY}
              id={FESTIVAL_NAME_KEY}
              size="small"
              required
              type="text"
            />
          </Grid>

          <Grid item xs={6}>
            <InputLabel htmlFor={FESTIVAL_URL_KEY}>URL/Link</InputLabel>
            <OutlinedInput
              name={FESTIVAL_URL_KEY}
              fullWidth
              id={FESTIVAL_URL_KEY}
              size="small"
              required
              type="url"
            />
          </Grid>

          <Grid item xs={12}>
            <InputLabel htmlFor={FESTIVAL_LOCATION_KEY}>Location</InputLabel>
            <OutlinedInput
              name={FESTIVAL_LOCATION_KEY}
              id={FESTIVAL_LOCATION_KEY}
              size="small"
              required
              fullWidth
              type="text"
            />
          </Grid>

          <Grid item xs={6}>
            <InputLabel htmlFor={FESTIVAL_START_DATE_KEY}>
              Start Date
            </InputLabel>
            <OutlinedInput
              name={FESTIVAL_START_DATE_KEY}
              fullWidth
              id={FESTIVAL_START_DATE_KEY}
              size="small"
              required
              type="date"
            />
          </Grid>

          <Grid item xs={6}>
            <InputLabel htmlFor={FESTIVAL_END_DATE_KEY}>End Date</InputLabel>
            <OutlinedInput
              name={FESTIVAL_END_DATE_KEY}
              fullWidth
              id={FESTIVAL_END_DATE_KEY}
              size="small"
              required
              type="date"
            />
          </Grid>

          <Grid item xs={6}>
            <InputLabel htmlFor={FESTIVAL_STYLES_KEY}>Styles</InputLabel>
            <OutlinedInput
              name={FESTIVAL_STYLES_KEY}
              fullWidth
              id={FESTIVAL_STYLES_KEY}
              size="small"
              required
              type="text"
            />
          </Grid>

          <Grid item xs={6}>
            <InputLabel htmlFor={MASTER_PASSWORD_KEY}>
              Master Password
            </InputLabel>
            <OutlinedInput
              name={MASTER_PASSWORD_KEY}
              fullWidth
              id={MASTER_PASSWORD_KEY}
              size="small"
              type="text"
            />
          </Grid>

          <Grid
            item
            xs={12}
            display="flex"
            alignItems="end"
            justifyContent="flex-end"
          >
            <Button type="submit">Submit</Button>
          </Grid>
        </Grid>
      </Box>
    </Container>
  </Dialog>
);

export default AddFestivalDialog;
