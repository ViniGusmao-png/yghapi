"use client";
import Botao from "@/components/button";
import { BackgroundImage, Box, Button, Flex, Image } from "@mantine/core";


export default function Home() {

  return (
    <BackgroundImage src="https://raw.githubusercontent.com/ViniGusmao-png/yghapi/refs/heads/master/src/assets/yami.png">
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
            <Botao/>
          </Flex>
        </Flex>
      </Box>
    </BackgroundImage>
  );
}


//https://raw.githubusercontent.com/ViniGusmao-png/yghapi/refs/heads/master/src/app/assets/yami.png
//https://raw.githubusercontent.com/ViniGusmao-png/yghapi/refs/heads/master/src/assets/yami.png