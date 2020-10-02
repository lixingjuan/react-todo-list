import React from "react";

export default function Counter({ NoteList } = {}) {
  const isArray = Array.isArray(NoteList);

  if (isArray) {
    return (
      <ol>
        {NoteList.map(i => (
          <li key={i}>{i}</li>
        ))}
      </ol>
    );
  }

  return <blockquote>{NoteList}</blockquote>;
}
