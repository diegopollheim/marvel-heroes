import CardHeroe from "@/components/CardHeroe";
import { useAppContext } from "@/contexts/AppProvider";
import { Box, Stack, Typography } from "@mui/material";

export default function Home() {
  const { heroisTabela } = useAppContext();

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
        <CardHeroe key={hero.id}  heroi={hero} />
      ))}

      {!heroisTabela.length && (
        <Box>
          <Typography>Nenhum resultado!</Typography>
        </Box>
      )}
    </Stack>
  );
}
