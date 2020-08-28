import React from "react";
import PropTypes from "prop-types";

import {
  makeStyles,
  Button,
  Grid,
  Typography,
  Box,
  Link,
  withStyles,
  Accordion ,
  AccordionSummary ,
  AccordionDetails ,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const styles = (theme) => ({
  root: {},
  heading: {
    fontSize: theme.typography.pxToRem(18),
    fontWeight: theme.typography.fontWeightBold,
  },
  
});

const FAQ = (props) => {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Typography variant="h3" gutterBottom align="center">
        Frequently Asked Question
      </Typography>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>Who can use Glaukopis Wisdom?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography >
            Anyone can use our application; our users can range from graduate
            student to mother who is returning back to work, employee returning
            from long-term sickness or suffer from Covid-19, and more persona
            who share the same condition all welcome to use our application as a
            gateway to kick start their career.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>
            Can Glaukopis help me find a job even though I have a year gap in my
            resume?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            The answer is Yes, we can - Our dedicated online learning resources
            combined with job search engine provide you with a wide range of
            opportunity to start your career again. If you do not find what you
            need in our searches, then jump over to our community hub to search
            for help, or guidance as it would help you on your job hunt and
            benefit our community growth as well.
          </Typography>
        </AccordionDetails>
      </Accordion>


      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>
            I am a recruiter, how may I contribute to Glaukopis to find more
            promising candidate for my company or client?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            At the early stage of our web application, we provide job posting
            for recruiter to scout for potential employees that interest you.
            Aside from our dedicated job board, recruiter can post hiring
            events, job posts, networking events that they are participating on
            our community hub, as our community hub will grow and be filled with
            passionate job seekers. Another features that recruiter can use to
            search for potential employees, is by checking users "trophy shelve"
            where users can use to showcase their certificates and achievements
            for all recruiters.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>
            Is Glaukopis Wisdom a free to use application?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Our application is 100% free for all users to use, and we plan to
            keep it this way for the longest duration possible. Then how can
            Glaukopis Wisdom make money? Our solution would be to advertise
            educational or job-related ad to earn revenue, or we could start
            selling merchandise to earn some revenue, but our statement is clear
            - To help people in their career path, not exploit them.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

FAQ.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FAQ);
