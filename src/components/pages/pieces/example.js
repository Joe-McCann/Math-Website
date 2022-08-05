import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { MathJax } from 'better-react-mathjax';

export class Example extends React.Component{
  render() {
    return (<div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>
            <MathJax hideUntilTypeset={"first"}>
                Example: {this.props.outside}
            </MathJax>
        </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <MathJax hideUntilTypeset={"first"}>
                Solution: {this.props.inside}
            </MathJax>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>)
  };
}
