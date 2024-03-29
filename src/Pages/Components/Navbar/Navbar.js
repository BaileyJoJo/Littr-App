import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
// import MaterialUI dependencies
import { Button } from '@mui/material';

import './Navbar.css';

import { Link } from "react-router-dom";


const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.25),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  marginRight: 5,
  width: "100%",
  [theme.breakpoints.up("xs")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
    maxWidth: "240px",
  },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(0, 0, 0, 0),
    paddingLeft: `calc(1em + ${theme.spacing(1)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("xs")]: {
      width: "17ch",
      "&:focus": {
        width: "13ch",
      },
    },
  },
}));

export default function SearchAppBar() {
  // Make function to hold menu this.state

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [isSearchOpen, setSearchOpen] = React.useState(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    console.log(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSearchClick = () => {
    setSearchOpen(!isSearchOpen);
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ background: "#6AAF88" }}>
        <Toolbar>
          <Search sx={{ borderRadius: "10px" }}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2, background: "#2F3E46", 
              "&:hover": { backgroundColor: "#F5BB02" },
              "&:active": { backgroundColor: "#F5BB02" },
              "&:focus": { backgroundColor: "#F5BB02" },
              borderRadius: "10px", padding: "5px", marginRight: "0" }}
              onClick={handleSearchClick}
            >
              <SearchIcon />
            </IconButton>
            {isSearchOpen && (
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
                sx={{ borderRadius: "10px" }}
              />
            )}
          </Search>
          <Typography
            variant="h5"
            noWrap
            component="div"
            sx={{
              flexGrow: 1,
              fontFamily: "Montserrat, sans-serif",
              fontWeight: "bold",
              textShadow: '2px 2px 2px rgba(0, 0, 0, 0.25)',
              marginLeft: "10px",
            }}
          >
            <Link to="/">LITTR</Link>
          </Typography>

          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2, background: "#2F3E46", 
              "&:hover": { backgroundColor: "#F5BB02" },
              "&:active": { backgroundColor: "#F5BB02" },
              "&:focus": { backgroundColor: "#F5BB02" },
              borderRadius: "10px", padding: "5px", marginRight: "0" }}
            onClick={handleClick} // Add menu functionality
          >
          <MenuIcon />
          </IconButton>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
            paperprops={{
              elevation: 1,
            }}
          >
            <MenuItem id="dropdown-menu" onClick={handleClose}>
              {/* TODO: Change the content here based on whether user is logged in or not */}
              <Link to="/src/pages/createpostform">Create a Post</Link>
              <Button variant="contained">
                {/* Change the Content here based on whether user is logged in or not */}
                FIX THIS BUTTON
              </Button>
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
