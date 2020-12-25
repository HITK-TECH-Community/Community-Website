import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        flexBasis: '33.33%',
        flexShrink: 0,
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
    },
}));

export default function Faqs() {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <div style={{ margin: '2rem 0', height: '100vh' }}>
            <h1 style={{ textAlign: 'center', fontSize: '1.5rem', color: '#016795' }}>FREQUENTLY ASKED QUESTION</h1>
            <h1 style={{ fontWeight: 'bold', textAlign: 'center', color: '#1B2431' }}>Want to ask something from us?</h1>
            <div style={{ width: '65%', margin: 'auto' }} className={classes.root}>
                <Accordion style={{ margin: '1rem auto' }} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                    >

                        <h3 style={{ fontWeight: '600', fontSize: '1rem' }}>How to contact with customer service?</h3>

                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
                            maximus est, id dignissim quam.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2bh-content"
                        id="panel2bh-header"
                    >
                        <h3 style={{ fontWeight: '600', fontSize: '1rem' }}>How to delete my account?</h3>

                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus, varius pulvinar
                            diam eros in elit. Pellentesque convallis laoreet laoreet.
          </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion style={{ margin: '1rem auto' }} expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel3bh-content"
                        id="panel3bh-header"
                    >
                        <h3 style={{ fontWeight: '600', fontSize: '1rem' }}>Where is edit option on dashboard?</h3>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros,
                            vitae egestas augue. Duis vel est augue.
          </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion style={{ margin: '1rem auto' }} expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel4bh-content"
                        id="panel4bh-header"
                    >
                        <h3 style={{ fontWeight: '600', fontSize: '1rem' }}>Is there any custom pricing system?</h3>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros,
                            vitae egestas augue. Duis vel est augue.
          </Typography>
                    </AccordionDetails>
                </Accordion>
            </div>
        </div>

    );
}