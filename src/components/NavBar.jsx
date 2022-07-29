import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PersonIcon from "@mui/icons-material/Person";
import { Contexto } from "../context/Context";

export default function NavBar() {
  const { setShowModal, showModal } = React.useContext(Contexto);

  const onClick = () => {
    setShowModal(!showModal);
  };

  const [value, setValue] = React.useState("recents");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation
      sx={{ width: "100%" }}
      value={value}
      onChange={handleChange}
      className="fixed bottom-0"
    >
      <BottomNavigationAction label="Home" value="Home" icon={<HomeIcon />} />
      <BottomNavigationAction
        label="Search"
        value="search"
        icon={<SearchIcon />}
      />
      <BottomNavigationAction
        onClick={onClick}
        label="Add"
        value="add"
        icon={<AddCircleIcon />}
      />
      <BottomNavigationAction
        label="Notifications"
        value="notifications"
        icon={<NotificationsIcon />}
      />
      <BottomNavigationAction
        label="Profile"
        value="profile"
        icon={<PersonIcon />}
      />
    </BottomNavigation>
  );
}
