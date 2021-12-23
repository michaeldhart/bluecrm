import { Grid, TextField } from '@mui/material';
import { useFormik } from 'formik';

export const SettingsRoute = () => {
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      appName: '',
    },
    onSubmit: (values) => {},
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <Grid container mt={4}>
        <Grid item xs={6}>
          <TextField
            name="appName"
            label="App name"
            fullWidth
            value={formik.values.appName}
            onChange={formik.handleChange}
          />
        </Grid>
      </Grid>
    </form>
  );
};
