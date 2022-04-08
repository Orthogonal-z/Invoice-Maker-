import React from "react";

function Dates(props) {
  return (
    <article className="my-5 flex items-end justify-end">
      <ul>
        <li>
          <span className="font-medium">Invoice Number: {props.invoice}</span>
        </li>
        <li>
          <span className="font-medium">Today's Date: {props.date}</span>
        </li>
      </ul>
    </article>
  );
}

export default Dates;
