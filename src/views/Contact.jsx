import React from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  IconButton,
} from "@mui/material";
import { Link } from "react-router-dom";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";

function Contact() {
  return (
    <Box sx={{ bgcolor: "#000", color: "#fff", minHeight: "100vh", px: 4, py: 6 }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 6,
        }}
      >
        {/* LEFT COLUMN */}
        <Box sx={{ flex: 1 }}>
          <Typography variant="h3" sx={{ fontWeight: "bold", mb: 3 }}>
            LET’S CONNECT
          </Typography>

          <Typography sx={{ mb: 1, color: "#ccc", fontSize: 18 }}>
            Say hello at{" "}
            <Box component="span" sx={{ textDecoration: "underline", color: "#D8F55D" }}>
              unpball@gmail.com
            </Box>
          </Typography>

          <Typography sx={{ mb: 4, color: "#ccc", fontSize: 18 }}>
            For more info, here's my{" "}
            <Box component="span" sx={{ textDecoration: "underline", color: "#D8F55D" }}>
              resume
            </Box>
          </Typography>

          <Box sx={{ display: "flex", gap: 2, mb: 8 }}>
            <IconButton sx={{ color: "#D8F55D" }}>
              <LinkedInIcon fontSize="large" />
            </IconButton>
            <IconButton sx={{ backgroundColor: "black", color: "#D7F35C" }}
              href="https://github.com/Pornthip-Pechngam"
              target="_blank">
              <GitHubIcon fontSize="large" />
            </IconButton>
            <IconButton sx={{ color: "#D8F55D" }}>
              <XIcon fontSize="large" />
            </IconButton>
            <IconButton sx={{ color: "#D8F55D" }}>
              <InstagramIcon fontSize="large" />
            </IconButton>
          </Box>

          <Typography sx={{ color: "#999", fontSize: 14 }}>
            © 2025 Pornthip Pechngam
          </Typography>
        </Box>

        {/* RIGHT COLUMN - FORM */}
        <Box sx={{ flex: 1 }}>
          <TextField
            fullWidth
            variant="filled"
            label="Name"
            sx={{ mb: 2, bgcolor: "#111", input: { color: "#fff" }, label: { color: "#bbb" } }}
          />
          <TextField
            fullWidth
            variant="filled"
            label="Email"
            sx={{ mb: 2, bgcolor: "#111", input: { color: "#fff" }, label: { color: "#bbb" } }}
          />
          <TextField
            fullWidth
            variant="filled"
            label="Subject"
            sx={{ mb: 2, bgcolor: "#111", input: { color: "#fff" }, label: { color: "#bbb" } }}
          />
          <TextField
            fullWidth
            multiline
            minRows={4}
            variant="filled"
            label="Message"
            sx={{ mb: 4, bgcolor: "#111", input: { color: "#fff" }, label: { color: "#bbb" } }}
          />
          <Button
            variant="contained"
            sx={{
              bgcolor: "#D8F55D",
              color: "#000",
              borderRadius: "999px",
              fontWeight: "bold",
              px: 5,
              py: 1.5,
              "&:hover": {
                bgcolor: "#cde858",
              },
            }}
          >
            SUBMIT
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default Contact;
