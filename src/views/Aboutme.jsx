import React from "react";
import { Box, Typography, Button, IconButton } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import img2 from "./../assets/img2.jpg";

function Aboutme() {
  return (
    <Box
      sx={{
        backgroundColor: "#0D0D0D",
        color: "white",
        minHeight: "100vh",
        padding: "100px 10% 50px",
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        gap: 6,
      }}
    >
      {/* Left Image */}
      <Box sx={{ flex: 1, textAlign: "center" }}>
        <img
          src={img2}
          alt="about me"
          style={{
            width: "100%",
            maxWidth: "600px", // ขยายภาพ
            borderRadius: "20px", // มน
            boxShadow: "0 0 20px rgba(255, 255, 255, 0.1)", // ไม่มี border
          }}
        />
      </Box>

      {/* Right Content */}
      <Box sx={{ flex: 1, textAlign: "left" }}>
        <Typography variant="h3" sx={{ fontWeight: "bold", mb: 3 }}>
          ABOUT ME
        </Typography>

        <Typography variant="h6" sx={{ lineHeight: 1.8, mb: 3 }}>
          ดิฉันเป็นนักพัฒนาเว็บไซต์ที่กำลังมองหาโอกาสในการทำงาน
          มีพื้นฐานการศึกษาด้านระบบสารสนเทศ <br /><br />
          ชอบให้ความสำคัญกับการเรียนรู้
          เมื่อพัฒนาเว็บไซต์ มีความกระตือรือร้นและอยากรู้อยากเห็นเกี่ยวกับการแก้ปัญหาต่างๆ
          ปัจจุบันกำลังศึกษาหาความรู้เกี่ยวกับ React.js
        </Typography>

        <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#D7F35C",
              color: "black",
              fontWeight: "bold",
              px: 4,
            }}
          >
            DOWNLOAD RESUME
          </Button>
          <IconButton
            href="https://www.linkedin.com"
            target="_blank"
            sx={{ backgroundColor: "grey", color: "#D7F35C" }}
          >
            <LinkedInIcon />
          </IconButton>
          <IconButton
            href="https://github.com/Pornthip-Pechngam"
            target="_blank"
            sx={{ backgroundColor: "grey", color: "#D7F35C" }}
          >
            <GitHubIcon />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
}

export default Aboutme;
