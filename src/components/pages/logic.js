import * as React from 'react';
import Typography from '@mui/material/Typography';
import { MathJax } from 'better-react-mathjax';
import { FootnotesProvider, FootnoteRef as Ref, Footnotes } from 'react-a11y-footnotes'
import Divider from '@mui/material/Divider';

function Logic() {
    return (
        <div>
        <Typography variant="h5"> 
            Chapter 1: Logic
        </Typography>
        <Divider variant="middle" />
        <br></br>
        <Typography>
            Logic is defined as the study of "reasoning conducted according to princples of strict validity". 
            When we study logic, we are studying things that we know to be true or false and seeing how that
            impacts the framework of our world.
            <br></br><br></br>
            Practically, studying logic in  mathematical sense is what is used to correctly argue your points
            in a way that cannot be refuted. Should you want to win internet debates, or attempt to win debates
            against your partnet, a strong sense of logical flow and direction is necessary. Similarly, people
            who are good at making both logical progressions, and making false logical progressions that seem 
            legit are both good lawyers and politicians. For a computer science student, you will come to see 
            that practically, logic and proof writing is a lot like coding and algorithm design. 
            <br></br><br></br>
            Logic very much is the foundation of all of mathematics, which is why it is usually a good place
            to begin. Anything that is ever discovered or invented in math needs to first be <i>proven</i> using
            the principles taught here. Be careful about your assumptions, lest you end up like Gottlob Frege working
            on stuff that is unfortunately flawed.
        </Typography>
        <Divider variant="middle" />
        </div>
    )
}

export default Logic