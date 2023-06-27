import {Card, Stack, Typography} from "@mui/material";
import {useEffect} from "react";

export default function CardHeroe({name, img, desc}) {
  return (
    <Card sx={{pb: 15, borderRadius: 10, width: 900 / 3}} elevation={8}>
      <Stack>
        <img
          src={img}
          alt=""
          width="100%"
        />
        <Stack p={2}>
          <Typography variant="h4">{name}</Typography>
          <Typography variant="body2">{desc}</Typography>
        </Stack>
      </Stack>
    </Card>
  );
}
