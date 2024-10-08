'use client';

import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Box, Loader, Text, Flex } from "@mantine/core";

// Função para buscar todas as cartas da API do Yu-Gi-Oh!
const fetchCards = async () => {
  const { data } = await axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php');
  return data.data; // Retorna os dados das cartas
};

const monstros =[

]

// Página de Monstros
export default function MonstrosTCG() {
  // Chamada da API usando useQuery
  const { data, error, isLoading } = useQuery({
    queryKey: ['cards'],
    queryFn: fetchCards,
  });

  // Estado de carregamento
  if (isLoading) return <Loader />;

  // Tratamento de erro
  if (error instanceof Error) {
    return <Text>Erro ao carregar as cartas: {error.message}</Text>;
  }

  return (
    <Box >
      <Flex direction={'column'} align={'center'} display={"flex"} justify={"center"}>
        <Flex>
          <Text style={{fontSize:'42px'}}>Cartas de Monstros</Text>
        </Flex>

      <Flex w={'25%'} display={'flex'} align={'center'} direction="column" bg={'#8F7A33'} style={{border:'1px solid blue', gap: '20px'}}>
        {/* Cabeçalho da carta */}
        <Flex display={'flex'}  direction='row' style={{border:'1px solid red', gap:'30px'}}>
          <Flex style={{border:'1px solid orange', width: '330px'}}>
            <Text>Nome</Text>
          </Flex>
          <Flex display={'flex'}  direction='row' style={{border:'1px solid green', width: '70px'}}>
            <Text>LVL</Text>
          </Flex>
        </Flex>

        {/* Parte de descrição da carta */}
        <Flex>
          <Text>Descrição</Text>
        </Flex>
        
        {/* Ataque e Defesa */}
        <Flex>
          <Text>ATK</Text>
          <Text>DEF</Text>
        </Flex>

      </Flex>
      </Flex>
    </Box>
  );
}


// {data?.map((card: any) => (
//   <Box key={card.id} p={20}>
//     <Text>Nome: {card.name}</Text>
//     <Text>Tipo: {card.type}</Text>
//   </Box>
// ))}