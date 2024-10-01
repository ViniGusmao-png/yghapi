'use client'
import { BackgroundImage, Box, Button, Flex } from "@mantine/core";
import { url } from "inspector";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <Box h={'90vh'} bg={'black'} >
      <Flex
        display={'flex'}
        direction="column" 
        align="center" 
        justify="center" 
        h={'100%'}
        gap={10}
        
      >
        <Flex bg={'black'} style={{display:"flex", gap:'10px'}}>
          <Button onClick={() => router.push("/pages/monstros")}>Cartas de monstros</Button>
          <Button onClick={() => router.push("/pages/magias")}>Cartas de magia</Button>
          <Button onClick={() => router.push("/pages/armadilhas")}>Cartas de armadilha</Button>
        </Flex>
      </Flex>
      
    </Box>
  );
}
