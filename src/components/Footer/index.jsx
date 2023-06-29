import { Link, Stack, Typography } from "@mui/material";
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";

export default function () {
  return (
    <Stack
      position="fixed"
      bottom={0}
      width='100%'
      alignItems="center"
      paddingY={2}
      bgcolor="#121214"
      mt={10}
      spacing={1}
    >
      <Stack direction="row" spacing={4}>
        <Link href={"https://github.com/diegopollheim"} target="_blank">
          <BsGithub color="white" />
        </Link>
        <Link
          href={"https://www.linkedin.com/in/diego-pollheim-979a5a1a7/"}
          target="_blank"
        >
          <BsLinkedin color="white" />
        </Link>
        <Link
          href={"https://www.instagram.com/diego.pollheim/"}
          target="_blank"
        >
          <BsInstagram color="white" />
        </Link>
      </Stack>
      <Typography variant="caption" color="white">
        Developed by Diego Pollheim
      </Typography>
    </Stack>
  );
}
