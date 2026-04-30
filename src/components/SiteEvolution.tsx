"use client";

import { useState } from "react";
import { X } from "lucide-react";
import Image from "next/image";


const timelineData = [
  {
    title: "The Origin",
    description: "Manual design & visual layout.",
    active: false,
    comingSoon: false,
  },
  {
    title: "The Foundation",
    description: "Transitioning from design to code.",
    active: false,
    comingSoon: false,
  },
  {
    title: "The Exploration",
    description: "Integrating AI for better UI design.",
    active: true,
    comingSoon: false,
  },
  {
    title: "The Evolution",
    description: "Advanced high-fidelity UI refinement.",
    active: false,
    comingSoon: true,
  },
  {
    title: "The Destination",
    description: "",
    active: false,
    comingSoon: true,
  },
];

const SiteEvolution = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {/* Floating Action Button */}
      <button
        onClick={() => setIsModalOpen(true)}
        className="fixed bottom-8 right-8 bg-blue-200 text-white p-2 rounded-full shadow-lg hover:bg-blue-400 transition-colors duration-300 z-50"
        aria-label="Open site evolution timeline"
      >
        <Image src="/assets/pngtree-a-closer-look-at-the-hourglass-png-image_11517571.png" alt="Site Evolution" width={40} height={40} />
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-md flex items-center justify-center z-50 p-4">
          <div className="bg-white/5 border border-gray-200/20 rounded-lg shadow-xl w-full max-w-7xl text-white relative">
            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors z-10"
              aria-label="Close site evolution timeline"
            >
              <X size={24} />
            </button>

            <div className="p-8">
              <h2 className="text-2xl font-bold text-center mb-8">Site Evolution</h2>
              
              {/* Horizontal Timeline */}
              <div className="relative">
                {/* The horizontal line */}
                <div className="absolute top-8 left-0 w-full h-0.5 bg-gray-400/50 transform -translate-y-1/2"></div>
                
                <div className="grid grid-cols-5 gap-4 items-stretch">
                  {timelineData.map((item, index) => (
                    <div key={index} className="flex flex-col items-center relative z-10">
                      {/* Dot on the timeline */}
                      <div className={`w-4 h-4 rounded-full ${item.active ? 'bg-green-400 ring-4 ring-green-400/50' : 'bg-gray-400'}`}></div>
                      
                      {/* Timeline Item Card */}
                      <div className={`mt-4 p-4 rounded-lg border border-gray-200/30 bg-white/10 text-center flex flex-col h-full w-full ${item.comingSoon ? '' : 'cursor-pointer hover:bg-white/20'}`}>
                        {/* Image Placeholder */}
                        <div className="w-full h-32 bg-gray-500/20 rounded-md mb-4 flex items-center justify-center flex-shrink-0">
                          <span className="text-gray-400 text-sm">Image</span>
                        </div>
                        <div className="flex flex-col flex-grow justify-between">
                          <div>
                            <h3 className="font-bold text-lg">{item.title}</h3>
                            <p className="text-xs mt-2">{item.description}</p>
                          </div>
                          <div className="mt-4">
                            {item.active && (
                              <span className="inline-block px-2 py-0.5 text-xs bg-green-500 text-white rounded-full">Active</span>
                            )}
                            {item.comingSoon && (
                              <span className="inline-block px-2 py-0.5 text-xs bg-yellow-500 text-black rounded-full shadow-[0_0_10px_rgba(234,179,8,0.5)]">Coming Soon</span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SiteEvolution;