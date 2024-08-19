import { PLAYER_COLLECTION } from '@storage/storageConfig';
import { playersGetByTeam } from '@storage/player/playersGetByTeam';
import AsyncStorage from '@react-native-async-storage/async-storage';

export async function playerRemoveByTeam(playerName: string, teamName: string) {
  try {
    const storagePlayers = await playersGetByTeam(teamName);
    const filteredStorage = storagePlayers.filter(player => player.name !== playerName);
    const storage = JSON.stringify(filteredStorage);
    await AsyncStorage.setItem(`${PLAYER_COLLECTION}-${teamName}`, storage);
  } catch (error) {
    throw error;
  }
}
