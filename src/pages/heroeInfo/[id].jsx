import {Box, Stack, Typography} from "@mui/material";
import {useRouter} from "next/router";
import useSWR from "swr";

export default function HeroeInfo() {
  const route = useRouter();
  const {data: heroi} = useSWR(route.query.id ? `/api/marvel/heroe/${route.query.id}` : null);
  return (
    <Stack mt={40} alignItems="center">
      <Stack direction={"row"} sx={{border: "2px dashed #000", borderRadius: 10, p: 3}} width="60%">
        <Box
          sx={{
            flex:1,
            height: 250,
            width:'100%',
            backgroundImage: `url(${heroi?.thumbnail?.path + "." + heroi?.thumbnail?.extension})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            borderRadius: 10,
          }}
        >
        </Box>
        <Stack p={2} flex={1}>
          <Typography variant="h4">{heroi?.name}</Typography>
          <Typography variant="body2">{heroi?.description}</Typography>
        </Stack>
      </Stack>
    </Stack>
  );
}
