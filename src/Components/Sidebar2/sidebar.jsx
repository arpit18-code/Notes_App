import * as React from "react";
import PropTypes from "prop-types";
import { useContext } from "react";
import { AllNotes } from "../../Context/AllNotes/allNotesContext";
import {
  Divider,
  Drawer,
  Box,
  CssBaseline,
  AppBar,
  Typography,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";
import UndoIcon from "@mui/icons-material/Undo";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import { useNavigate } from "react-router-dom";

const drawerWidth = 240;

function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);
  const navigate = useNavigate();

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  let { currentPage, setCurrentPage } = useContext(AllNotes);
  const handleNavigation = (text) => {
    switch (text) {
      case "Home":
        navigate("/");
        setCurrentPage("Home");
        break;
      case "Important":
        navigate("/Important");
        setCurrentPage("Important");
        break;
      case "Archived":
        navigate("/Archived");
        setCurrentPage("Archived");
        break;
      case "Deleted":
        navigate("/Deleted");
        setCurrentPage("Deleted");
        break;
      default:
        break;
    }

    setMobileOpen(false);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {["Home", "Important", "Archived", "Deleted"].map((text, index) => (
          <ListItem key={text}>
            <ListItemButton
              onClick={() => handleNavigation(text)}
              sx={{
                backgroundColor:
                  currentPage === text ? "rgb(21,93,252)" : "transparent",
                color: currentPage === text ? "white" : "inherit",
                "& #listIcon": {
                  color: currentPage === text ? "white" : "inherit",
                },
                borderTopRightRadius: "24px",
                borderBottomRightRadius: "24px",
                "&:hover": {
                  backgroundColor:
                    currentPage === text
                      ? "rgb(21,93,252)"
                      : "rgb(60, 120, 255)",
                  color: "white",
                },
                "&:hover #listIcon": {
                  color: "white",
                },
              }}
            >
              <ListItemIcon id="listIcon">
                {index === 0 && <HomeIcon />}
                {index === 1 && <PriorityHighIcon />}
                {index === 2 && <UndoIcon />}
                {index === 3 && <RemoveCircleIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex", ml: 0 }}>
      <CssBaseline />
      <div className="flex justify-start items-start m-0">
        <Toolbar className="ml-0">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </div>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          slotProps={{
            root: {
              keepMounted: true, // Better open performance on mobile.
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  window: PropTypes.func,
};

export default ResponsiveDrawer;
