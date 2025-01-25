const CSV_URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vTBVgYpnpaDoLK_g6klbR0LYV-KTM8uvU7BSulbqHhZXt7Cg2BbauOIfYVibnlx_neTuNDgljO_db77/pub?output=csv";

export interface Participant {
  name: string;
  points: number;
  rank: number;
}

export async function getLeaderboard() {
  const response = await fetch(CSV_URL);
  const rawCsv = await response.text();

  // Parse the CSV
  const lines = rawCsv
    .trim()
    .split("\n")
    .map((line) => line.trim());
  const [headerRow, totalRow] = lines
    .slice(0, 2)
    .map((line) => line.split(","));

  let liveParticipants: Participant[] = headerRow
    .slice(1)
    .filter((name) => name)
    .map((name, index) => ({
      name: name.trim(),
      points: Number(totalRow[index + 1]?.trim()) || 0,
      rank: 0,
    }))
    .filter((participant) => participant.points > 0);

  liveParticipants.sort((a, b) => b.points - a.points);

  // Assign ranks with ties
  let rank = 1;
  for (let i = 0; i < liveParticipants.length; i++) {
    if (i > 0 && liveParticipants[i].points < liveParticipants[i - 1].points) {
      rank = i + 1;
    }
    liveParticipants[i].rank = rank;
  }

  return liveParticipants;
}
