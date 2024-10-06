import { Box, Typography } from "@mui/material";


export default function Page() {
  return (
    <Box mt={5} ml={2}>
      <Typography variant={"h2"} gutterBottom>
        Home
      </Typography>
      <Box>
        <Typography variant={"h6"}>
          Home is wherever I can get under 25 seconds on the NYT mini.
        </Typography>
      </Box>
    </Box>
  );
}
