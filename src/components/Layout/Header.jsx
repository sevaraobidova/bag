import * as React from "react";
import { useState } from "react";
import {
  Container,
  styled,
  Typography,
  Toolbar,
  CssBaseline,
  Box,
  AppBar,
  Button,
} from "@mui/material";
import { Search, Menu as MenuIcon } from "@mui/icons-material"; // Renamed Menu to MenuIcon
import CloseIcon from "@mui/icons-material/Close";
import logo from "../../assets/logo.png";

const drawerWidth = 240;
const navItems = ["Home", "Feature", "About", "Product"];

const StyledToolBar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

export default function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <CssBaseline />
      <AppBar sx={{ backgroundColor: "transparent", boxShadow: "none" }}>
        <Container maxWidth="lg">
          <StyledToolBar>
            <img
              src={logo}
              alt="Logo"
              style={{ height: "40px", marginRight: "10px" }}
            />
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "2rem",
              }}
            >
              {navItems.map((item) => (
                <Typography
                  variant="body1"
                  color="secondary"
                  key={item}
                  sx={{
                    display: { xs: "none", sm: "flex" },
                    cursor:
                      "pointer                                                      ",
                  }}
                >
                  {item}
                </Typography>
              ))}
              <Button
                variant="contained"
                color="primary"
                sx={{ display: { xs: "none", sm: "flex" } }}
              >
                {" "}
                Shop now
              </Button>
              <MenuIcon
                sx={{ display: { xs: "block", sm: "none" } }}
                onClick={toggleVisibility}
              />
            </Box>

            {/* responsive navbar */}

            {isVisible ? (
              <Box
                sx={{
                  display: { xs: "block", sm: "none" },
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "2rem",
                  position: "absolute",
                  right: "0",
                  top: "10%",
                  backgroundColor: "rgba(245, 155, 0, 1)",
                  padding: "40px 30px",
                }}
              >
                {navItems.map((item) => (
                  <Typography
                    variant="body1"
                    color="secondary"
                    key={item}
                    sx={{
                      display: "flex",
                      cursor:
                        "pointer                                                      ",
                    }}
                  >
                    {item}
                  </Typography>
                ))}
                <Button variant="contained" color="primary">
                  {" "}
                  Shop now
                </Button>
                <CloseIcon
                  onClick={toggleVisibility}
                  sx={{ position: "absolute", bottom: 2 }}
                />
              </Box>
            ) : (
              <Box
                sx={{
                  display: { xs: "none", sm: "none" },
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "2rem",
                }}
              >
                {navItems.map((item) => (
                  <Typography
                    variant="body1"
                    color="secondary"
                    key={item}
                    sx={{
                      display: "flex",
                      cursor:
                        "pointer                                                      ",
                    }}
                  >
                    {item}
                  </Typography>
                ))}
                <Button variant="contained" color="primary">
                  {" "}
                  Shop now
                </Button>
              </Box>
            )}
          </StyledToolBar>
        </Container>
      </AppBar>
    </div>
  );
}
