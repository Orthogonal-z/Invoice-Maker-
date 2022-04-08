import React from "react";

function Footer(props) {
  return (
    <footer className="mt-12">
      <div className="bg-gray-100 py-2 px-8 rounded shadow">
        <h1 className="font-bold text-xl text-green-800 font-bold py-2 px-8">
          Bank Details:
        </h1>
        <ul className="flex flex-wrap items-center justify-center">
          <li>
            <span className="font-bold">Holder Name: </span>{" "}
            <span className="mr-3  font-medium hover:text-red-900">
              Abhilash
            </span>
          </li>
          <li>
            <span className="font-bold">Phone Number: </span>{" "}
            <span className="mr-3 font-medium hover:text-red-900">
              {props.phone} / 88825 72239
            </span>
          </li>

          <li>
            <span className="font-bold">Bank Name: </span>{" "}
            <span className="mr-3 font-medium hover:text-red-900">
              Punjab National Bank
            </span>
          </li>
          <li>
            <span className="font-bold">Bank Account No: </span>{" "}
            <span className="mr-3 font-medium hover:text-red-900">
              4684001700083405
            </span>
          </li>
          <li>
            <span className="font-bold">IFSC CODE: </span>{" "}
            <span className="mr-3 font-medium hover:text-red-900">
              PUNB0468400
            </span>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
