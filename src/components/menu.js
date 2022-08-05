import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import Banner from './banner';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { MathJaxContext } from 'better-react-mathjax';
import { Asymptotics, Logic } from './pages/pages';

const drawerWidth = 240;

const config = {
  loader: { load: ["[tex]/html"] },
  tex: {
    packages: { "[+]": ["html"] },
    inlineMath: [
      ["$", "$"],
      ["\\(", "\\)"]
    ],
    displayMath: [
      ["$$", "$$"],
      ["\\[", "\\]"]
    ]
  }
};

export class MainPage extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      currPage: "Logic"
    };

    this.page = <Logic />;
  }

  changePage(page, e){
    this.setState({currPage:page});


  console.log(this.page);
  }

  getPage(){
      switch (this.state.currPage) {
        case "Logic":
            this.page = <Logic />
            break;
        case "Propositions":
            this.page = <Asymptotics />
            break;
        default:
            this.page = <Logic />;
    }
    return this.page;
  }

  render() {
    return (
      <MathJaxContext version={2} config={config}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <Banner />
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              boxSizing: 'border-box',
            },
          }}
          variant="permanent"
          anchor="left"
        >
          <Toolbar />
          <Divider />
          <List>
            {['Logic', 'Propositions', 'Truth Tables', 'Next'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton onClick={this.changePage.bind(this, text)}>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {['All mail', 'Trash', 'Spam'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Drawer>


        <Box
          component="main"
          sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
        >
          <Toolbar />
          
          {this.getPage()}

        </Box>
      </Box>
      </MathJaxContext>
    ); 
  }
}