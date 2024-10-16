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

      <Flex w={'22%'} display={'flex'} align={'center'} direction="column" bg={'#7B6B00'} style={{border:'6px solid #434552',borderRadius:'7px', gap: '20px'}}>
        {/* Cabeçalho da carta */}
        <Flex display={'flex'}  direction='row' align={'center'} style={{border:'outset #BDA500', gap:'30px', marginTop:'5px', padding:'0px 10px 0px 10px'}}>
          <Flex display={'flex'} direction={'row'} align={'center'} style={{ width: '330px', height: '25px'}}>
            <Text> Nome</Text>
          </Flex>
          <Flex display={'flex'}  direction='row' justify={'center'} style={{borderRadius:'50%', border:'ridge #BDA500', backgroundColor:'#B09A11', width:'auto',margin:'2px 0px 2px 0px', padding:'3px 4px 3px 4px'}}>
            <Text>10</Text>
          </Flex>
        </Flex>

        {/* Parte de descrição da carta */}
        <Flex display={'flex'}  direction='row' style={{border:'2px solid #7B2101', backgroundColor:'#D1C074', width: '370px',margin:'2px 0px 2px 0px', padding:'3px 4px 3px 4px'}}>
          <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem iure perspiciatis ex rerum ipsa deserunt autem perferendis temporibus, nostrum nemo culpa maxime, numquam esse obcaecati veniam itaque ipsam, cumque hic.</Text>
        </Flex>
        
        {/* Ataque e Defesa */}
        <Flex display={'flex'} direction={'column'} style={{border:'outset #BDA500', gap:'10px',marginBottom:'5px', padding:'0px 10px 0px 10px'}}>
          <Text>ATK 3000</Text>
          <Text>DEF 2500</Text>
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