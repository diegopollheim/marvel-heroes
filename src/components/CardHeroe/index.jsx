import {Card, Link, Stack, Typography} from "@mui/material";
import {useState} from "react";

export default function CardHeroe({heroi}) {
  const [elevation, setElevation] = useState(4);

  return (
    <Card
      component={Link}
      href={`/heroeInfo/${heroi.id}`}
      onMouseOver={() => setElevation(24)}
      onMouseLeave={() => setElevation(4)}
      sx={{cursor: "pointer", pb: 15, borderRadius: 8, width: 1200 / 4, height: 470}}
      elevation={elevation}
    >
      <Stack>
        <img
          src={heroi.thumbnail.path + "." + heroi.thumbnail.extension}
          alt=""
          width="100%"
          height="30%"
        />
        <Stack p={2}>
          <Typography variant="h6">{heroi.name}</Typography>
          <Typography variant="body2">{heroi.description}</Typography>
        </Stack>
      </Stack>
    </Card>
  );
}
