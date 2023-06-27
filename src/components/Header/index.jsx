import {Stack, Typography} from "@mui/material";

export default function Header() {
  return (
    <Stack
      position="fixed"
      top={0}
      width={"100%"}
      height="100px"
      direction="row"
      alignItems="center"
      justifyContent="space-around"
      bgcolor="#121214"
    >
      <img src="/marvel1.png" alt="Logo Marvel" width={180} />
      <Typography variant="h5" color="white">
        HOME
      </Typography>
    </Stack>
  );
}
