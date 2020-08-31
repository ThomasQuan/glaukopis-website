import React from "react";
import Online_Learning from "../assets/photo/online-learning.jpg";
import CardFeature from "./side-components/card-features";
import {
  makeStyles,
  Button,
  Grid,
  Typography,
  Box,
  Link,
} from "@material-ui/core";
import { ABOUT, SERVICE } from "../controller/nav-controller";

import OnlineLearningIllustration from "../assets/photo/online-learning-illustration.png";
import SubwayLine from "../assets/photo/subway-lines.png";
import Chalkboard from "../assets/photo/chalkboard.jpg";

import CommunityHub from "../assets/photo/united-nations-covid-19-response.jpg";
import Forum from "../assets/photo/forum.png";

import Workshop from "../assets/photo/workshop.png";
import JobSearch from "../assets/photo/job-opportunities.png";
import TextBook from "../assets/photo/textbook.png";
import Youtube from "../assets/photo/youtube-icon-logo-png-transparent.png";
import Harvard from "../assets/photo/harvard-logo-transparent.png";
import GoogleScholar from "../assets/photo/google-scholar.png";
import Coursera from "../assets/photo/coursera-logo-black-transparent.png";
import Indeed from "../assets/photo/indeed-logo.png";
import Glassdoor from "../assets/photo/glassdoor-logo.png";
import LinkedIn from "../assets/photo/linkedin.png";

