// import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
// import CloudySnowingIcon from "@mui/icons-material/CloudySnowing";
import { Link } from "react-router-dom";
import img1 from "./../assets/img1.jpg";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Aboutme from "./Aboutme";
import Skills from "./Skills";
import Experience from "./Experience";
import Contact from "./Contact";
import { Link as ScrollLink } from "react-scroll";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Top AppBar */}
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed" sx={{ backgroundColor: "#121212" }}>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              {/* <CloudySnowingIcon sx={{ color: "white" }} /> */}
            </IconButton>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, color: "white" }}
            >
              PORNTHIP PECHNGAM
            </Typography>
            {/* <Button color="inherit" component ={Link} to="/skills">Skills</Button> */}
            {/* <Button color="inherit" component ={Link} to="/work">Work</Button> */}
            {/* <Button color="inherit" component ={Link} to="/aboutme">About</Button> */}
            {/* <Button color="inherit" component ={Link} to="/contact">Contact</Button> */}
            <ScrollLink to="aboutme" smooth={true} duration={500}>
              <Button color="inherit">About</Button>
            </ScrollLink>
            <ScrollLink to="skills" smooth={true} duration={500}>
              <Button color="inherit">Skills</Button>
            </ScrollLink>
            <ScrollLink to="work" smooth={true} duration={500}>
              <Button color="inherit">Work</Button>
            </ScrollLink>
            <ScrollLink to="contact" smooth={true} duration={500}>
              <Button color="inherit">Contact</Button>
            </ScrollLink>
          </Toolbar>
        </AppBar>
      </Box>

      {/* Content below AppBar */}
      <Box
        data-aos="fade-up"
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          alignItems: "center",
          minHeight: "100vh",
          backgroundColor: "linear-gradient(135deg, #121212 0%, #1E1E1E 100%)",
          color: "#FFFFFF",
          boxShadow: "0px 0px 30px rgba(0, 173, 181, 0.2)",
          borderRadius: "20px",
          padding: "120px 10%",
        }}
      >
        {/* Left text section */}
        <Box sx={{ flex: 1 }}>
          <Typography variant="h3" sx={{ fontWeight: "bold" }}>
            HI, I AM <br />
            PORNTHIP P.
          </Typography>
          <Typography sx={{ marginTop: 2, maxWidth: 500, fontSize: "1.1rem" }}>
            นักพัฒนาเว็บไซต์ที่มีความหลงใหลในการสร้างเว็บไซต์ที่เข้าถึงได้และเป็นมิตรกับผู้ใช้
          </Typography>

          <Box sx={{ marginTop: 4, display: "flex", gap: 2 }}>
            <ScrollLink to="contact" smooth={true} duration={500}>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#00ADB5",
                  color: "#121212",
                  "&:hover": {
                    backgroundColor: "#019CA3",
                  },
                }}
              >
                CONTACT ME
              </Button>
            </ScrollLink>

            <IconButton
              sx={{
                // backgroundColor: "#393E46",
                color: "#00ADB5",
                "&:hover": {
                  backgroundColor: "#4B525A",
                },
              }}
              href="https://www.linkedin.com"
              target="_blank"
            >
              <LinkedInIcon />
            </IconButton>
            <IconButton
              sx={{
                // backgroundColor: "#393E46",
                color: "#00ADB5",
                "&:hover": {
                  backgroundColor: "#4B525A",
                },
              }}
              href="https://github.com/Pornthip-Pechngam"
              target="_blank"
            >
              <GitHubIcon />
            </IconButton>
          </Box>
        </Box>

        {/* Right image section */}
        <Box sx={{ flex: 1, textAlign: "center", marginTop: { xs: 4, md: 0 } }}>
          <img
            src={img1}
            alt="profile"
            style={{
              width: "300px",
              height: "auto",
              borderRadius: "20px",
              boxShadow: "0 0 15px rgba(0,173,181,0.3)",
              transition: "transform 0.3s ease",
              cursor: "pointer",
              ":hover": {
                transform: "scale(1.05)",
              },
            }}
          />
        </Box>
      </Box>
      <Aboutme />
      <Skills />
      <Experience />
      <Contact />

      {showScrollTop && (
        <IconButton
          onClick={scrollToTop}
          sx={{
            position: "fixed",
            bottom: 30,
            right: 30,
            bgcolor: "#00ADB5",
            color: "#121212",
            "&:hover": {
              bgcolor: "#019CA3",
            },
          }}
        >
          <ArrowUpwardIcon />
        </IconButton>
      )}
    </>
  );
}

export default Home;
