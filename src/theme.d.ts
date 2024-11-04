import { ThemeOptions } from "@mui/material";

declare module '@mui/material/styles'{

    interface Theme {
        stauts:{
            danger:string, 
        }
    }
    interface ThemeOptions{
        status:{
            danger:React.CSSProperties['color']
        }
    }
}