const homeStyles = makeStyles((theme) => ({
  root: { flexGrow: 1 },
  proposition: {
    height: "70vh",
    background:
      "linear-gradient(248.24deg, rgba(0, 0, 0, 0.473434) 0.31%, rgba(0, 0, 0, 0.441699) 20.56%, rgba(0, 0, 0, 0.437494) 77.15%, rgba(0, 0, 0, 0.447353) 99.8%, rgba(10, 10, 10, 0) 99.96%, rgba(126, 126, 126, 0) 99.97%, rgba(0, 0, 0, 0.5) 99.98%), url(" +
      Online_Learning +
      ")",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "40% 50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
  },

  startButton: {
    backgroundColor: "#455954",
  },
  featureList: {
    marginTop: "2rem",
    display: "flex",
    flexWrap: "wrap",
  },
  imgBrand: {

    width: "3.5rem",
    height: "3.5rem",
    objectFit: 'contain',
    margin: "auto",
    [theme.breakpoints.down("sm")]: {
      width: "2.5rem",
      height: "2.5rem",
      margin: '0 2vw 0 2vw'
    },
  },
  resourcesListContainer: {
    background:
      "linear-gradient(248.24deg, rgba(0, 0, 0, 0.473434) 0.31%, rgba(0, 0, 0, 0.441699) 20.56%, rgba(0, 0, 0, 0.437494) 77.15%, rgba(0, 0, 0, 0.447353) 99.8%, rgba(10, 10, 10, 0) 99.96%, rgba(126, 126, 126, 0) 99.97%, rgba(0, 0, 0, 0.5) 99.98%), url(" +
      SubwayLine +
      ")",
    width: "100vw",
    height: "auto",
    backgroundRepeat: "repeat",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: "5vh auto 5vh auto",
  },
  resourcesList: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    margin: "2rem auto 0 auto",
    width: "60vw",
    [theme.breakpoints.down("sm")]: {
      width: "80vw",
    },
  },
  resourcesPaper: {

    borderRadius: '5px',
    backgroundColor: "#ffffffc4",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    width: '60vw',
    height: 'auto',
    [theme.breakpoints.down("md")]: {
      width: "100vw",
    },
  },
  CommunityHub: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "2rem",
  },
  comDetail: {
    margin: "2rem 2vw 2rem 20vw", paddingLeft: "1rem",
    height: 'auto',
    [theme.breakpoints.down("md")]: {
      margin: "0"
    },
  },
  communityImg: {
    width: '40vw',
    height: "60vh",
    objectFit: "contain",
    marginTop: "auto",

    [theme.breakpoints.down("sm")]: {
      width: "50vw",
      height: "auto",
      objectFit: "cover",

    },
    [theme.breakpoints.down("xs")]: {
      width: "100vw",
      height: "20vh",
      objectFit: "cover",

    },
  },
  nextStep: {
    background:
      "linear-gradient(248.24deg, rgba(0, 0, 0, 0.473434) 0.31%, rgba(0, 0, 0, 0.441699) 20.56%, rgba(0, 0, 0, 0.437494) 77.15%, rgba(0, 0, 0, 0.447353) 99.8%, rgba(10, 10, 10, 0) 99.96%, rgba(126, 126, 126, 0) 99.97%, rgba(0, 0, 0, 0.5) 99.98%), url(" +
      Chalkboard +
      ")",

    backgroundRepeat: "repeat",
    display: "flex",

    justifyContent: "center",
    color: "white",
  },
  nextStepHeader: {
    borderBottom: 'solid white 5px'
  },
  nextStepContent: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '5vh',
    margin: "4vh auto 4vh auto"


  },
  buttonContainer: {
    marginTop: '5vh',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around'

  },
  btnCont: {
    width: "100vw", height: '4rem',
    [theme.breakpoints.down("sm")]: {
      width: "100vw",
    },
  },
  footer: {
    height: '50vh',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginTop: '5rem'
  },
  logo: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 'auto'
  },

}));
const Home = (props) => {
  const classes = homeStyles();
  const setParentDisplay = (value) => {
    props.setDisplay(value);
  };
  return (
    <>
      <div>
        {/* VALUE PROPOSITION */}
        <Grid item xs={12} className={classes.proposition}>
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography variant="h1" align="center">
              Perfect your professional portfolio
              </Typography>
            <Typography
              variant="h4"
              align="center"

              style={{ marginTop: "1rem", color: "#d4d4d4" }}
            >
              Your curated library of learning materials, job postings, and dedicated networking communities - All within a single sources!

            </Typography>
            <Button
              style={{ marginTop: "2rem", fontSize: "1.5rem" }}
              variant="contained"
            >
              Start now
            </Button>
          </Grid>
        </Grid>

        {/* LIST FEATURE PROVIDED */}
        <Grid item xs={12}>
          <Typography variant="h4" align="center" style={{ marginTop: "2rem" }}>
            Provided Features
          </Typography>
          <Grid item xs={12} className={classes.featureList}>
            <CardFeature
              title="Educational Programs"
              desc="Our online course selection has been vetted and verified to provide you with the industry’s most renowned learning materials. Our up to date programs are actively implemented and will help to give you a leading edge in your field of interest."
              img={OnlineLearningIllustration}
              btn={false}
              maxWidth={300}
              margin="0 auto 0 auto"
            />
            <CardFeature
              title="Job Opportunities"
              desc="Our in house bulletin boards are made to be the first stop on your employment pursuits. We offer links to job search engines, companies hiring around you, and business postings for both contract and internship availabilities."
              img={Forum}
              btn={false}
              maxWidth={300}
              margin="0 auto 0 auto"
            />
            <CardFeature
              title="Community Hub"
              desc="Our community hub is a gateway for teachers, students, businesses, and individuals - All working, learning, and improving as one."
              img={Workshop}
              btn={false}
              maxWidth={300}
              margin="0 auto 0 auto"
            />
            <CardFeature
              title="Hiring Workshop"
              desc="Job in mind? Strengthen your skills and ace your next job interview with ease!"
              img={JobSearch}
              btn={false}
              maxWidth={300}
              margin="0 auto 0 auto"
            />
          </Grid>
        </Grid>

        {/* FLEX ON THE SEARCH ENGINEE */}
        <Grid item xs={12} md={12} className={classes.resourcesListContainer}>
          <Box height='80%' className={classes.resourcesPaper}>
            <Typography gutterBottom variant="h3" style={{ fontWeight: 'normal' }} align="center">
              We search around the internet to find the best resources for you to improve upon your next career path.
            </Typography>
            <Box className={classes.resourcesList}>
              <img
                className={classes.imgBrand}
                alt="education source"
                src={TextBook}
              />
              <img
                className={classes.imgBrand}
                alt="education source"
                src={Youtube}
              />
              <img
                className={classes.imgBrand}
                alt="education source"
                src={Coursera}
              />
              <img
                className={classes.imgBrand}
                alt="education source"
                src={Harvard}
              />
              <img
                className={classes.imgBrand}
                alt="education source"
                src={GoogleScholar}
              />
              <img
                className={classes.imgBrand}
                alt="education source"
                src={Indeed}
              />
              <img
                className={classes.imgBrand}
                alt="education source"
                src={Glassdoor}
              />
              <img
                className={classes.imgBrand}
                alt="education source"
                src={LinkedIn}
              />
            </Box>
            <Typography variant="h4">
              + dozen more resources to come
            </Typography>


            <Button
              style={{ marginTop: "2rem", fontSize: "1.5rem" }}
              variant="contained"
              color='primary'
            >
              Start now
            </Button>
          </Box>
        </Grid>

        {/* Community Hub explain */}
        <Grid container  >
          <Grid
            item
            xs={12}
            lg={3}
            sm={6}
            md={6}
            className={classes.comDetail}
          >
            <Typography variant="h3">
              A fully integrated suite of learning materials and job resources
              from multiple platforms combinded
            </Typography>
            <Typography variant="h4" style={{ marginTop: "2rem" }}>
              We bring together everything that’s required for you to land your next job.
              From educational resources to improving your career skills, plus a job search engine,
              as well as a professional hiring workshop.
            </Typography>
            <Typography variant="h4" style={{ margin: "2rem 0 2rem 0" }}>
              We also provide a <Link color='secondary'>community hub</Link> for users to interact with, learn from,
              and solve problems alongside industry professionals.
            </Typography>
            <Button variant="contained" color="primary" style={{ marginBottom: '2vh' }}>
              Explore now
            </Button>
          </Grid>
          <Grid item xs={12} sm={6} lg={6} md={5}  >
            <img
              className={classes.communityImg}
              src={CommunityHub}
              alt="united covid 19 unsplash"
            ></img>
          </Grid>
        </Grid>


        <Grid container spacing={2} className={classes.nextStep}>
          <Grid className={classes.nextStepHeader} item xs={12} lg={12}> <Typography variant='h1' align='center' style={{ marginTop: '5vh', marginBottom: '5vh' }}>How do I know Glaukopis Wisdom is for me? </Typography></Grid>
          <Grid item xs={10} md={4} className={classes.nextStepContent} >
            <Typography variant="h3" style={{ color: "#d8b26e" }}> Has COVID-19 impacted your career directly, have you lost your job,
             lost your client base, or are unsure about your professional stability? </Typography>
            <Typography variant="h4" style={{ marginTop: "2rem", }}>
              If so, you are not alone, thousands of others are just as confused and concerned as you.
              Thankfully Glaukopis Wisdom is here to help - start today and begin the journey to securing your
              employment status by becoming the best candidate possible for the position of your choosing. Your new career - starts here!
            </Typography>
            <Grid item xs={12} className={classes.buttonContainer}>
              <Button className={classes.btnCont} variant="contained" color="secondary">
                Start now
              </Button>

            </Grid>
          </Grid>

          <Grid item xs={10} md={5} className={classes.nextStepContent} >
            <Typography variant="h3" style={{ color: "#d8b26e" }}>
              Do you feel like you reached your goals at your current position?
              Getting a bit tired of the “same old same old”. Been at the same job so long and just don’t know how to start over?
            </Typography>
            <Typography variant="h4" style={{ marginTop: "2rem" }}>
              Then you are exactly where you need to be. Here at Glaukopis Wisdom we will help you target and achieve your new goals.
              It is never too late to start learning! We will help you find what you are looking for,
              what skills are needed to take you there, and map your ambitions into an actionable plan of success.
              Take everything you have learned so far, and we’ll help you make it bigger and better than ever before!
            </Typography>
            <Grid item xs={12} className={classes.buttonContainer}>
              <Button className={classes.btnCont} variant="contained" color="secondary">
                Start now
              </Button>

            </Grid>
          </Grid>


          <Grid item xs={10} md={4} className={classes.nextStepContent} >
            <Typography variant="h3" style={{ color: "#d8b26e" }}> Just received your degree, completed that course, and was all lined up to hit the job market running? </Typography>
            <Typography variant="h4" style={{ marginTop: "2rem" }}>
              So were we! But as well all know, suddenly it’s not the best time to be dropping off resumes.
              That’s why we created an online job market for you. Make a profile, upload your credentials,
              and start searching our Glaokopis Community hub now. Use our network and make Glaukopis Wisdom your next online job fair!
            </Typography>
            <Grid item xs={12} className={classes.buttonContainer}>
              <Button className={classes.btnCont} variant="contained" color="secondary">
                Start now
              </Button>
              <Typography variant='h3' gutterBottom >or</Typography>

              <Button className={classes.btnCont} onClick={() => setParentDisplay(SERVICE)} variant="contained" color="primary" >
                Explore our services more
              </Button>
            </Grid>
          </Grid>


          
        </Grid>


      </div>
    </>
  );
};
export default Home;
