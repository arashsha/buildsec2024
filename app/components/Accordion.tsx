'use client'
import { useState } from 'react';

type Track = {
    name: string;
    topics: string[];
};

type Props = {
    track: Track;
}

const Accordion = ({ track }: Props) => {
    const [open, setOpen] = useState<boolean>(false);

    const toggleAccordion = () => {
        setOpen(!open);
    };

    return (
        <div className="p-0 my-4">
            <button
                className="w-full text-left px-4 py-2 bg-gray-100 text-fuchsia-900 rounded hover:bg-gray-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:text-fuchsia-100 focus:outline-none font-semibold"
                onClick={toggleAccordion}
            >
                {track.name}
            </button>
            {open && (
                <div className="px-4 py-2 mt-2 bg-white dark:bg-neutral-700 dark:text-white border border-fuchsia-100 rounded shadow space-y-2">
                    <p className='font-semibold'>Suggested Topics of Interest but not limited to:</p>
                    {track.topics.map((content, idx) => (
                        <ul key={idx} className="list-disc list-inside">
                            <li>{content}</li>
                        </ul>
                        // <p key={idx}>{content}</p>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Accordion;
