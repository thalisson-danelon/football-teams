import { playersGetByTeam } from '@storage/player/playersGetByTeam';

export async function playersGetByTeamAndTeamSelected(teamName: string, teamSelected: string) {
  try {
    const storage = await playersGetByTeam(teamName);
    return storage.filter(player => player.team === teamSelected);
  } catch (error) {
    throw error;
  }
}
