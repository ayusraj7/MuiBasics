import './App.css';
import MuiTypography from './components/MuiTypography';
import MuiButton from './components/MuiButton';
import MuiAutoComplete from './components/MuiAutoComplete';
import PracticeComponent from './components/PracticeComponent';
import MuiTextField from "./components/MuiTextField";
import MuiSelect from "./components/MuiSelect";
import MuiRadioButton from "./components/MuiRadioButton";
import MuiCheckbox from "./components/MuiCheckbox";
import { Stack } from "@mui/material";
import { useState } from "react";
import MuiRating from "./components/MuiRating";
import MuiSwitch from "./components/MuiSwitch";
import MuiAutoComplete2 from "./components/MuiAutoComplete2";
import MuiBox from "./components/MuiBox";
import MuiGrid from "./components/MuiGrid";
import MuiPaper from "./components/MuiPaper";
import MuiCard from "./components/MuiCard";
import MuiAccordion from "./components/MuiAccordion";
import MuiImageList from "./components/MuiImageList";
import MuiNavbar from "./components/MuiNavbar";
import MuiLink from "./components/MuiLink";
import MuiBreadCrumbs from "./components/MuiBreadCrumbs";
import MuiDrawer from "./components/MuiDrawer";
import MuiSpeedDial from "./components/MuiSpeedDial";
import MuiBottomNavigation from "./components/MuiBottomNavigation";
import MuiAvatar from "./components/MuiAvatar";
import MuiBadge from "./components/MuiBadge";
import MuiList from "./components/List";
import MuiChip from "./components/MuiChip";
import MuiToolTip from "./components/MuiToolTip";
import MuiTable from "./components/MuiTable";
import MuiAlert from "./components/MuiAlert";
import MuiSnackBar from "./components/MuiSnackBar";
import MuiDialog from "./components/MuiDialog";
import MuiProgress from "./components/MuiProgress";
import MuiSkeleton from "./components/MuiSkeleton";
import { LocalizationProvider } from "@mui/lab";
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import MuiDateTimePicker from './components/MuiDateTimePicker';
import MuiTabs from './components/MuiTabs';
import MuiTimeline from './components/MuiTimeline';
import MuiMasonry from './components/MuiMasonry';
import MuiResponsivness from './components/MuiResponsivness';
import { createTheme } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import MuiDataGrid from './components/MuiDataGrid';
import AgGrid1 from './AgGrid/AgGrid1';
// const theme = createTheme({
//   palette:{
//     status:{
//       danger:'#e53e3e'
//     },
//     secondary:{
//       main:'#000000'
//     }
//   }
// })
function App() {
  const [value, setValue] = useState<string>();
  console.log("value", value);

  
  return (
   
    <>
      <div className="App" style={{ margin: "15px" }}>
        {/* <MuiTypography></MuiTypography> */}
        {/* <MuiButton></MuiButton> */}
        {/* <MuiAutoComplete></MuiAutoComplete>
         <PracticeComponent/> */}
        {/* <MuiTextField/> */}
        {/* <MuiSelect/> */}
        {/* <MuiRadioButton/>
         <MuiCheckbox></MuiCheckbox> */}
        {/* <MuiSwitch/> */}
        {/* <MuiRating/> */}
        {/* <MuiAutoComplete2/> */}
        {/* <MuiBox/> */}
        {/* <MuiGrid/> */}
        {/* <MuiPaper></MuiPaper> */}
        {/* <MuiCard/> */}
        {/* <MuiAccordion/> */}
        {/* <MuiImageList/> */}
        {/* <MuiNavbar/> */}
        {/* <MuiLink/> */}
        {/* <MuiBreadCrumbs/> */}
        {/* <MuiDrawer/> */}
        {/* <MuiSpeedDial/> */}
        {/* <MuiBottomNavigation/> */}
        {/* <MuiAvatar/> */}
        {/* <MuiBadge/> */}
        {/* <MuiList/> */}
        {/* <MuiChip></MuiChip> */}
        {/* <MuiToolTip/> */}
        {/* <MuiTable/> */}
        {/* <MuiAlert/> */}
        {/* <MuiSnackBar/> */}
        {/* <MuiDialog/> */}
        {/* <MuiProgress></MuiProgress> */}
        {/* <MuiSkeleton/> */}
        {/* <MuiDateTimePicker/> */}
        {/* <MuiTabs/> */}
        {/* <MuiTimeline/> */}
        {/* <MuiMasonry/> */}
        {/* <MuiResponsivness/> */}
        {/* <MuiDataGrid/> */}
        <AgGrid1/>
      </div>
    </>
  );
}

export default App;
