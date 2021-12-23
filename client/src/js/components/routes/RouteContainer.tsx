import { Grid, Typography } from '@mui/material';

interface RouteContainerProps {
  pageTitle: string;
  pageActions?: JSX.Element[];
  pageContent: JSX.Element;
}

export const RouteContainer = (props: RouteContainerProps) => {
  const { pageTitle, pageActions, pageContent } = props;

  return (
    <>
      <Grid container alignItems="center">
        <Grid item xs>
          <Typography variant="h3">{pageTitle}</Typography>
        </Grid>
        <Grid
          item
          xs
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
          }}
        >
          {pageActions}
        </Grid>
      </Grid>
      {pageContent}
    </>
  );
};
