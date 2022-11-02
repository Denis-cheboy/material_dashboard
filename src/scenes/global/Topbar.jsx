import React from 'react'
import {Box,IconButton,useTheme,InputBase} from "@mui/material"
import {useContext} from "react"
import {ColorModeContext,tokens} from "../../theme"
import { LightModeOutlined } from '@mui/icons-material'
import { DarkModeOutlined } from '@mui/icons-material'
import { NotificationsOutlined } from '@mui/icons-material'
import { SettingsOutlined } from '@mui/icons-material'
import { PersonOutlined } from '@mui/icons-material'
import { Search } from '@mui/icons-material'


function Topbar() {
    const theme=useTheme()
    const colors=tokens(theme.palette.mode)
    const colorMode=useContext(ColorModeContext)

    return (
        <Box display="flex" justifyContent="space-between" p={2}>

            <Box display="flex" backgroundColor={colors.primary[400]} borderRadius="3px">
                <InputBase sx={{ml:2,flex:1,placeholder:"search"}}/>
                <IconButton type="button" sx={{p:1}}>
                    <Search/>
                </IconButton>
            </Box>
        
            <Box display="flex" >
                <IconButton onClick={colorMode.toggleColorMode}>
                    {theme.palette.mode==="dark"?(<DarkModeOutlined/>):(<LightModeOutlined/>)}
                </IconButton>

                <IconButton>
                  <SettingsOutlined/>
                </IconButton>

                <IconButton>
                  <NotificationsOutlined/>
                </IconButton>

                <IconButton>
                  <PersonOutlined/>
                </IconButton>

            </Box>
        </Box>
        

      
    
    )
}

export default Topbar