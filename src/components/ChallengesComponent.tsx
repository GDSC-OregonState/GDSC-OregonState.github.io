import React, { useState } from "react";
import challengesData from "../data/challenges.json";

const Leaderboard: React.FC = () => {
  // Sort the leaderboard by points in descending order
  const sortedLeaderboard = [...challengesData.leaderboard].sort(
    (a, b) => b.points - a.points
  );

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
            {sortedLeaderboard.map((player, index) => (
              <tr key={index} className="border-b">
                <td className="px-4 py-2">{index + 1}</td>
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

const Challenge: React.FC<{ challenge: any }> = ({ challenge }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow-sm p-4 mb-4">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setExpanded(!expanded)}
      >
        <h4 className="text-lg font-semibold">{challenge.name}</h4>
        <div className="flex items-center">
          <span className="text-[--google-green] font-bold mr-2">
            {challenge.points} pts
          </span>
          <svg
            className={`w-6 h-6 transition-transform ${
              expanded ? "transform rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>
      {expanded && (
        <div className="mt-4 text-gray-600">
          <p>{challenge.description}</p>
        </div>
      )}
    </div>
  );
};

const WeekChallenges: React.FC<{ week: any }> = ({ week }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setExpanded(!expanded)}
      >
        <h3 className="text-xl font-bold">Week {week.weekNumber}</h3>
        <svg
          className={`w-6 h-6 transition-transform ${
            expanded ? "transform rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
      {expanded && (
        <div className="mt-4">
          {week.challenges.map((challenge: any, index: number) => (
            <Challenge key={index} challenge={challenge} />
          ))}
        </div>
      )}
    </div>
  );
};

const ChallengesComponent: React.FC = () => {
  return (
    <div>
      <Leaderboard />
      <div className="space-y-6">
        {challengesData.weeks.map((week, index) => (
          <WeekChallenges key={index} week={week} />
        ))}
      </div>
    </div>
  );
};

export default ChallengesComponent;
