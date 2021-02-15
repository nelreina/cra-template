import React from "react";
import { List, ListItem, ListItemText } from "@material-ui/core";
import { useNavigate } from "react-router";
import { useAuth } from "../../services/AuthProvider";
import FixedPosition from "./FixedPosition";
import { useApp } from "../../services/AppProvider";

const MainNavigation = ({ drawerWidth }) => {
  const { role } = useAuth();
  switch (role) {
    case "authenticated":
      return <ExampleMenu drawerWidth={drawerWidth} />;
    default:
      return null;
  }
};

export default MainNavigation;

const root = "/back-office";

const ExampleMenu = ({ drawerWidth }) => {
  const navigateTo = useNavigate();
  const { formSettings } = useApp();

  return (
    <List>
      <ListItem button onClick={() => navigateTo(`${root}/authenticated`)}>
        <ListItemText primary={"Dashboard"} />
      </ListItem>
      <FixedPosition drawerWidth={drawerWidth}>
        {formSettings.map((setting) => (
          <ListItem
            key={setting.id}
            button
            onClick={() => navigateTo(`${root}/settings/${setting.resource}`)}
          >
            <ListItemText primary={setting.menuLabel} />
          </ListItem>
        ))}
      </FixedPosition>
    </List>
  );
};
