const { makeStyles } = require("@material-ui/core");

const sideBarWidth = "220";

export default makeStyles((theme) => ({
  fakeToolBar: {
    ...theme.mixins.toolbar,
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  navigation: {
    color: "#ffffff",
    flexGrow: 1,
  },
  paperDrawer: {
    width: sideBarWidth,
    whiteSpace: "nowrap",
  },
  profileImage: {
    height: 100,
    width: 100,
  },
  drawer: {
    width: sideBarWidth,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    backgroundColor: theme.palette.primary.main,
    width: sideBarWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
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
  icon: {
    minWidth: 35,
  },
  label: {
    fontWeight: 700,
    textTransform: "uppercase",
    textAlign: "left",
  },
  bottomMenu: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  bottomLabel: {
    color: "#ffffff",
  },
}));
