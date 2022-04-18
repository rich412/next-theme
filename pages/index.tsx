import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import type { NextPage } from "next";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const Home: NextPage = () => {
  const { theme, resolvedTheme, setTheme } = useTheme();
  const onChangeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "background.default",
        color: "text.primary",
        p: 3,
      }}
    >
      <Box
        sx={{
          width: ["100%", "60%", "30%"],
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Stack direction="column" sx={{ width: "100%" }} gap={2}>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography
              variant="h5"
              sx={{ color: "primary.main", fontWeight: 600 }}
            >
              Yummy House
            </Typography>
            {resolvedTheme === "dark" ? (
              <LightModeIcon sx={{ color: "#fff" }} onClick={onChangeTheme} />
            ) : (
              <DarkModeIcon sx={{ color: "#000" }} onClick={onChangeTheme} />
            )}
          </Box>
          <TextField id="id" label="ID" defaultValue="" />
          <Stack direction="column" sx={{ width: "100%" }}>
            <TextField
              id="password"
              label="Password"
              type="password"
              defaultValue=""
            />
            <Box>
              <FormControlLabel
                control={<Checkbox />}
                label="Keep me signed in"
              />
            </Box>
          </Stack>
        </Stack>
        <Stack direction="column" sx={{ width: "100%" }} gap={1}>
          <Button size="large" variant="contained">
            Sign in
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default Home;
