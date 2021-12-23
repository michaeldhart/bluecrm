import { Add } from '@mui/icons-material';
import { Button } from '@mui/material';
import { contatctsUIStateSlice } from '../../redux/contactsUIStateSlice';
import { useAppDispatch } from '../../redux/store';
import { AddEditContactDialog } from '../AddEditContactDialog';
import { ContactsTable } from '../ContactsTable';

export const AddContactButton = () => {
  const dispatch = useAppDispatch();
  const handleButtonClick = () =>
    dispatch(contatctsUIStateSlice.actions.openAddEditContactDialog());
  return (
    <Button variant="contained" startIcon={<Add />} onClick={handleButtonClick}>
      Add
    </Button>
  );
};

export const ContactsRoute = () => {
  return (
    <>
      <ContactsTable />
      <AddEditContactDialog />
    </>
  );
};
