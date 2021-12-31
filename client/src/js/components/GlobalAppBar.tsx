import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useAppDispatch, useAppSelector } from '../redux/store';
import { globalUIStateSlice } from '../redux/globalUIStateSlice';

export const GlobalAppBar = () => {
  const settings = useAppSelector((state) => state.settingsState.settings);
  const dispatch = useAppDispatch();
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
          onClick={() => dispatch(globalUIStateSlice.actions.toggleDrawer())}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h4">{settings.appName}</Typography>
      </Toolbar>
    </AppBar>
  );
};
