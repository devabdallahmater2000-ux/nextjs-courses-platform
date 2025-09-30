"use client";
import React, { useRef, useState } from "react";
interface Section {
  id: number;
  title: string;
  lectures: number;
  duration: string;
  items: {
    title: string;
    duration: string;
    type: string;
  }[];
}
const CourseCurriculum = () => {
  const sections: Section[] = [
    {
      id: 1,
      title: "Section 1: Introduction to React",
      lectures: 5,
      duration: "2h 15m",
      items: [
        {
          title: "Introduction to React and Its Features",
          duration: "15m",
          type: "video",
        },
        {
          title: "Setting Up Development Environment",
          duration: "25m",
          type: "video",
        },
        {
          title: "Creating Your First React App",
          duration: "30m",
          type: "video",
        },
      ],
    },
    {
      id: 2,
      title: "Section 2: Components and Props",
      lectures: 8,
      duration: "3h 40m",
      items: [
        {
          title: "Introduction to React and Its Features",
          duration: "15m",
          type: "video",
        },
        {
          title: "Setting Up Development Environment",
          duration: "25m",
          type: "video",
        },
        {
          title: "Creating Your First React App",
          duration: "30m",
          type: "video",
        },
      ],
    },
    {
      id: 3,
      title: "Section 3: State and Events",
      lectures: 10,
      duration: "4h 20m",
      items: [
        {
          title: "Introduction to React and Its Features",
          duration: "15m",
          type: "video",
        },
        {
          title: "Setting Up Development Environment",
          duration: "25m",
          type: "video",
        },
        {
          title: "Creating Your First React App",
          duration: "30m",
          type: "video",
        },
      ],
    },
  ];
  // const [open, setOpen] = useState<number>(1);
  const [open, setOpen] = useState<number>(1);
  const contentRefs = useRef<Record<number, HTMLDivElement | null>>({});
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Course Content</h2>
        <div className="text-gray-600">
          <span>12 sections</span> • <span>85 lectures</span> •{" "}
          <span>32 hours total</span>
        </div>
      </div>

      <div className="space-y-4">
        {sections.map((section) => (
          <div
            key={section.id}
            className="border border-gray-200 rounded-xl overflow-hidden"
          >
            <div
              className="bg-gray-50 p-4 flex justify-between items-center cursor-pointer hover:bg-gray-100 transition"
              onClick={() => {
                setOpen(section.id);
              }}
            >
              <div>
                <h3 className="font-bold text-gray-800">{section.title}</h3>
                <div className="text-sm text-gray-600 mt-1">
                  {section.lectures} lectures • {section.duration}
                </div>
              </div>
              <svg
                className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${
                  open === section.id ? "rotate-180" : "rotate-0"
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
            <div
              ref={(el) => {
                contentRefs.current[section.id] = el;
              }}
              style={{
                maxHeight:
                  open === section.id
                    ? contentRefs.current[section.id]?.scrollHeight || 0
                    : 0,
                opacity: open === section.id ? 1 : 0,
              }}
              className="transition-all duration-300 ease-in-out overflow-hidden"
            >
              <div className="divide-y divide-gray-100">
                {section.items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="p-4 flex items-center justify-between hover:bg-gray-50 transition group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-200 transition">
                        <svg
                          className="w-4 h-4 text-blue-600"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <div>
                        <div className="font-medium text-gray-800">
                          {item.title}
                        </div>
                        <div className="text-sm text-gray-500">
                          {item.duration}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg
                        className="w-4 h-4 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                      <svg
                        className="w-4 h-4 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseCurriculum;
