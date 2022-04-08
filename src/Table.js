import React from "react";

function Table({ list, total }) {
  return (
    <>
      <table width="100%">
        <thead>
          <tr className="bg-gray-200 p-1">
            <td className="font-bold">Spare Parts</td>
            <td className="font-bold">Quantity</td>
            <td className="font-bold">Price</td>
            <td className="font-bold">Amount</td>
          </tr>
        </thead>
        {list.map(({ id, description, quantity, Price, amount }) => (
          <React.Fragment key={id}>
            <tbody>
              <tr className="bg-gray-50">
                <td>{description}</td>
                <td>{quantity}</td>
                <td>{Price}</td>
                <td>{amount}</td>
              </tr>
            </tbody>
          </React.Fragment>
        ))}
      </table>

      <div className="flex items-end justify-end">
        <h2 className="p-3 rounded shadow bg-red-500 mt-5 ml-44 text-gray-800 text-2xl font-bold ">
          <span className="text-white"> Total amount: </span>
          <span className="text-white ml-5 "> {total.toLocaleString()}</span>
        </h2>
      </div>
    </>
  );
}

export default Table;
