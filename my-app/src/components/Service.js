import React from "react";
import { Box, Button, Grid, makeStyles, Typography } from "@material-ui/core";
import Carousel from "react-material-ui-carousel";
import CardFeature from "./side-components/card-features";
import OnlineLearningIllustration from "../assets/photo/online-learning-illustration.png";
import Forum from "../assets/photo/forum.png";
import Workshop from "../assets/photo/workshop.png";
import JobSearch from "../assets/photo/job-opportunities.png";
import Collecting from "../assets/photo/undraw_collecting_fjjl.png";
import Review from "../assets/photo/review.png";
import Compare from "../assets/photo/compare.png";
import Lightbuld from "../assets/photo/lightbuld.png";
import Bell from "../assets/photo/bell.png";
import Folders from "../assets/photo/folders.png";
import Filter from "../assets/photo/filter.png";
import Networking from "../assets/photo/social-network.png";
import Group from "../assets/photo/group.png";

import { ReactComponent as Abstract } from "../assets/svg/undraw_abstract_x68e.svg";
import { ReactComponent as Bookworm } from "../assets/svg/undraw_book_lover_mkck.svg";
import { ReactComponent as OnlineReading } from "../assets/svg/undraw_online_reading_np7n.svg";
import { ReactComponent as CareerProgression } from "../assets/svg/undraw_career_progress_ivdb.svg";
import { ReactComponent as Connection } from "../assets/svg/undraw_connection_b38q.svg";

