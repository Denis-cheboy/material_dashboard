import React from 'react'
import {useState} from "react"
import { Sidebar as ProSidebar,Menu,MenuItem} from "react-pro-sidebar"
import profile from "../../profile.jpg"

import {Box,IconButton,Typography,useTheme,Avatar} from "@mui/material"
import {Link} from "react-router-dom"
import {tokens} from "../../theme"
import {HomeOutlined} from "@mui/icons-material"
import {PeopleOutlined} from "@mui/icons-material"
import {ContactsOutlined} from "@mui/icons-material"
import {ReceiptOutlined} from "@mui/icons-material"
import {PersonOutlined} from "@mui/icons-material"
import {CalendarTodayOutlined} from "@mui/icons-material"
import {HelpOutlined} from "@mui/icons-material"
import {BarChartOutlined} from "@mui/icons-material"
import {PieChartOutlineOutlined} from "@mui/icons-material"
import {TimelineOutlined} from "@mui/icons-material"
import {MenuOutlined} from "@mui/icons-material"
import {MapOutlined} from "@mui/icons-material"

const Item=({title,to,icon,selected,setSelected})=>{
  const theme=useTheme()
  const colors=tokens(theme.palette.mode)
  return(
    <MenuItem
      active={selected === title}
      style={{
        color:colors.grey[100]
      }}
      onClick={()=>setSelected(title)}
      icon={icon}
    >
      
     
      <Link to={to} style={{textDecoration:"none",color:"inherit"}}>
        <Typography>
          {title}
        </Typography>

      </Link>
    </MenuItem>
  )
}
function Sidebar() {

  const theme=useTheme()
  const colors=tokens(theme.palette.mode)
  const [isCollapsed,setIsCollapsed]=useState(false)
  const [selected,setSelected]=useState("Dashboard")
  return (
    <Box
    sx={{
      "& .pro-sidebar-inner":{
        background:`${colors.primary[400]}  !important`
      },
      "& .pro-icon-wrapper":{
        backgroundColor:"transparent !important"
      },
      "&.pro-inner-item":{
        padding:"5px 35px 5px 20px !important"
      },
      "& .pro-inner-item:hover":{
        color:"#868dfb !important"

      },
      "& .pro-menu-item.active":{
        color:"#6870fa !important"
      }
    }}
    >
      <ProSidebar>
        <Menu >
          <MenuItem
          onClick={()=>setIsCollapsed(!isCollapsed)}
          icon={isCollapsed?<MenuOutlined/>:undefined}
          style={{
            margin:"10px 0 20px 0",
            color:colors.grey[100]
          }}
          >
            { !isCollapsed &&
            <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            ml="15px"
            >
              <Typography variant="h3" color={colors.grey[100]}>ADMINIS</Typography>
              <IconButton onClick={()=>setIsCollapsed(!isCollapsed)}>
                <MenuOutlined/>
              </IconButton>

            </Box>
            }
          </MenuItem>
          {!isCollapsed && (
            <Box mb="25px">
              <Box  display="flex" justifyContent="center" alignItems="center" >
                <Avatar img={profile} alt="profile-user"/>
              </Box>
              <Box textAlign="center" >
                <Typography variant="h2" color={colors.grey[100]} fontWeight="bold" sx={{m:"10px 0 0 0"}}>Ed Roho</Typography>
                <Typography variant="h5" color={colors.greenAccent[500]}>VP Fancy Admin</Typography>
              </Box>
            </Box>
          )}
          <Box
          paddingLeft={isCollapsed ? undefined:"10%"}
          >
            <Item
            title="Dashboard"
            to="/"
            icon={<HomeOutlined/>}
            selected={selected}
            setSelected={setSelected}
            />
            <Typography
            varaint="h6"
            color={colors.grey[300]}
            sx={{m:"15px 0 5px 20px"}}
            >
              Data
            </Typography>
            <Item
            title="Manage Team"
            to="team"
            icon={<PeopleOutlined/>}
            selected={selected}
            setSelected={setSelected}
            />
            <Item
            title="Contacts Information"
            to="contacts"
            icon={<ContactsOutlined/>}
            selected={selected}
            setSelected={setSelected}
            />
            <Item
            title="Invoices Balances"
            to="invoices"
            icon={<ReceiptOutlined/>}
            selected={selected}
            setSelected={setSelected}
            />
            <Typography
            varaint="h6"
            color={colors.grey[300]}
            sx={{m:"15px 0 5px 20px"}}
            >
              Pages
            </Typography>
            <Item
            title="Profile Form"
            to="form"
            icon={<PersonOutlined/>}
            selected={selected}
            setSelected={setSelected}
            />
            <Item
            title="Calendar"
            to="/calendar"
            icon={<CalendarTodayOutlined/>}
            selected={selected}
            setSelected={setSelected}
            />
            <Item
            title="FAQ Page"
            to="faq"
            icon={<HelpOutlined/>}
            selected={selected}
            setSelected={setSelected}
            />
             <Typography
            varaint="h6"
            color={colors.grey[300]}
            sx={{m:"15px 0 5px 20px"}}
            >
            Charts
            </Typography>
            <Item
            title="Bar Chart"
            to="bar"
            icon={<BarChartOutlined/>}
            selected={selected}
            setSelected={setSelected}
            /> <Item
            title="Pie Chart"
            to="pie"
            icon={<PieChartOutlineOutlined/>}
            selected={selected}
            setSelected={setSelected}
            /> <Item
            title="Line Chart"
            to="line"
            icon={<TimelineOutlined/>}
            selected={selected}
            setSelected={setSelected}
            /> <Item
            title="Geopgraphy Chart"
            to="/geography"
            icon={<MapOutlined/>}
            selected={selected}
            setSelected={setSelected}
            />
            


          </Box>
        </Menu>
      </ProSidebar>  
    </Box>

  )
}

export default Sidebar
