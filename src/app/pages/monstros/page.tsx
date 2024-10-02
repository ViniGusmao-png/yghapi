'use client';

import { useQuery } from '@tanstack/react-query';
import { fetchMonsters } from '../../../services/yugiohAPI'; // Importando a função de fetch
import { Box, Loader, Text, Flex } from "@mantine/core";

// Página de Monstros
export default function MonstrosTCG() {
  // Chamada da API usando useQuery
  const { data, error, isLoading } = useQuery({
    queryKey: ['monsters'],
    queryFn: fetchMonsters,
  });

  // Estado de carregamento
  if (isLoading) return <Loader />;

  // Tratamento de erro
  if (error instanceof Error) {
    return <Text>Erro ao carregar as cartas: {error.message}</Text>;
  }

  return (
    <Box>
      <Text size="xl" mb={20}>Cartas de Monstros</Text>
      {/* Renderizando cada carta */}
      <Flex direction="column" gap="md">
        {data?.map((card: any) => (
          <Box key={card.id} p={20}>
            <Text>Nome: {card.name}</Text>
            <Text>Tipo: {card.type}</Text>
          </Box>
        ))}
      </Flex>
    </Box>
  );
}
