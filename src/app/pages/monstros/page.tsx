'use client';

import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Box, Loader, Text, Flex, Card } from "@mantine/core";

// Função para buscar todas as cartas da API do Yu-Gi-Oh!
const fetchCards = async () => {
  const { data } = await axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php');
  return data.data;// Retorna os dados das cartas
};

const races = [
  'Aqua',
  'Beast',
  'Beast-Warrior',
  'Creator-God',
  'Cyberse',
  'Dinosaur',
  'Divine-Beast',
  'Dragon',
  'Fairy',
  'Fiend',
  'Fish',
  'Insect',
  'Machine',
  'Plant',
  'Psychic',
  'Pyro',
  'Reptile',
  'Rock',
  'Sea Serpent',
  'Spellcaster',
  'Thunder',
  'Warrior',
  'Winged Beast',
  'Wyrm',
  'Zombie'
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
  const cards = data.data
  const limitCards = data.slice(0, 25).filter(cards => races.includes(cards.race))

  return (
    <Box >
      <Flex direction={'column'} align={'center'} display={"flex"} justify={"center"}>
        <Flex>
          <Text style={{fontSize:'42px'}}>Cartas de Monstros</Text>
        </Flex>

      {limitCards.map((carta: any) => (
        <Flex w={'22%'} display={'flex'} align={'center'} direction="column" bg={'#7B6B00'} style={{border:'6px solid #434552',borderRadius:'7px', gap: '20px'}}>
        {/* Cabeçalho da carta */}
        <Flex display={'flex'}  direction='row' align={'center'} style={{border:'outset #BDA500', gap:'30px', marginTop:'5px', padding:'0px 10px 0px 10px'}}>
          <Flex display={'flex'} direction={'row'} align={'center'} style={{ width: '330px', height: '25px'}}>
            <Text>{carta.name}</Text>
          </Flex>
          <Flex display={'flex'}  direction='row' justify={'center'} style={{borderRadius:'50%', border:'ridge #BDA500', backgroundColor:'#B09A11', width:'18px',margin:'2px 0px 2px 0px', padding:'3px'}}>
            <Text>{carta.level}</Text>
          </Flex>
        </Flex>

        {/* Parte de descrição da carta */}
        <Flex display={'flex'}  direction='column' style={{border:'2px solid #7B2101', backgroundColor:'#D1C074', width: '370px',margin:'2px 0px 2px 0px', padding:'3px 4px 3px 4px'}}>
          <Text>{carta.typeline}</Text>
          <Text>{carta.desc}</Text>
        </Flex>
        
        {/* Ataque e Defesa */}
        <Flex display={'flex'} direction={'column'} style={{border:'outset #BDA500', gap:'10px',marginBottom:'5px', padding:'0px 10px 0px 10px'}}>
          <Text>ATK {carta.atk}</Text>
          <Text>DEF {carta.def}</Text>
        </Flex>

      </Flex>
      ))}
      </Flex>
    </Box>
  );
}
