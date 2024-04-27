import React from "react";

const Article = ({ title, date, preview }) => {
  const defaultDate = "January 1, 1970";
  const formattedDate = date || defaultDate;

  return (
    <article>
      <h3>{title}</h3>
      <small>{formattedDate}</small>
      <p>{preview}</p>
    </article>
  );
};

export default Article;