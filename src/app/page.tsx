"use client";
import { BackgroundImage, Box, Button, Flex, Image } from "@mantine/core";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <BackgroundImage src="https://raw.githubusercontent.com/ViniGusmao-png/yghapi/refs/heads/master/src/app/assets/yami.png">
      <Box h={"100vh"} w={"100vw"} >
        <Flex
          display={"flex"}
          direction="column"
          align="center"
          justify="center"
          h={"100%"}
          gap={10}
          bg={"black"}
        >
          <Flex style={{ display: "flex", gap: "10px" }}>
            <Button onClick={() => router.push("/pages/monstros")}>
              Cartas de monstros
            </Button>
            <Button onClick={() => router.push("/pages/magias")}>
              Cartas de magia
            </Button>
            <Button onClick={() => router.push("/pages/armadilhas")}>
              Cartas de armadilha
            </Button>
          </Flex>
        </Flex>
      </Box>
    </BackgroundImage>
  );
}
