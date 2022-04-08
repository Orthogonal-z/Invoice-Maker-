import React from "react";

function MainDetails(props) {
  return (
    <section className="flex flex-col items-end justify-end">
      <h2 className="font-bold text-xl uppercase md:text-3xl">{props.name}</h2>

      <p className="font-medium text-2xl md: text-2xl">{props.phone}</p>
      <p>{props.address}</p>
    </section>
  );
}

export default MainDetails;
