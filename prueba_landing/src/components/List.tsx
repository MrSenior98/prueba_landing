// components/CustomList.tsx

import { List, ListItem, ListItemText } from '@mui/material';

function Requirements() {
  const items = ['✔ NEXTJS 13', ' ✔ MUI ', ' ✔ CONTEXT API ', ' ✔ TYPESCRIPT', ' ✔ REACR HOOK FORM'];

  return (
    <List>
      {items.map((item, index) => (
        <ListItem key={index}>
          <ListItemText primary={item} />
        </ListItem>
      ))}
    </List>
  );
}

export default Requirements;
