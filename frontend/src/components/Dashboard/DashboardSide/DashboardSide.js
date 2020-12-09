import React, { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

// components
import ClassNames from "classnames";

// graphics
import StudentProfile from "assets/images/student-profile.png";
import { dashboardRoutes } from "constants/dashboardRoutes";
import { ReactComponent as Profile } from "assets/images/profile.svg";
import { ReactComponent as Settings } from "assets/images/settings.svg";
import { ReactComponent as Logout } from "assets/images/logout.svg";

// material ui
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Typography } from "@material-ui/core";
import useStyles from "./styles";
import { useSelector } from "react-redux";

export default function DashboardSide(props) {
  const classes = useStyles();
  const { navData, settingData, profile } = props;

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  const [drawerOpen, setDrawerOpen] = useState(true);
  const [collapse, setCollapse] = useState(true);

  //   constructor(props) {
  //     super(props);
  //     state = {
  //       collapse: true,
  //       navData: props.navData,
  //       settingData: props.settingData,
  //       profile: props.profile,
  //       isAuthenticated: true,
  //     };
  //     CollapseToggle = CollapseToggle.bind(this);
  //   }

  const handleDrawerControl = () => {
    setDrawerOpen(() => !drawerOpen);
  };

  const CollapseToggle = () => {
    if (collapse) {
      setCollapse(false);
      document.getElementById("dashboard-top").classList.add("minimize");
    } else {
      document.getElementById("dashboard-top").classList.remove("minimize");
      setCollapse(true);
    }
  };

  let navList = navData.map((item) => (
    <NavigationListComponent
      key={item.id}
      src={item.imgURL}
      title={item.title}
      linkto={item.linkto}
    />
  ));
  let settingList = settingData.map((item) => (
    <NavigationListComponent
      key={item.id}
      src={item.imgURL}
      title={item.title}
      linkto={item.linkto}
    />
  ));

  return (
    <div className="sidebar">
      <Drawer
        variant="permanent"
        className={ClassNames(classes.drawer, {
          [classes.drawerOpen]: drawerOpen,
          [classes.drawerClose]: !drawerOpen,
        })}
        classes={{
          paper: ClassNames({
            [classes.drawerOpen]: drawerOpen,
            [classes.drawerClose]: !drawerOpen,
          }),
        }}
      >
        <div className={classes.fakeToolBar} />
        <div>
          <img className={classes.profileImage} src={StudentProfile} alt="" />
        </div>
        <div className={classes.navigation}>
          <List>
            {dashboardRoutes.teacher.map((item) => (
              <ListItem>
                <ListItemIcon classes={{ root: classes.icon }}>{item.icon}</ListItemIcon>
                <ListItemText
                  primary={
                    <Typography className={classes.label} variant="h6">
                      {item.label}
                    </Typography>
                  }
                />
              </ListItem>
            ))}
          </List>
        </div>
        <div>
          <div className="right-caret-container">
            <div className="right-caret" onClick={handleDrawerControl}>
              <div className="right-triangle"></div>
            </div>
          </div>
        </div>
        <div className="logout-setting-wrapper">
          <div className={classes.bottomMenu}>
            <div className="column">
              <Profile />
              <Typography className={classes.bottomLabel}>Profile</Typography>
            </div>
            <div className="column">
              <Profile />
              <Typography className={classes.bottomLabel}>Settings</Typography>
            </div>
            <div className="column">
              <Profile />
              <Typography className={classes.bottomLabel}>Log out</Typography>
            </div>
          </div>
        </div>
        <div className={classes.fakeToolBar} />
      </Drawer>
    </div>
  );
}

DashboardSide.propTypes = {
  navData: PropTypes.string,
  settingData: PropTypes.array,
  profile: PropTypes.string,
};

function NavigationListComponent(props) {
  return (
    <>
      <Link to={props.linkto}>
        <img src={props.src} alt="" />
        <span>{props.title}</span>
      </Link>
    </>
  );
}

NavigationListComponent.propTypes = {
  linkto: PropTypes.string,
  src: PropTypes.string,
  title: PropTypes.string,
};
