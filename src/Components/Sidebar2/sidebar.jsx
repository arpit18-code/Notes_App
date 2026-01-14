import * as React from "react";
import PropTypes from "prop-types";
import {
  Divider,
  Drawer,
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

  const handleNavigation = (text) => {
    switch (text) {
      case "Home":
        navigate("/");
        break;
      case "Important":
        navigate("/important");
        break;
      case "Archieved":
        navigate("/archieve");
        break;
      case "Deleted":
        navigate("/bin");
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
        {["Home", "Important", "Archieved", "Deleted"].map((text, index) => (
          <ListItem key={text} disablePadding className="hover:bg-blue-600">
            <ListItemButton onClick={() => handleNavigation(text)}>
              <ListItemIcon>
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
    <div>
      <Toolbar>
        <IconButton
          color="inherit"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { sm: "none" } }}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>

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
            margin: 0,
          },
        }}
        slotProps={{
          root: { keepMounted: true },
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
    </div>
  );
}

ResponsiveDrawer.propTypes = {
  window: PropTypes.func,
};

export default ResponsiveDrawer;
