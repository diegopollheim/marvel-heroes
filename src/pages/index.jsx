import CardHeroe from "@/components/CardHeroe";
import { useAppContext } from "@/contexts/AppProvider";
import {Stack} from "@mui/material";
import useSWR from "swr";

export default function Home() {
 const {heroisTabela} = useAppContext()
  let width = 300;
  return (
    <Stack
      justifyContent="center"
      mt={25}
      sx={{
        display: "grid",
        gridTemplateColumns: `${width}px ${width}px ${width}px ${width}px`,
        gap: 3,
      }}
    >
      {heroisTabela?.map((hero) => (
        <CardHeroe heroi={hero} />
      ))}
    </Stack>
  );
}