const serviceStyle = makeStyles((theme) => ({
  serviceHeader: {
    paddingTop: "5vh",
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  serviceHeaderImg: {
    width: "30vw",
    height: "50vh",
    [theme.breakpoints.down("md")]: {
      width: "40vw",
      height: "50vh",
    },
    [theme.breakpoints.down("sm")]: {
      width: "60vw",
      height: "max-content",
    },
  },
  btnPrimary: {
    padding: "1.5rem",
    margin: "1rem",
    [theme.breakpoints.down("sm")]: {
      width: "95vw",
    },
  },
  btnSecondary: {
    padding: "1.5rem",
    margin: "1rem",
    [theme.breakpoints.down("sm")]: {
      width: "95vw",
    },
  },
  generalFeatureList: {
    marginTop: "2rem",
    display: "flex",
    flexWrap: "wrap",
  },
  Container: {
    display: "flex",
    paddingBottom: "5vh",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "10px 10px 0 0",
  },
  contentFeatureList: {
    marginTop: "2rem",
    display: "flex",
    flexWrap: "wrap",

    [theme.breakpoints.down("sm")]: {
      width: "100%",
      justifyContent: "center",
      alignItems: "center",
    },
  },
  Content: {
    margin: "5vh 2vw 0 2vw",
  },
  btnShow: {
    margin: "5vh 0 0 0",
    padding: "1rem",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
}));

const Service = () => {
  const classes = serviceStyle();

  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Box
          className={classes.serviceHeader}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Abstract className={classes.serviceHeaderImg} />
          <Grid item xs={12} md={6} lg={6}>
            <Typography
              align="center"
              variant="h3"
              style={{ margin: "2vh 0 2vh 0" }}
            >
              Your Single Source For Education, Career Prospects, &amp;
              Networking{" "}
            </Typography>
            <Typography align="center" variant="h4">
              All features serve their own purpose in helping you to pursue your
              next profession.
            </Typography>
          </Grid>
        </Box>

        <Grid>
          <Button
            className={classes.btnPrimary}
            color="primary"
            variant="contained"
          >
            Start now
          </Button>
          <Button
            className={classes.btnSecondary}
            color="secondary"
            variant="contained"
            href="#service-header"
          >
            See all features
          </Button>
        </Grid>

        <Grid id="service-header" item xs={12} style={{ marginBottom: "2vh" }}>
          <Typography variant="h4" align="center" style={{ marginTop: "2rem" }}>
            Glaukopis Provided Features
          </Typography>
          <Grid item xs={12} className={classes.generalFeatureList}>
            <CardFeature
              title="Educational Programs"
              desc="Our online course selection has been vetted and verified to provide you with the industry’s most renowned learning materials. Our up to date programs are actively implemented and will help to give you a leading edge in your field of interest."
              img={OnlineLearningIllustration}
              btn={true}
              maxWidth={300}
              margin="0 auto 0 auto"
              href="#edu-section"
            />
            <CardFeature
              title="Job Opportunities"
              desc="Our in house bulletin boards are made to be the first stop on your employment pursuits. We offer links to job search engines, companies hiring around you, and business postings for both contract and internship availabilities."
              img={Forum}
              btn={true}
              maxWidth={300}
              margin="0 auto 0 auto"
              href="#job-section"
            />
            <CardFeature
              title="Community Hub"
              desc="Our community hub is a gateway for teachers, students, businesses, and individuals - All working, learning, and improving as one."
              img={Workshop}
              btn={true}
              maxWidth={300}
              margin="0 auto 0 auto"
              href="#com-section"
            />
            <CardFeature
              title="Hiring Workshop"
              desc="Job in mind? Strengthen your skills and ace your next job interview with ease!"
              img={JobSearch}
              btn={true}
              maxWidth={300}
              margin="0 auto 0 auto"
              href="#pro-section"
            />
          </Grid>
        </Grid>

        {/* EDUCATION SECTION */}
        <Grid
          id="edu-section"
          container
          className={classes.Container}
          style={{ backgroundColor: "#b47775" }}
        >
          <Bookworm
            xs={12}
            md={6}
            lg={4}
            style={{ marginTop: "10vh" }}
            className="img"
          />
          <Grid item xs={10} md={4} lg={4} className={classes.Content}>
            <Typography style={{ marginBottom: "0.5rem" }} variant="h2">
              Educational Search
            </Typography>

            <Typography variant="h4">
              Glaukopis Wisdom archives specialized resources to fit your
              personal needs – Whether it’s a new degree, a new profession, or a
              new mentor, our courses and upskilling curriculum are here for
              you.
            </Typography>
            <Grid item xs={12}>
              <Grid container className={classes.contentFeatureList}>
                <Carousel autoPlay={false}>
                  <CardFeature
                    title="Filter your category "
                    desc="Choose your topic, explore your professional field and find out where your talents will take you next."
                    img={Filter}
                    btn={false}
                    maxWidth={500}
                    margin="0 2vw 0 0"
                  />
                  <CardFeature
                    title="Save and Compare"
                    desc="Compare course options and filter through, duration of course, price of course, program certifications, and degree upon completion. "
                    img={Compare}
                    btn={false}
                    maxWidth={500}
                    margin="0 2vw 0 0"
                  />
                  <CardFeature
                    title="General Review"
                    desc="Our users and Glaukopis Wisdom analysts give you real time feedback and expert opinions on their own experiences in addition to what they have learned."
                    img={Review}
                    btn={false}
                    maxWidth={500}
                    margin="0 2vw 0 0"
                  />
                </Carousel>
              </Grid>
            </Grid>
            <Button
              className={classes.btnShow}
              color="primary"
              variant="contained"
            >
              Search our Programs Now
            </Button>
          </Grid>
        </Grid>

        {/* JOB SEARCH SECTION */}
        <Grid id="job-section" container className={classes.Container}>
          <Grid item xs={10} md={4} lg={4} className={classes.Content}>
            <Typography variant="h4">
              Similar to traditional job searches, we also offer a precise range
              of options - more carefully related to your field.
            </Typography>
            <Grid item xs={12}>
              <Grid container className={classes.contentFeatureList}>
                <Carousel autoPlay={false}>
                  <CardFeature
                    title="Highlighted Section"
                    desc="We examined high value job postings - scanned for important details - and showcased renowned career opportunities within our occupational classifieds."
                    img={Lightbuld}
                    btn={false}
                    maxWidth={500}
                    margin="0 2vw 0 0"
                  />
                  <CardFeature
                    title="Customize Notifications"
                    desc="We provide real time notifications regarding updated job posts based upon your own personal interests."
                    img={Bell}
                    btn={false}
                    maxWidth={500}
                    margin="0 2vw 0 0"
                  />
                  <CardFeature
                    title="Customizable File Upload"
                    desc="Instead of writing and customizing your resume, cover letter, and interview related answer repeatedly - We offer users who are signed in access to a stored folder of multiple resume copies, cover letters, along with their own predetermined hiring responses for greater ease of use."
                    img={Folders}
                    btn={false}
                    maxWidth={500}
                    margin="0 2vw 0 0"
                  />
                </Carousel>
              </Grid>
            </Grid>
            <Button
              className={classes.btnShow}
              color="primary"
              variant="contained"
            >
              Start your job search now
            </Button>
          </Grid>
          <OnlineReading
            xs={12}
            md={6}
            lg={4}
            style={{ marginTop: "10vh" }}
            className="img"
          />
        </Grid>

        {/* Community hub section */}
        <Grid
          id="com-section"
          container
          className={classes.Container}
          style={{ backgroundColor: "#b47775" }}
        >
          <Connection
            xs={12}
            md={6}
            lg={4}
            style={{ marginTop: "10vh" }}
            className="img"
          />
          <Grid item xs={10} md={4} lg={4} className={classes.Content}>
            <Typography style={{ marginBottom: "0.5rem" }} variant="h2">
              Community Hub
            </Typography>

            <Typography variant="h4">
              Our community hub is a gateway for teachers, students, businesses,
              and individuals - All working, learning, and improving as one.
            </Typography>
            <Grid item xs={12}>
              <Grid container className={classes.contentFeatureList}>
                <Carousel autoPlay={false}>
                  <CardFeature
                    title=" Groups That Represent You "
                    desc="Create your own group, or find one that represent you - start inviting friends
                     or members to share your current knowledge, past experiences,
                      or be there to help other users in our public forum."
                    img={Group}
                    btn={false}
                    maxWidth={500}
                    margin="0 2vw 0 0"
                  />
                  <CardFeature
                    title="Customize Your Interest"
                    desc="Choose from our vast array of forum topics, in order for us to match you with groups or individuals that have similar interests. "
                    img={Filter}
                    btn={false}
                    maxWidth={500}
                    margin="0 2vw 0 0"
                  />
                  <CardFeature
                    title="Event Hub"
                    desc="We also have a dedicated section within the Community Hub known as the
                    Event Hub,
                    where you can select your location of interest for us to match any networking 
                    event or workshop near you to join remotely or on-site."
                    img={Networking}
                    btn={false}
                    maxWidth={500}
                    margin="0 2vw 0 0"
                  />
                </Carousel>
              </Grid>
            </Grid>
            <Button
              className={classes.btnShow}
              color="primary"
              variant="contained"
            >
              Join our community now
            </Button>
          </Grid>
        </Grid>

        {/* Professional Workshop Section */}
        <Grid id="pro-section" container className={classes.Container}>
          <Grid item xs={10} md={4} lg={4} className={classes.Content}>
            <Typography style={{ marginBottom: "0.5rem" }} variant="h2">
              Hiring Workshop
            </Typography>

            <Typography variant="h4">
              Job in mind? Strengthen your skills and ace your next job
              interview with ease!
            </Typography>
            <Grid item xs={12}>
              <Typography variant="h4" style={{ marginTop: "2rem" }}>
                Professional Workshop Features
              </Typography>
              <Grid container className={classes.contentFeatureList}>
                <Carousel autoPlay={false}>
                  <CardFeature
                    title="Example Gallery"
                    desc="Collection of resume samples, cover letters, along with generalized interview questions and answers.
                     All gathered from around the internet so that you may better prepare for and perfect your first impression."
                    img={Collecting}
                    btn={false}
                    maxWidth={500}
                    margin="0 2vw 0 0"
                  />
                  <CardFeature
                    title="Resume Assessment"
                    desc="We provide links to resume assessment sites which we believe are a
                     reputable source for you to build the perfect eye catching resume
                      - ensuring the highest success rates when job searching."
                    img={Forum}
                    btn={false}
                    maxWidth={500}
                    margin="0 2vw 0 0"
                  />
                  <CardFeature
                    title="Interview Skills"
                    desc="Whether it's a general question about you or a practical question about your profession,
                     we documented the most intelligent responses for each. Study our interview guidelines here."
                    img={Workshop}
                    btn={false}
                    maxWidth={500}
                    margin="0 2vw 0 0"
                  />
                </Carousel>
              </Grid>
            </Grid>
            <Button
              className={classes.btnShow}
              color="primary"
              variant="contained"
            >
              Get youself ready for the hiring process
            </Button>
          </Grid>
          <CareerProgression
            xs={12}
            md={6}
            lg={4}
            style={{ marginTop: "10vh" }}
            className="img"
          />
        </Grid>
      </Box>
    </>
  );
};

export default Service;
