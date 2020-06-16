import React from "react";
import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import DashboardIcon from "@material-ui/icons/Dashboard";
import { useHistory } from "react-router";

const MainNavigation = () => {
  const history = useHistory();

  const navigateTo = (route) => history.replace(route);

  return (
    <List>
      <ListItem button onClick={() => navigateTo("/dashboard")}>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary={"Dashboard"} />
      </ListItem>
      <ListItem button onClick={() => navigateTo("/formik")}>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary={"FormikPage"} />
      </ListItem>
    </List>
  );
};

export default MainNavigation;
