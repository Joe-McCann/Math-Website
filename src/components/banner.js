import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

const drawerWidth = 240;

export default function Banner() {
    return (
        <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        <Toolbar>
          <Typography>
            Joe's Math Website
            <br></br>
            <i>If it exists, mathematicians will find a way to do math with it.</i>
          </Typography>
        </Toolbar>
      </AppBar>
    )
}