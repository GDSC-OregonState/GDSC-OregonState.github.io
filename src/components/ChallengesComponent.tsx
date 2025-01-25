import React, { useState } from "react";

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
        <a href={`/blog/${week.slug}/`}>
          <h3 className="text-xl text-[--google-blue] font-bold underline">
            Week {week.weekNumber}: {week.topic}
          </h3>
        </a>
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

export default WeekChallenges;
