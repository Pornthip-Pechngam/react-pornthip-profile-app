import React from "react";
import { Box, Typography } from "@mui/material";

function Experience() {
  return (
    <Box sx={{ bgcolor: "#000", color: "#fff", minHeight: "100vh", px: 5, py: 6 }}>
      {/* กล่องหลัก: ซ้าย = หัวข้อ, ขวา = รายละเอียด */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 6,
        }}
      >
        {/* ซ้าย: หัวข้อ */}
        <Box sx={{ minWidth: "200px", flexShrink: 0 }}>
          <Typography variant="h3" sx={{ fontWeight: "bold" }}>
            MY EXPERIENCE
          </Typography>
        </Box>

        {/* ขวา: รายละเอียดงาน */}
        <Box sx={{ flex: 1 }}>
          {/* Freelance Developer */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              mb: 6,
              flexDirection: { xs: "column", md: "row" },
            }}
          >
            <Box>
              <Typography variant="h5" sx={{ fontWeight: "medium", mb: 1 }}>
                Freelance Developer
              </Typography>
              <Typography variant="body1" sx={{ color: "#ccc", mb: 1 }}>
                พัฒนาและปรับปรุงส่วนติดต่อผู้ใช้สำหรับเว็บแอปพลิเคชันโดยใช้ React.js
              </Typography>
              <Typography variant="body1" sx={{ color: "#ccc", mb: 1 }}>
                ทำงานร่วมกับทีมออกแบบ UX/UI เพื่อสร้างประสบการณ์ผู้ใช้ที่น่าประทับใจ
              </Typography>
              <Typography variant="body1" sx={{ color: "#ccc", mb: 1 }}>
                ปรับปรุงความเร็วในการโหลดเว็บไซต์ด้วยเทคนิคการเพิ่มประสิทธิภาพต่างๆ
              </Typography>
              <Typography variant="body1" sx={{ color: "#ccc" }}>
                ร่วมพัฒนาและดูแลโครงสร้างคอมโพเนนต์ภายในองค์กร
              </Typography>
            </Box>
            <Box
              sx={{
                mt: { xs: 2, md: 0 },
                minWidth: "180px",
                textAlign: { xs: "left", md: "right" },
              }}
            >
              <Typography variant="body2" sx={{ color: "#888" }}>
                Nov 2023 — Present
              </Typography>
            </Box>
          </Box>

          {/* Front-End Intern */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: { xs: "column", md: "row" },
            }}
          >
            <Box>
              <Typography variant="h5" sx={{ fontWeight: "medium", mb: 1 }}>
                Front-End Intern
              </Typography>
              <Typography variant="body1" sx={{ color: "#ccc", mb: 1 }}>
                พัฒนาเว็บไซต์ลูกค้าโดยใช้ HTML, CSS และ JavaScript
              </Typography>
              <Typography variant="body1" sx={{ color: "#ccc", mb: 1 }}>
                ช่วยปรับปรุงการเข้าถึง (Accessibility) ของเว็บไซต์ให้สอดคล้องกับมาตรฐาน WCAG
              </Typography>
              <Typography variant="body1" sx={{ color: "#ccc" }}>
                ทำงานร่วมกับทีมแบ็คเอนด์เพื่อเชื่อมต่อ API
              </Typography>
            </Box>
            <Box
              sx={{
                mt: { xs: 2, md: 0 },
                minWidth: "180px",
                textAlign: { xs: "left", md: "right" },
              }}
            >
              <Typography variant="body2" sx={{ color: "#888" }}>
                Sep 2023 — Nov 2023
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Experience;
