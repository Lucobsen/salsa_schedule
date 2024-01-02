import { Festival, addFestival } from "@/app/lib/actions";
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

  const isValid =
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
  if (data !== null) await addFestival(data);
};

const AddFestivalDialog = ({ showDialog, setShowDialog }: DialogProps) => (
  <Dialog
    onClose={() => setShowDialog(false)}
    open={showDialog}
    disableScrollLock
  >
    <DialogTitle>Enter New Festival Info</DialogTitle>

    <Container sx={{ pb: 3 }}>
      <Box component="form" autoComplete="off" action={validateAndAddFestival}>
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
              value="Luke's Test"
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
              value="http://luke-test.com"
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
              value="Amsterdam, Netherlands"
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
              value="2024-10-10"
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
              value="2024-10-15"
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
              value="salsa"
            />
          </Grid>

          <Grid
            item
            xs={6}
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
