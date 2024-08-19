import AsyncStorage from '@react-native-async-storage/async-storage';

import { PLAYER_COLLECTION } from '@storage/storageConfig';

import { PlayerStorageDTO } from './PlayerStorageDTO';

export async function playersGetByTeam(team: string) {
  try {
    const storage = await AsyncStorage.getItem(`${PLAYER_COLLECTION}-${team}`);
    const players: PlayerStorageDTO[] = storage ? JSON.parse(storage) : [];
    console.log('players: ', players);
    return players;
  } catch (error) {
    throw error;
  }
}
