import {Box,useTheme,Typography} from "@mui/material"
import {ExpandMore} from "@mui/icons-material"
import {tokens} from "../../theme"
import Header from "../../components/Header"

import Accordion from "@mui/material/Accordion"
import AccordionSummary from "@mui/material/AccordionSummary"
import{AccordionDetails} from "@mui/material"


const FAQ=()=>{
    const theme=useTheme()
    const colors=tokens(theme.palette.mode)
    return(
        <Box m="20px">
            <Header title="FAQ" subtitle="Frequently Asked Questions"/>

            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMore/>}>
                    <Typography color={colors.greenAccent[500]} varianat="h5">An Impotant Question</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto ab iure perferendis beatae suscipit ipsa reprehenderit, magni fuga libero ipsam cum, deserunt repellendus necessitatibus inventore recusandae harum unde! Totam nemo laboriosam maxime veritatis vitae, cumque quo deleniti voluptatibus, adipisci, sapiente id dolore laudantium eos quibusdam consequatur. Dignissimos, ut similique rerum molestias illum voluptas hic omnis, ea nihil, laudantium pariatur eligendi blanditiis quidem deserunt quaerat eos. Nobis quas libero odit ipsum natus optio accusamus explicabo odio id ea expedita, blanditiis eum laboriosam saepe! Ducimus dolor placeat provident aut voluptate corporis corrupti? Itaque quia beatae ea quaerat placeat earum quam fuga eveniet.
                    </Typography>
                </AccordionDetails>
            </Accordion >
            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMore/>}>
                    <Typography color={colors.greenAccent[500]} varianat="h5">Another important question</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto ab iure perferendis beatae suscipit ipsa reprehenderit, magni fuga libero ipsam cum, deserunt repellendus necessitatibus inventore recusandae harum unde! Totam nemo laboriosam maxime veritatis vitae, cumque quo deleniti voluptatibus, adipisci, sapiente id dolore laudantium eos quibusdam consequatur. Dignissimos, ut similique rerum molestias illum voluptas hic omnis, ea nihil, laudantium pariatur eligendi blanditiis quidem deserunt quaerat eos. Nobis quas libero odit ipsum natus optio accusamus explicabo odio id ea expedita, blanditiis eum laboriosam saepe! Ducimus dolor placeat provident aut voluptate corporis corrupti? Itaque quia beatae ea quaerat placeat earum quam fuga eveniet.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMore/>}>
                    <Typography color={colors.greenAccent[500]} varianat="h5">My favorite question</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto ab iure perferendis beatae suscipit ipsa reprehenderit, magni fuga libero ipsam cum, deserunt repellendus necessitatibus inventore recusandae harum unde! Totam nemo laboriosam maxime veritatis vitae, cumque quo deleniti voluptatibus, adipisci, sapiente id dolore laudantium eos quibusdam consequatur. Dignissimos, ut similique rerum molestias illum voluptas hic omnis, ea nihil, laudantium pariatur eligendi blanditiis quidem deserunt quaerat eos. Nobis quas libero odit ipsum natus optio accusamus explicabo odio id ea expedita, blanditiis eum laboriosam saepe! Ducimus dolor placeat provident aut voluptate corporis corrupti? Itaque quia beatae ea quaerat placeat earum quam fuga eveniet.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMore/>}>
                    <Typography color={colors.greenAccent[500]} varianat="h5">Random questions</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto ab iure perferendis beatae suscipit ipsa reprehenderit, magni fuga libero ipsam cum, deserunt repellendus necessitatibus inventore recusandae harum unde! Totam nemo laboriosam maxime veritatis vitae, cumque quo deleniti voluptatibus, adipisci, sapiente id dolore laudantium eos quibusdam consequatur. Dignissimos, ut similique rerum molestias illum voluptas hic omnis, ea nihil, laudantium pariatur eligendi blanditiis quidem deserunt quaerat eos. Nobis quas libero odit ipsum natus optio accusamus explicabo odio id ea expedita, blanditiis eum laboriosam saepe! Ducimus dolor placeat provident aut voluptate corporis corrupti? Itaque quia beatae ea quaerat placeat earum quam fuga eveniet.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMore/>}>
                    <Typography color={colors.greenAccent[500]} varianat="h5">AAsk anything related to tech</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto ab iure perferendis beatae suscipit ipsa reprehenderit, magni fuga libero ipsam cum, deserunt repellendus necessitatibus inventore recusandae harum unde! Totam nemo laboriosam maxime veritatis vitae, cumque quo deleniti voluptatibus, adipisci, sapiente id dolore laudantium eos quibusdam consequatur. Dignissimos, ut similique rerum molestias illum voluptas hic omnis, ea nihil, laudantium pariatur eligendi blanditiis quidem deserunt quaerat eos. Nobis quas libero odit ipsum natus optio accusamus explicabo odio id ea expedita, blanditiis eum laboriosam saepe! Ducimus dolor placeat provident aut voluptate corporis corrupti? Itaque quia beatae ea quaerat placeat earum quam fuga eveniet.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMore/>}>
                    <Typography color={colors.greenAccent[500]} varianat="h5">We are here to help</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto ab iure perferendis beatae suscipit ipsa reprehenderit, magni fuga libero ipsam cum, deserunt repellendus necessitatibus inventore recusandae harum unde! Totam nemo laboriosam maxime veritatis vitae, cumque quo deleniti voluptatibus, adipisci, sapiente id dolore laudantium eos quibusdam consequatur. Dignissimos, ut similique rerum molestias illum voluptas hic omnis, ea nihil, laudantium pariatur eligendi blanditiis quidem deserunt quaerat eos. Nobis quas libero odit ipsum natus optio accusamus explicabo odio id ea expedita, blanditiis eum laboriosam saepe! Ducimus dolor placeat provident aut voluptate corporis corrupti? Itaque quia beatae ea quaerat placeat earum quam fuga eveniet.
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </Box>


    )
}

export default FAQ