import React, {useEffect, useState} from 'react';
import {getLeaderboard, type Participant} from "@/lib/leaderboardFetcher.ts";

interface LeaderboardProps {
    participants: Participant[]; // Initial data from Astro (SSR)
}

const Leaderboard: React.FC<LeaderboardProps> = ({participants: initialParticipants}) => {
    const [participants, setParticipants] = useState<Participant[]>(initialParticipants);

    useEffect(() => {
        const fetchLiveData = async () => {
            try {
                const participants = await getLeaderboard();

                setParticipants(participants);
            } catch (error) {
                console.error('Error fetching live data:', error);
            }
        };

        fetchLiveData();
    }, []);

    return (
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-bold mb-4 text-[--google-blue]">
                Leaderboard
            </h2>
            <div className="overflow-x-auto">
                <table className="w-full">
                    <thead>
                    <tr className="bg-gray-100">
                        <th className="px-4 py-2 text-left">Rank</th>
                        <th className="px-4 py-2 text-left">Name</th>
                        <th className="px-4 py-2 text-left">Points</th>
                    </tr>
                    </thead>
                    <tbody>
                    {participants.map((player, index) => (
                        <tr key={index} className="border-b">
                            <td className="px-4 py-2">{player.rank}</td>
                            <td className="px-4 py-2">{player.name}</td>
                            <td className="px-4 py-2">{player.points}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Leaderboard;
