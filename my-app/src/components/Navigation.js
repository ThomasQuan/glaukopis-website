import React, { useState } from "react";
import { ReactComponent as Owl } from "../assets/svg/owl.svg";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import HomeIcon from "@material-ui/icons/Home";
import InfoIcon from "@material-ui/icons/Info";
import ContactSupportIcon from "@material-ui/icons/ContactSupport";
import GradeIcon from "@material-ui/icons/Grade";
import {
  Box,
  Button,
  Grid,
  makeStyles,
  AppBar,
  Toolbar,
  Typography,
  Drawer,
  Hidden,
  List,
  ListItem,
  ListItemIcon,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";

import { HOME, ABOUT, CONTACT, SERVICE } from "../controller/nav-controller";

//navigation button
const HeaderItem = ({ title, actionFn }) => {
  return (
    <Button aria-controls="simple-menu" aria-haspopup="true" onClick={actionFn}>
      <Typography variant="h5">{title}</Typography>
    </Button>
  );
};

const navStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  appBar: {
    backgroundColor: "white",
    padding: "2vh 0 2vh 0.5vw",
  },
  logo: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  navContent: {
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  rightHeaderMenu: {
    display: "flex",
    flexWrap: "wrap",
    marginTop: theme.spacing(3),
    justifyContent: "space-between",
  },
}));

const Navigation = (props) => {
  const classes = navStyles();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const drawer = (
    <div>
      <div />
      <List>
        <ListItem button>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>

          <HeaderItem title="Home" actionFn={() => setLink(HOME)} />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <InfoIcon />
          </ListItemIcon>

          <HeaderItem title="About Us" actionFn={() => setLink(ABOUT)} />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <GradeIcon />
          </ListItemIcon>

          <HeaderItem title="Service" actionFn={() => setLink(SERVICE)} />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <ContactSupportIcon />
          </ListItemIcon>

          <HeaderItem title="Contact Us" actionFn={() => setLink(CONTACT)} />
        </ListItem>
      </List>
    </div>
  );
  const history = useHistory();

  const setLink = (value) => {
    history.push(`/${value}`);
  };
  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <React.Fragment>
      <div className={classes.root}>
        <AppBar position="static" className={classes.appBar}>
          <Toolbar>
            <IconButton
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
            <Grid container justify="space-between">
              <Grid
                className={`${classes.logo} logo-container`}
                item
                xs={12}
                sm={12}
                md={3}
              >
                <Owl className="logo" />
                <Typography
                  variant="h4"
                  style={{ color: "black", marginLeft: "2vw" }}
                >
                  Glaukopis Wisdom
                </Typography>
              </Grid>
              <Grid className={classes.navContent} item xs={9} sm={12} md={6}>
                <Box className={classes.rightHeaderMenu}>
                  <HeaderItem title="Home" actionFn={() => setLink(HOME)} />
                  <HeaderItem
                    title="About Us"
                    actionFn={() => setLink(ABOUT)}
                  />
                  <HeaderItem
                    title="Service"
                    actionFn={() => setLink(SERVICE)}
                  />
                  <HeaderItem
                    title="Contact Us"
                    actionFn={() => setLink(CONTACT)}
                  />
                </Box>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
        <nav>
          <Hidden>
            <Drawer
              container={container}
              variant="temporary"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper,
              }}
              ModalProps={{
                keepMounted: true,
              }}
            >
              {drawer}
            </Drawer>
          </Hidden>
        </nav>
      </div>
    </React.Fragment>
  );
};

export default Navigation;
