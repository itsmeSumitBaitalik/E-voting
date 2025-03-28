import React, { useState } from 'react';
import { CheckCircle, AlertCircle } from 'lucide-react';
import {Parties} from  '../components/Parties.jsx'


export default function VotingArea() {
  const [selectedCandidate, setSelectedCandidate] = useState(null);
  const [hasVoted, setHasVoted] = useState(false);

  const handleVote = () => {
    if (selectedCandidate) {
      setHasVoted(true);
      // In a real app, you would send this to your backend
    }
  };

  if (hasVoted) {
    return (
      <div className="max-w-3xl mx-auto text-center">
        <div className="bg-white shadow rounded-lg p-8">
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto" />
          <h2 className="text-2xl font-bold text-gray-800 mt-4">Thank You for Voting!</h2>
          <p className="text-gray-600 mt-2">Your vote has been recorded successfully.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto">
      <div className="bg-white shadow rounded-lg p-6">
        <div className='hidden'>
          hello moto
        </div>
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Current Election: City Council 2024</h2>
        
        <div className="space-y-4">
          {Parties.map((candidate) => (
            <div
              key={candidate.id}
              className={`border rounded-lg p-4 cursor-pointer transition-colors ${
                selectedCandidate === candidate.id
                  ? 'border-blue-500 bg-blue-50'
                  : 'hover:border-gray-300'
              }`}
              onClick={() => setSelectedCandidate(candidate.id)}
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-gray-800">{candidate.leadership.name}</h3>
                  <p className="text-sm text-gray-600">{candidate.name}</p>
                </div>
                <div className="h-4 w-4 rounded-full border-2 border-blue-500 flex items-center justify-center">
                  {selectedCandidate === candidate.id && (
                    <div className="h-2 w-2 rounded-full bg-blue-500" />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
            <div className="flex">
              <AlertCircle className="h-5 w-5 text-yellow-400" />
              <div className="ml-3">
                <p className="text-sm text-yellow-700">
                  Please review your selection carefully. You cannot change your vote after submission.
                </p>
              </div>
            </div>
          </div>

          <button
            onClick={handleVote}
            disabled={!selectedCandidate}
            className={`w-full py-3 px-4 rounded-md text-white font-medium cursor-pointer ${
              selectedCandidate
                ? 'bg-blue-600 hover:bg-blue-700'
                : 'bg-gray-300 cursor-not-allowed'
            }`}
          >
            Submit Vote
          </button>
        </div>
      </div>
    </div>
  );
}

