import React, { useState, useEffect } from 'react';
import '../styles/MeetingReports.css';

function MeetingReports() {
  const [reports, setReports] = useState([]);

  // Simuler la récupération des données des comptes rendus
  useEffect(() => {
    const fetchedReports = [
      { id: 1, title: 'Réunion 01', date: '2025-03-10', summary: 'Compte rendu de la réunion 01.' },
      { id: 2, title: 'Réunion 02', date: '2025-03-17', summary: 'Compte rendu de la réunion 02.' },
    ];
    setReports(fetchedReports);
  }, []);

  return (
    <div className="meeting-reports-container">
      <div className="meeting-reports">
        <ul>
          {reports.map(report => (
            <li key={report.id}>
              <h3>{report.title}</h3>
              <p>{report.date}</p>
              <p>{report.summary}</p>
              <a href={`/reports/${report.id}.pdf`} target="_blank" rel="noopener noreferrer">Voir les détails</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
  
}

export default MeetingReports;