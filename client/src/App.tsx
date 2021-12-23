import { Container } from '@mui/material';
import { Route, Routes } from 'react-router';
import {
  AddContactButton,
  ContactsRoute,
} from './js/components/routes/ContactsRoute';
import { DashboardRoute } from './js/components/routes/DashboardRoute';
import { GlobalAppBar } from './js/components/GlobalAppBar';
import { GlobalNavDrawer } from './js/components/GlobalNavDrawer';
import { SettingsRoute } from './js/components/routes/SettingsRoute';
import { RouteContainer } from './js/components/routes/RouteContainer';

const App = () => {
  return (
    <div className="App">
      <GlobalAppBar />
      <GlobalNavDrawer />
      <Container
        maxWidth="xl"
        sx={{
          mt: 2,
        }}
      >
        <Routes>
          <Route
            path="/"
            element={
              <RouteContainer
                pageTitle="Dashboard"
                pageContent={<DashboardRoute />}
              />
            }
          />
          <Route
            path="/contacts"
            element={
              <RouteContainer
                pageTitle="Contacts"
                pageActions={[<AddContactButton key="add-contacts-button" />]}
                pageContent={<ContactsRoute />}
              />
            }
          />
          <Route
            path="/settings"
            element={
              <RouteContainer
                pageTitle="Settings"
                pageContent={<SettingsRoute />}
              />
            }
          />
        </Routes>
      </Container>
    </div>
  );
};

export default App;
