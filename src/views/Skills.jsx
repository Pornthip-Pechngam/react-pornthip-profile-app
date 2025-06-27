import React from "react";
import { Box, Typography, Chip } from "@mui/material";

function Skills() {
  const skills = [
    "HTML",
    "CSS",
    "JAVASCRIPT",
    "FLUTTER",
    "DART",
    "IoT",
    "REACT",
    "DATABASE",
  ];

  return (
    <Box
      id="skills"
      sx={{
        backgroundColor: "#0D0D0D",
        color: "white",
        minHeight: "60vh",
        padding: "80px 10%",
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "flex-start",
        justifyContent: "space-between",
        gap: 4,
      }}
    >
      {/* Left: Heading */}
      <Box sx={{ minWidth: "200px", pt: 1.5 }}>
        <Typography variant="h3" sx={{ fontWeight: "bold" }}>
          MY CAPABILITIES
        </Typography>
      </Box>

      {/* Right: Description & Tags */}
      <Box sx={{ flex: 1 }}>
        <Typography
          variant="body1"
          sx={{ mb: 3, fontSize: "1.1rem", lineHeight: 1.7 }}
        >
          ดิฉันมองหาโอกาสในการเพิ่มทักษะใหม่ๆ อยู่เสมอ ทั้งการพัฒนาฟรอนต์เอนด์
          แบล็กเอนด์ การออกแบบ UX/UI ฐานข้อมูล
        </Typography>

        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
          {skills.map((skill, index) => (
            <Chip
              key={index}
              label={skill}
              variant="outlined"
              sx={{
                color: "white",
                borderColor: "white",
                fontWeight: "bold",
                px: 2,
                fontSize: "1rem",
              }}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export default Skills;
