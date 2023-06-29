import CardHeroe from "@/components/CardHeroe";
import { useAppContext } from "@/contexts/AppProvider";
import {Stack, Typography} from "@mui/material";

export default function Home() {
 const {heroisTabela} = useAppContext()
 console.log(heroisTabela)
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
      {heroisTabela.length && heroisTabela?.map((hero) => (
        <CardHeroe heroi={hero} />
      ))}

      {!heroisTabela.length && <Typography>Nenhum resultado!</Typography>}
    </Stack>
  );
}
