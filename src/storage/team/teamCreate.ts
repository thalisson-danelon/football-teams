import AsyncStorage from '@react-native-async-storage/async-storage';
import { TEAM_COLLECTION } from '@storage/storageConfig';
import { teamGetAll } from '@storage/team/teamGetAll';

export async function teamCreate(newTeam: string) {
  try {
    const storedTeams = await teamGetAll();
    const storage = JSON.stringify([...storedTeams, newTeam]);
    await AsyncStorage.setItem(TEAM_COLLECTION, storage);
  } catch (error) {
    throw error;
  }
}
