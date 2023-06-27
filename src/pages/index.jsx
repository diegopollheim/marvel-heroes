import CardHeroe from "@/components/CardHeroe";
import Header from "@/components/Header";
import {Box, Container, Stack} from "@mui/material";
import {useEffect} from "react";
import useSWR from "swr";
import heroes from "./api/marvel/heroes";

export default function Home() {
  const {data: heroes} = useSWR("/api/marvel/heroes");
console.log(heroes);
  return (
    <div>
      <Header />
      <Container maxWidth="lg">
        <Stack spacing={3} direction="row" mt={25} flexWrap="wrap" gap={2}>
          {heroes?.map((hero) => (
            <CardHeroe
              name={hero.name}
              img={hero.thumbnail.path+'.'+hero.thumbnail.extension}
              desc={hero.description}
            />
          ))}
        </Stack>
      </Container>
    </div>
  );
}
