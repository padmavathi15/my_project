import React from 'react';

const TeacherSidebar = ({ setCurrentSection }) => {
  const sections = [
    { id: 'ClassroomOverview', label: 'Classroom Overview', icon: 'bi bi-house-door' },
    { id: 'AssignmentTracker', label: 'Assignment Tracker', icon: 'bi bi-journal-text' },
    { id: 'ClassTimetable', label: 'Class Timetable', icon: 'bi bi-calendar-event' },
    { id: 'StudentPerformanceOverview', label: 'Student Performance', icon: 'bi bi-bar-chart' },
    { id: 'CommunicationPanel', label: 'Communication Panel', icon: 'bi bi-chat-dots' },
    { id: 'Test', label: 'Test', icon: 'bi bi-chat-dots' },
    { id: 'Syballus', label: 'Syllabus', icon: 'bi bi-people-fill' },
  ];

  return (
    <div
      className="bg-dark border-end"
      style={{
        width: '250px',
        height: '100vh', // Full height of the viewport
        position: 'fixed', // Fixes the sidebar in place
        top: 0, // Aligns it to the top of the viewport
        left: 0, // Aligns it to the left of the viewport
        overflowY: 'auto', // Adds scrolling for the sidebar if content overflows
      }}
    >
      <div className="p-4 text-center">
        <h5 className="text-primary fw-bold">Teacher Portal</h5>
      </div>
      <div className="list-group list-group-flush">
        {sections.map((section) => (
          <button
            key={section.id}
            className="list-group-item list-group-item-action bg-dark text-light d-flex align-items-center border-0"
            onClick={() => setCurrentSection(section.id)}
            style={{ cursor: 'pointer' }}
          >
            <i className={`${section.icon} me-2`}></i>
            <span>{section.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default TeacherSidebar;
