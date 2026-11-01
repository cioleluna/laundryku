import React from 'react';
function SummaryCard({ label, value, note, icon, tone }) {
  return (
    <article className="summary-card">
      <div className={`summary-icon ${tone}`}>{icon}</div>
      <p className="summary-label">{label}</p>
      <h3>{value}</h3>
      <p className="summary-note">{note}</p>
    </article>
  );
}

export default SummaryCard;