import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";

function TableForm({
  description,
  quantity,
  Price,
  amount,
  setDescription,
  setQuantity,
  setPriceValue,
  setAmount,
  list,
  setList,
  total,
  setToatl,
}) {
  const [editing, setEditing] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!description && !quantity && !Price) {
      alert("Please fill all Inputs");
    } else {
      const newItems = {
        id: uuidv4(),
        description: description,
        quantity: quantity,
        Price: Price,
        amount: amount,
      };

      setDescription("");
      setQuantity("");
      setPriceValue("");
      setAmount("");
      setList([...list, newItems]);
      setEditing(false);
    }
  };

  useEffect(() => {
    const calculateAmount = (amount) => {
      setAmount(quantity * Price);
    };

    // Calculate Amount Function
    calculateAmount(amount);
  }, [amount, Price, quantity, setAmount]);

  // Total amount function
  useEffect(() => {
    let rows = document.querySelectorAll(".amount");
    let sum = 0;

    for (let i = 0; i < rows.length; i++) {
      if (rows[i].className === "amount") {
        sum += isNaN(rows[i].innerHTML) ? 0 : parseInt(rows[i].innerHTML);
        setToatl(sum);
      }
    }
  }, [description, quantity, Price]);
  // Edit Function
  const editRow = (id) => {
    const editingRow = list.find((row) => row.id === id);
    setEditing(true);
    setList(list.filter((row) => row.id !== id));
    setDescription(editingRow.description);
    setQuantity(editingRow.quantity);
    setPriceValue(editingRow.Price);
  };

  // Delete Function
  const deleteRow = (id) => {
    setList(list.filter((row) => row.id !== id));
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col">
          <label htmlFor="description">Spare Parts</label>
          <input
            className="bg-gray-200 form-control
            block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
        
       
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            type="text"
            name="description"
            id="description"
            placeholder="Also mention company name"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></input>

          <label htmlFor="Quantity">Quantity</label>
          <input
            className="bg-gray-200 form-control
            block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700

            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            type="text"
            name="Quantity"
            id="description"
            placeholder="Mention Quantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          ></input>

          <label htmlFor="Price">Price</label>
          <input
            className="bg-gray-200 form-control
            block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            type="text"
            name="Price"
            id="Price"
            placeholder="Mention Price"
            value={Price}
            onChange={(e) => setPriceValue(e.target.value)}
          ></input>
        </div>

        <button
          className="mt-5 mb-5 bg-lime-500 text-orange-900 font-bold py-1 px-2 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-orange-500 transition-all duration-300"
          type="submit"
        >
          {editing ? "Edit Row Item" : "Add Parts"}
        </button>
      </form>

      {/* Table Items to preview */}

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
              <tr>
                <td>{description}</td>
                <td>{quantity}</td>
                <td>{Price}</td>
                <td className="amount">{amount}</td>
                <td>
                  <button onClick={() => deleteRow(id)}>
                    <AiFillDelete className="h-8 w-8 p-2 hover:bg-red-100 font-bold text-2xl hover:text-cyan-700 rounded-full" />
                  </button>
                </td>
                <td>
                  <button onClick={() => editRow(id)}>
                    <AiFillEdit className="h-8 w-8 p-2 hover:bg-green-100 font-bold text-2xl hover:text-cyan-700 rounded-full" />
                  </button>
                </td>
              </tr>
            </tbody>
          </React.Fragment>
        ))}
      </table>

      <div className="flex items-end justify-end">
        <h2 className="p-3 rounded shadow bg-red-500 mt-5 ml-44 text-gray-800 text-2xl font-bold ">
          <span className="text-white"> Total amount: </span>
          <span className="text-white ml-5"> {total.toLocaleString()}</span>
        </h2>
      </div>
    </>
  );
}

export default TableForm;
