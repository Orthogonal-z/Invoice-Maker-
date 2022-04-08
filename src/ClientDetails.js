import React from "react";

function ClientDetails(props) {
  return (
    <div className="pt-2">
      <section className="p-2 bg-blue-700 text-blue-700 rounded shadow ">
        <h2 className="text-xl uppercase text-white">
          Customer Name:{" "}
          <span className="font-bold text-white">{props.clientName}</span>
        </h2>
        <p className="text-white">
          Customer Address:{" "}
          <span className="font-bold text-white">{props.clientAddress}</span>
        </p>
      </section>
    </div>
  );
}

export default ClientDetails;
