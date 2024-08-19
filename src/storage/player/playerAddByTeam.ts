import AsyncStorage from '@react-native-async-storage/async-storage';

import { AppError } from '@utils/AppError';
import { PLAYER_COLLECTION } from '@storage/storageConfig';

import { playersGetByTeam } from './playersGetByTeam';
import { PlayerStorageDTO } from './PlayerStorageDTO';

export async function playerAddByTeam(newPlayer: PlayerStorageDTO, teamName: string) {
  const storagePlayers = await playersGetByTeam(teamName);
  const playerAlreadyExists = storagePlayers.filter(player => player.name === newPlayer.name);
  if (playerAlreadyExists.length > 0) {
    throw new AppError('Este jogador já foi adicionado em um time');
  }
  try {
    const storage = JSON.stringify([...storagePlayers, newPlayer]);
    await AsyncStorage.setItem(`${PLAYER_COLLECTION}-${teamName}`, storage);
  } catch (error) {
    throw error;
  }
}
