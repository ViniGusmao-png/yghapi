// import axios from 'axios';
// import { useQuery } from "@tanstack/react-query";

// // Função para buscar todas as cartas da API do Yu-Gi-Oh!
// export const fetchCards = async () => {
//   try {
//     const { data } = await axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php');
//     return data.data; // Retorna todos os dados das cartas
//   } catch (error) {
//     throw new Error('Erro ao buscar os dados');
//   }
// };

// // Utilizando o TanStack Query para buscar as cartas
// export const useCardsQuery = () => {
//   return useQuery( ['cards'] , fetchCards);
// };
