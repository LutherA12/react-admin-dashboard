import { React, useState, Fragment } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Sidebaritems } from "../../helper-files/componentExports.jsx";
import { pathinfo } from "../../helper-files/simpleConstants";
import { tokens } from "../../helper-files/themes";
import { sidebarinfo, iteminfo } from "../../helper-files/simpleConstants";
import me from "../../assets/me.png";
import "react-pro-sidebar/dist/css/styles.css";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";

function Sidebar() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

  const items = {
    items: [
      <Sidebaritems
        title={iteminfo.title[0]}
        to={pathinfo.path[0]}
        icon={<HomeOutlinedIcon />}
        selected={selected}
        setSelected={setSelected}
      ></Sidebaritems>,

      <Sidebaritems
        title={iteminfo.title[1]}
        to={pathinfo.path[1]}
        icon={<PeopleOutlinedIcon />}
        selected={selected}
        setSelected={setSelected}
      ></Sidebaritems>,

      <Sidebaritems
        title={iteminfo.title[2]}
        to={pathinfo.path[2]}
        icon={<ContactsOutlinedIcon />}
        selected={selected}
        setSelected={setSelected}
      ></Sidebaritems>,

      <Sidebaritems
        title={iteminfo.title[3]}
        to={pathinfo.path[3]}
        icon={<ReceiptOutlinedIcon />}
        selected={selected}
        setSelected={setSelected}
      ></Sidebaritems>,

      <Sidebaritems
        title={iteminfo.title[4]}
        to={pathinfo.path[4]}
        icon={<PersonOutlinedIcon />}
        selected={selected}
        setSelected={setSelected}
      ></Sidebaritems>,

      <Sidebaritems
        title={iteminfo.title[5]}
        to={pathinfo.path[5]}
        icon={<CalendarTodayOutlinedIcon />}
        selected={selected}
        setSelected={setSelected}
      ></Sidebaritems>,

      <Sidebaritems
        title={iteminfo.title[6]}
        to={pathinfo.path[6]}
        icon={<HelpOutlineOutlinedIcon />}
        selected={selected}
        setSelected={setSelected}
      ></Sidebaritems>,

      <Sidebaritems
        title={iteminfo.title[7]}
        to={pathinfo.path[7]}
        icon={<BarChartOutlinedIcon />}
        selected={selected}
        setSelected={setSelected}
      ></Sidebaritems>,

      <Sidebaritems
        title={iteminfo.title[8]}
        to={pathinfo.path[8]}
        icon={<PieChartOutlineOutlinedIcon />}
        selected={selected}
        setSelected={setSelected}
      ></Sidebaritems>,

      <Sidebaritems
        title={iteminfo.title[9]}
        to={pathinfo.path[9]}
        icon={<TimelineOutlinedIcon />}
        selected={selected}
        setSelected={setSelected}
      ></Sidebaritems>,

      <Sidebaritems
        title={iteminfo.title[10]}
        to={pathinfo.path[10]}
        icon={<MapOutlinedIcon />}
        selected={selected}
        setSelected={setSelected}
      ></Sidebaritems>,
    ],
  };

  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: `${colors.primary[400]} !important`,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#868dfb !important",
        },
        "& .pro-menu-item.active": {
          color: "#6870fa !important",
        },
      }}
    >
      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape="square">
          <MenuItem
            onClick={() => {
              return setIsCollapsed(!isCollapsed);
            }}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{ margin: "10px 0 20px 0", color: colors.grey[100] }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                marginLeft="15px"
              >
                <Typography variant="h3" color={colors.grey[100]}>
                  {sidebarinfo.header}
                </Typography>
                <IconButton
                  onClick={() => {
                    return setIsCollapsed(!isCollapsed);
                  }}
                >
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>
          {/* CURRENT USER */}
          {!isCollapsed && (
            <Box marginBottom="25px">
              <Box display="flex" justifyContent="center" alignItems="center">
                <img
                  src={me}
                  alt="profile-user"
                  width="100px"
                  height="100px"
                  style={{ borderRadius: "50px", cursor: "pointer" }}
                />
              </Box>

              <Box textAlign="center">
                <Typography
                  variant="h2"
                  color={colors.grey[100]}
                  fontWeight="bold"
                  sx={{ marginTop: "10px" }}
                >
                  {sidebarinfo.userName}
                </Typography>
                <Typography variant="h5" color={colors.greenAccent[500]}>
                  {sidebarinfo.userTitle}
                </Typography>
              </Box>
            </Box>
          )}
          {/*MENU ITEMS*/}
          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            {items.items.map((item) => {
              return <Fragment key={Math.random()}>{item}</Fragment>;
            })}
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
}

export default Sidebar;

/*

const Sidebaritems = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <MenuItem
      active={selected === title}
      style={{ color: colors.grey[100] }}
      onClick={() => {
        return setSelected(title);
      }}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};


*/
