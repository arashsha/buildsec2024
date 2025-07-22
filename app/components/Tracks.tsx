'use client'
import React from 'react'
import { useState } from 'react';

type Track = {
    name: string;
    info: string;
    };

type Props = {
    tracks: Track[];
}

const Tracks = (props: Props) => {

    const [selectedTrack, setSelectedTrack] = useState<Track | null>(null);


    const openDialog = (track: Track) => {
      setSelectedTrack(track);
    };
  
    const closeDialog = () => {
      setSelectedTrack(null);
    };
  
    return (
      <div className="p-4">
        {/* <h1 className="text-2xl font-bold mb-4">Tracks</h1> */}
        <ul className="space-y-2">
          {props.tracks.map((track, index) => (
            <li key={index} className="cursor-pointer text-blue-600 hover:underline" onClick={() => openDialog(track)}>
              {track.name}
            </li>
          ))}
        </ul>
  
        {selectedTrack && (
          <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-50">
            <div className="bg-white p-6 rounded shadow-lg max-w-lg w-full">
              <h2 className="text-xl font-bold mb-2">{selectedTrack.name}</h2>
              <p>{selectedTrack.info}</p>
              <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded" onClick={closeDialog}>Close</button>
            </div>
          </div>
        )}
      </div>
    );
}

export default Tracks