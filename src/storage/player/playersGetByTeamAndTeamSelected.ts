import { playersGetByTeam } from '@storage/player/playersGetByTeam';

export async function playersGetByTeamAndTeamSelected(team: string, teamSelected: string) {
  try {
    console.log('team: ', team, 'teamSelected: ', teamSelected);
    const storage = await playersGetByTeam(teamSelected);
    return storage.filter(player => player.team === teamSelected);
  } catch (error) {
    throw error;
  }
}
