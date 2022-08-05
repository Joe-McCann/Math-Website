import * as React from 'react';
import Typography from '@mui/material/Typography';
import { MathJax } from 'better-react-mathjax';
import { Example } from './pieces/example';

function Asymptotics() {
    return (
        <div>
        <Typography > 
            Hello this is the attempt     
            <MathJax hideUntilTypeset={"first"}>
            {`
              Inside a MathJax block element, one might use both Latex inline math, such
              as \\(x\\) or \\(\\frac{25x}{10} = 2^{10}\\), but then also switch
              to Latex display math, like
              \\[\\sum_{n = 100}^{1000}\\left(\\frac{10\\sqrt{n}}{n}\\right)\\]
              ... and then continue with inline math.
            `}
            </MathJax>
            
            
        </Typography>
        <Example inside={"This is now inside of an example \\(2^{10}\\)"}
        outside={"This is now outside of an example"}/>
        </div>
    )
}

export default Asymptotics