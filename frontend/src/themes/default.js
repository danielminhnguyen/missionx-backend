const primary = "#43C0F6";
const secondary = "#F91C85";
const warning = "#FFC260";
const success = "#3CD4A0";
const info = "#9013FE";

export const theme = {
  palette: {
    primary: {
      main: primary,
      contrastText: "#ffffff",
    },
    secondary: {
      main: secondary,
    },
    warning: {
      main: warning,
    },
    success: {
      main: success,
    },
    info: {
      main: info,
    },
    text: {
      primary: "#707070",
    },
    background: {
      main: "#B2E4FA",
      light: "#D8F1FC",
      dark: primary,
    },
    contrastText: "#fff",
  },
  customShadows: {
    widget: "0px 3px 11px 0px #E8EAFC, 0 3px 3px -2px #B2B2B21A, 0 1px 8px 0 #9A9A9A1A",
    widgetDark: "0px 3px 18px 0px #4558A3B3, 0 3px 3px -2px #B2B2B21A, 0 1px 8px 0 #9A9A9A1A",
    widgetWide: "0px 12px 33px 0px #E8EAFC, 0 3px 3px -2px #B2B2B21A, 0 1px 8px 0 #9A9A9A1A",
  },
  overrides: {
    MuiButton: {
      containedSecondary: {
        backgroundColor: secondary,
        color: "white",
      },
    },
    MuiOutlinedInput: {
      root: {},
    },
    MuiMenu: {
      paper: {
        boxShadow: "0px 3px 11px 0px #E8EAFC, 0 3px 3px -2px #B2B2B21A, 0 1px 8px 0 #9A9A9A1A",
      },
    },
    MuiSelect: {
      icon: {
        color: "#B9B9B9",
      },
    },
    MuiListItem: {
      root: {
        "&$selected": {
          backgroundColor: "#F3F5FF !important",
          "&:focus": {
            backgroundColor: "#F3F5FF",
          },
        },
      },
      button: {
        "&:hover, &:focus": {
          backgroundColor: "#F3F5FF",
        },
      },
    },
    MuiTouchRipple: {
      child: {
        backgroundColor: "white",
      },
    },
    MuiTableRow: {
      root: {
        height: 56,
      },
    },
    MuiTableCell: {
      root: {
        borderBottom: "1px solid rgba(224, 224, 224, .5)",
        paddingLeft: 24,
      },
      head: {
        fontSize: "0.95rem",
      },
      body: {
        fontSize: "0.95rem",
      },
    },
    PrivateSwitchBase: {
      root: {
        marginLeft: 10,
      },
    },
  },
};
