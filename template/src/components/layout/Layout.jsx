import React from "react";
import MenuAppBar from "./MenuAppBar";

import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import logo from "../../assets/logo.png";
import MainNavigation from "./MainNavigation";
import FlexCenter from "./FlexCenter";

const drawerWidth = 150;

const Layout = ({ children, title, padding = true, centered = false }) => {
  const classes = useStyles({ padding });

  return (
    <div className={classes.root}>
      <CssBaseline />
      <MenuAppBar className={classes.appBar} title={title} />
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
        height="100vh"
      >
        <div className={classes.toolbar}>
          <img
            className={classes.img}
            src={logo}
            alt="Logo"
            width={drawerWidth}
            height={"178px"}
          />
        </div>

        <Divider />
        <MainNavigation drawerWidth={drawerWidth} />
      </Drawer>
      {centered && (
        <main className={classes.content}>
          <FlexCenter>{children}</FlexCenter>
        </main>
      )}
      {!centered && <main className={classes.content}>{children}</main>}
    </div>
  );
};

export default Layout;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    backgroundColor: "white",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    backgroundColor: "#6f6aa8",
    color: "white",
    width: drawerWidth,
  },
  img: {
    backgroundColor: "#fff",
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: (props) => (props.padding ? theme.spacing(3) : 0),
    marginTop: 64,
    // height: "80vh",
  },
}));
