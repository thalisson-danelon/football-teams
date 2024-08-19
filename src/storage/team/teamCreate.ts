import AsyncStorage from '@react-native-async-storage/async-storage';
import { TEAM_COLLECTION } from '@storage/storageConfig';
import { teamGetAll } from '@storage/team/teamGetAll';
import { AppError } from '@utils/AppError';

export async function teamCreate(newTeam: string) {
  const storedTeams = await teamGetAll();
  const teamAlreadyExists = storedTeams.includes(newTeam);
  if (teamAlreadyExists) {
    throw new AppError('Já existe um time com esse nome');
  }
  try {
    const storage = JSON.stringify([...storedTeams, newTeam]);
    await AsyncStorage.setItem(TEAM_COLLECTION, storage);
  } catch (error) {
    throw error;
  }
}
