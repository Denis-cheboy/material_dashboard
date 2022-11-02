import {BrowserRouter as Router,Routes,Route} from"react-router-dom"

import { ProSidebarProvider } from "react-pro-sidebar";

import { ColorModeContext,useMode } from './theme';
import { CssBaseline,ThemeProvider,Grid } from '@mui/material';
import './App.css';
import Topbar from './scenes/global/Topbar';
import Sidebar from "./scenes/global/Sidebar"
import Dashboard from './scenes/dashboard';
import Team from './scenes/team';
import Invoices from './scenes/invoices';
import Contacts from './scenes/contacts';
import Bar from './scenes/bar';
import Form from './scenes/form';
import Line from './scenes/line';
import Pie from './scenes/pie';
import FAQ from './scenes/faq';
// import Geography from './scenes/geographSy';
import Calendar from './scenes/calendar';


function App() {
  const [theme,colorMode]=useMode()
  
  return (
  <Router>
    < ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <ProSidebarProvider>
          
        <CssBaseline/>
            <Grid container sx={{position:"relative",minWidth:"100%",height:"100vh",width:"100%"}}>
              <Grid item sm={2.5}>
                <Sidebar/>
              </Grid>
              <Grid item sm={9.5}>
                <Topbar/>
                <Routes>
                  <Route path="/" element={<Dashboard/>}/>
                  <Route path="team" element={<Team/>}/>
                  <Route path="contacts" element={<Contacts/>}/>
                  <Route path="/invoices" element={<Invoices/>}/>
                  <Route path="/form" element={<Form/>}/> 
                  <Route path="/calendar" element={<Calendar/>}/>
                  <Route path="/faq" element={<FAQ/>}/>
                  <Route path="/bar" element={<Bar/>}/>
                  <Route path="/pie" element={<Pie/>}/>
                   <Route path="/line" element={<Line/>}/>
                  {/* <Route path="/geography" element={<Geography/>}/>  */}
                </Routes> 
               </Grid>
            </Grid>
        </ProSidebarProvider>
      </ThemeProvider>
    </ColorModeContext.Provider>
  </Router>

  );
}

export default App;
