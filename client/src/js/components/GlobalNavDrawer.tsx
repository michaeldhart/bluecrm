import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  SvgIcon,
} from '@mui/material';
import { globalUIStateSlice } from '../redux/globalUIStateSlice';
import { useAppDispatch, useAppSelector } from '../redux/store';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ContactsIcon from '@mui/icons-material/Contacts';
import SettingsIcon from '@mui/icons-material/Settings';
import { Link, useNavigate } from 'react-router-dom';

export const GlobalNavDrawer = () => {
  const navigate = useNavigate();
  const drawerState = useAppSelector(
    (state) => state.globalUIState.drawerState
  );
  const dispatch = useAppDispatch();

  const menuItems: { name: string; path: string; icon: typeof SvgIcon }[] = [
    {
      name: 'Dashboard',
      path: '/',
      icon: DashboardIcon,
    },
    {
      name: 'Contacts',
      path: '/contacts',
      icon: ContactsIcon,
    },
    {
      name: 'Settings',
      path: '/settings',
      icon: SettingsIcon,
    },
  ];

  return (
    <Drawer
      anchor="left"
      open={drawerState}
      onClose={() => dispatch(globalUIStateSlice.actions.closeDrawer())}
    >
      <List>
        {menuItems.map((item) => {
          return (
            <ListItem
              button
              key={item.name}
              onClick={() => {
                navigate(item.path);
                dispatch(globalUIStateSlice.actions.closeDrawer());
              }}
            >
              <ListItemIcon>
                <item.icon />
              </ListItemIcon>
              <ListItemText primary={item.name} />
            </ListItem>
          );
        })}
      </List>
    </Drawer>
  );
};
