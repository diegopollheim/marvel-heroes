import { useAppContext } from "@/contexts/AppProvider";
import { Card, Link, Paper, Stack, TextField, Typography } from "@mui/material";

export default function Header() {
  const { searchHeroe } = useAppContext();

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

      <Paper elevation={4} sx={{ p: 1, width: "40%" }}>
        <TextField
          fullWidth
          size="small"
          label="Pesquisar"
          onChange={(e) => searchHeroe(e.target.value)}
          color="success"
        />
      </Paper>
      <Typography component={Link} href="/" variant="h6" color="white">
        HOME
      </Typography>
    </Stack>
  );
}
