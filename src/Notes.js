import React from "react";

function Notes(props) {
  return (
    <section className="mt-5 mb-5">
      <p className="lg:w-1/2 p-2 bg-blue-400 text-white rounded shadow-md ">
        <span className="font-bold text-white">नोट:-</span> {props.note}
      </p>
    </section>
  );
}

export default Notes;
