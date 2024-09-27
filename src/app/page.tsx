
import { Box, Button, Flex } from "@mantine/core";

export default function Home() {
  return (
    <Box h={'90vh'}>
      <Flex
        display={'flex'}
        direction="column" 
        align="center" 
        justify="center" 
        h={'100%'}
        gap={10}
      >
        <Flex style={{display:"flex", gap:'10px'}}>
          <Button>Cartas de monstros</Button>
          <Button >Cartas de magia</Button>
          <Button>Cartas de armadilha</Button>
        </Flex>
      </Flex>
    </Box>
  );
}
