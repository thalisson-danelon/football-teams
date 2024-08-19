import AsyncStorage from '@react-native-async-storage/async-storage';

import { PLAYER_COLLECTION, TEAM_COLLECTION } from '@storage/storageConfig';

import { teamGetAll } from './teamGetAll';

export async function teamRemoveByName(teamName: string) {
  try {
    const storedTeams = await teamGetAll();
    const filteredTeams = storedTeams.filter(team => team !== teamName);
    await AsyncStorage.setItem(TEAM_COLLECTION, JSON.stringify(filteredTeams));
    await AsyncStorage.removeItem(`${PLAYER_COLLECTION}-${teamName}`);
  } catch (error) {
    throw error;
  }
}
