import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
// import CloudySnowingIcon from "@mui/icons-material/CloudySnowing";
import { Link } from "react-router-dom";

import img1 from "./../assets/img1.jpg"; // ตรวจสอบให้แน่ใจว่าไฟล์นี้มีจริง

import GitHubIcon from '@mui/icons-material/GitHub';

import LinkedInIcon from '@mui/icons-material/LinkedIn';


function Home() {
  return (
    <>
      {/* Top AppBar */}
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed" sx={{ backgroundColor: "black" }}>
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
            <Button color="inherit" component ={Link} to="/skills">Skills</Button>
            <Button color="inherit" component ={Link} to="/work">Work</Button>
            <Button color="inherit" component ={Link} to="/aboutme">About</Button>
            <Button color="inherit" component ={Link} to="/contact">Contact</Button>
          </Toolbar>
        </AppBar>
      </Box>

      {/* Content below AppBar */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          alignItems: "center",
          minHeight: "100vh",
          backgroundColor: "#0D0D0D",
          color: "white",
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
            <Button
              variant="contained"
              sx={{ backgroundColor: "#D7F35C", color: "black" }}
            >
              CONTACT ME
            </Button>
            
            <IconButton
              sx={{ backgroundColor: "grey", color: "#D7F35C" }}
              href="https://www.linkedin.com"
              target="_blank"
            >
              <LinkedInIcon />
            </IconButton>
            <IconButton
              sx={{ backgroundColor: "grey", color: "#D7F35C" }}
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
              boxShadow: "0 0 15px rgba(255,255,255,0.1)",
            }}
          />
        </Box>
      </Box>
    </>
  );
}

export default Home;
