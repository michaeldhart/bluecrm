import { Button, Grid, TextField } from '@mui/material';
import { useFormik } from 'formik';
import { useEffect } from 'react';
import { settingsStateAsyncActions } from '../../redux/settingsStateSlice';
import { useAppDispatch, useAppSelector } from '../../redux/store';

export const SettingsRoute = () => {
  const settings = useAppSelector((state) => state.settingsState.settings);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(settingsStateAsyncActions.getSettings());
  }, []);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      appName: settings.appName,
    },
    onSubmit: (values) => {
      const { appName } = values;
      const newSettings = {
        appName,
      };
      dispatch(settingsStateAsyncActions.updateSettings(newSettings));
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Grid container mt={4}>
        <Grid item xs={12} sm={6}>
          <TextField
            name="appName"
            label="App name"
            fullWidth
            value={formik.values.appName}
            onChange={formik.handleChange}
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'flex-start',
          }}
        >
          <Button type="submit" variant="contained">
            Save
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};
