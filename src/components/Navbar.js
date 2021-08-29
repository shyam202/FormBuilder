import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  makeStyles,
  useTheme,
  List,
  Drawer,
  Divider,
} from "@material-ui/core";
import Menu from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import clsx from "clsx";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DashboardIcon from "@material-ui/icons/Dashboard";
import DateRangeIcon from "@material-ui/icons/DateRange";
import PeopleIcon from "@material-ui/icons/People";
import PersonIcon from "@material-ui/icons/Person";
import SettingsIcon from "@material-ui/icons/Settings";
import ToysIcon from "@material-ui/icons/Toys";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },

  menu: {
    fontSize: 35,
    color: "#808080",
  },

  appBar: {
    backgroundColor: "#000000",
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },

  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },

  type: {
    fontSize: 25,
    letterSpacing: 2,
    fontWeight: "bold",
    margin: "auto",
  },

  listItemText: {
    color: "#4BC676",
    fontSize: "2rem",
    fontWeight: "bold",
    letterSpacing: 2,
  },

  drawerOpen: {
    backgroundColor: "#000000",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },

  drawer: {
    backgroundColor: "#000000",
    color: "#ffffff",
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },

  drawerClose: {
    backgroundColor: "#000000",

    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1,
    },
  },

  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
}));

export default function Navbar() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <div className="Navbar">
      <AppBar
        position="sticky"
        className={classes.header}
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            aria-label="open drawer"
            color="inherit"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <Menu className={classes.menu} />
          </IconButton>
          <Typography variant="h5" className={classes.type}>
            FORM BUILDER
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <CloseIcon className={classes.menu} />
            ) : (
              <CloseIcon className={classes.menu} />
            )}
          </IconButton>
        </div>
        <Divider />
        <div className={classes.list}>
          <List>
            {["Dashboard", "Calender"].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>
                  {index % 2 === 0 ? (
                    <DashboardIcon className={classes.menu} />
                  ) : (
                    <DateRangeIcon className={classes.menu} />
                  )}
                </ListItemIcon>
                <ListItemText
                  classes={{ primary: classes.listItemText }}
                  primary={text}
                />
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {["Teams", "Fan"].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>
                  {index % 2 === 0 ? (
                    <PeopleIcon className={classes.menu} />
                  ) : (
                    <ToysIcon className={classes.menu} />
                  )}
                </ListItemIcon>
                <ListItemText
                  classes={{ primary: classes.listItemText }}
                  primary={text}
                />
              </ListItem>
            ))}
          </List>
          <List>
            {["Cog", "Person"].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>
                  {index % 2 === 0 ? (
                    <SettingsIcon className={classes.menu} />
                  ) : (
                    <PersonIcon className={classes.menu} />
                  )}
                </ListItemIcon>
                <ListItemText
                  classes={{ primary: classes.listItemText }}
                  primary={text}
                />
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>
    </div>
  );
}
