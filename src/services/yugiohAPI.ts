// import axios from 'axios';
// import { error } from 'console';

// // Função para buscar cartas de monstros da API do Yu-Gi-Oh!
// export const fetchMonsters = async () => {
//   const { data } = await axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php?type=monster');
//   if(!res.ok){
//     throw new Error('Error fetching data')
//   }
//   const data = await res.json();
//   return data.data.filter(card =>
//     card.type.includes("Monster")
//   )
// };
import { useQuery } from "@tanstack/react-query";

export async function fetchMonsters() {
  const res = await fetch("https://db.ygoprodeck.com/api/v7/cardinfo.php?");

  if (!res.ok) {
    throw new Error('Erro ao buscar os dados');
  }

  const data = await res.json();
  return data.data; // Supondo que 'data.data' contenha os resultados dos cards.
}

