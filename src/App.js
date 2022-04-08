import "./App.css";
import React from "react";
import { useState, useRef } from "react";
import logo from "./Group 113.png";

import ClientDetails from "./ClientDetails";
import Dates from "./Dates";
import Footer from "./Footer";
import Header from "./Header";
import MainDetails from "./MainDetails";
import Notes from "./Notes";
import TableForm from "./TableForm";
import Table from "./Table";
import ReactToPrint from "react-to-print";

function App() {
  const [showInvoice, setShowInvoice] = useState(false);
  const [name, setName] = useState("");
  const [address, setAddress] = useState(
    "G-28/Elahi Baksh Road, Karol Bagh, New Delhi, Pincode-110005"
  );
  const [phone, setPhone] = useState("");
  const [gst, setGst] = useState("");
  const [clientName, setClientNAme] = useState("");
  const [clientAddress, setClientAddress] = useState("");
  const [invoiceNumber, setInvoiceNumber] = useState("");
  const [notes, setNotes] = useState("");
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState("");
  const [Price, setPriceValue] = useState("");
  const [amount, setAmount] = useState("");
  const [list, setList] = useState([]);
  // THis setTotal component will be shared by two component
  const [total, setToatl] = useState(0);

  const componentRef = useRef();
  const handlePrint = () => {
    window.print();
  };

  var today = new Date();
  var date =
    today.getDate() + "-" + (today.getMonth() + 1) + "-" + today.getFullYear();

  const setInvoice = () => {
    setShowInvoice(false);
  };

  return (
    <>
      <main className="m-5 p-8 md:max-w-xl md:mx-auto lg:max-w-2xl xl:max-w-4xl xl:max-w-4xl xl:mx-auto bg-white rounded shadow">
        {showInvoice ? (
          <>
            <div ref={componentRef} className="p-8">
              <Dates invoice={invoiceNumber} date={date} />

              <Header handlePrint={handlePrint} showInvoice={setInvoice} />

              <MainDetails name={name} address={address} phone={phone} />

              <ClientDetails
                clientName={clientName}
                clientAddress={clientAddress}
              />

              <Notes note={notes} />

              <div className="grid grid-cols-1 divide-y">
                <Table
                  description={description}
                  quantity={quantity}
                  Price={Price}
                  amount={amount}
                  list={list}
                  setList={setList}
                  total={total}
                  setToatl={setToatl}
                />

                <Footer name={name} gst={gst} phone={phone} />
              </div>
            </div>

            <div>
              <button
                onClick={() => setShowInvoice(false)}
                className="ml-7 mt-5 bg-blue-500 text-white font-light py-2 px-2 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300"
              >
                Edit Information
              </button>

              <ReactToPrint
                trigger={() => (
                  <button className="ml-5 bg-green-500 text-white font-medium py-2 px-2 rounded shadow border-2 border-green-500 hover:bg-transparent hover:text-gray-900 transition-all duration-300">
                    Print/Download
                  </button>
                )}
                content={() => componentRef.current}
              />
            </div>
          </>
        ) : (
          <>
            <div className="flex flex-row ">
              <img className="mt-4 h-10 w-90 mr-5" src={logo} alt="Logo" />
              <h1 className="mr-3 p-5 pl-5 pr-5 font-bold uppercase tracking-wide text-4xl mb-1 box-decoration-clone bg-gradient-to-r from-indigo-600 to-pink-500 text-white px-2 rounded shadow">
                KRUDO BILL MAKER
              </h1>
            </div>
            {/* Name, Address, Email, Phone, GST No., Client Name, Client Address, Invoice Number, Invoice date, Due Date, Notes  */}
            <div className="flex flex-col">
              <label className=" mt-3 text-blue-600" htmlFor="name">
                Enter your name
              </label>
              <input
                className="mb-3 form-control
                block
                w-full
                px-3
                py-1.5
                text-base
                font-normal
                text-gray-700
                bg-white bg-clip-padding
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                type="name"
                name="name"
                id="name"
                placeholder="Type your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

              <label className="mt-3 text-blue-600" htmlFor="address">
                Enter your address
              </label>
              <input
                className=" mb-3 form-control
                block
                w-full
                px-3
                py-1.5
                text-base
                font-normal
                text-gray-700
                bg-white bg-clip-padding
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                type="address"
                name="address"
                id="address"
                placeholder="Type your address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />

              <label className="mt-3  text-blue-600" htmlFor="phone">
                Enter your Phone no.
              </label>
              <input
                className=" mb-3 form-control
                block
                w-full
                px-3
                py-1.5
                text-base
                font-normal
                text-gray-700
                bg-white bg-clip-padding
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                type="phone"
                name="phone"
                id="phone"
                placeholder="Type your phone no."
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />

              <label className="mt-3  text-blue-600" htmlFor="clientName">
                Enter Customer Name
              </label>
              <input
                className="mb-3 form-control
                block
                w-full
                px-3
                py-1.5
                text-base
                font-normal
                text-gray-700
                bg-white bg-clip-padding
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                type="ClientNAme"
                name="ClientNAme"
                id="ClientNAme"
                placeholder="Type here"
                value={clientName}
                onChange={(e) => setClientNAme(e.target.value)}
              />

              <label className="mt-3  text-blue-600" htmlFor="clientAddress">
                Enter Customer Address
              </label>
              <input
                className="mb-3 form-control
                block
                w-full
                px-3
                py-1.5
                text-base
                font-normal
                text-gray-700
                bg-white bg-clip-padding
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                type="clientAddress"
                name="clientAddress"
                id="clientAddress"
                placeholder="Type here"
                value={clientAddress}
                onChange={(e) => setClientAddress(e.target.value)}
              />

              <label className="mt-3 text-blue-600" htmlFor="phone">
                Enter Invoice Number
              </label>
              <input
                className="mb-3  form-control
                block
                w-full
                px-3
                py-1.5
                text-base
                font-normal
                text-gray-700
                bg-white bg-clip-padding
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                type="invoiceNumber"
                name="invoiceNumber"
                id="invoiceNumber"
                placeholder="Type Random Invoice"
                value={invoiceNumber}
                onChange={(e) => setInvoiceNumber(e.target.value)}
              />
              <div>
                <label className=" mt-3 mb-3 mr-5 text-blue-600" htmlFor="date">
                  Today's Date
                </label>
                <input
                  className="py-5 outline-none"
                  type=""
                  name=""
                  id=""
                  placeholder="Type Random Invoice"
                  value={date}
                />
              </div>

              <article>
                <TableForm
                  description={description}
                  setDescription={setDescription}
                  quantity={quantity}
                  setQuantity={setQuantity}
                  Price={Price}
                  setPriceValue={setPriceValue}
                  amount={amount}
                  setAmount={setAmount}
                  list={list}
                  setList={setList}
                  total={total}
                  setToatl={setToatl}
                />
              </article>

              <label className="mt-10 text-blue-600" htmlFor="notes">
                Note For Customer
              </label>
              <textarea
                className="mb-3 form-control
                block
                w-full
                px-3
                py-1.5
                text-base
                font-normal
                text-gray-700
                bg-white bg-clip-padding
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                type="notes"
                name="notes"
                id="notes"
                placeholder="Type Any Note For Customer"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
              ></textarea>

              <button
                onClick={() => setShowInvoice(true)}
                className="mt-5 bg-blue-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300"
              >
                Preview Invoice
              </button>
            </div>
          </>
        )}
      </main>
    </>
  );
}

export default App;
