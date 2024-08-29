import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const CreateLoan = () => {
  const [amount, setAmount] = useState("");
  const [term, setTerm] = useState("");
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const navigate = useNavigate();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!amount || !term || !name || !phoneNumber) {
      toast.error("Please fill in all fields!");
      return;
    }

    // Basic phone number validation (example)
    const phoneNumberPattern = /^[0-9]{10}$/;
    if (!phoneNumberPattern.test(phoneNumber)) {
      toast.error("Invalid phone number. It should be a 10-digit number.");
      return;
    }

    // Simulate form submission
    toast.success("Loan application submitted successfully!");
    console.log("Loan Details:", { name, phoneNumber, amount, term });

    // Clear form fields after submission
    setAmount("");
    setTerm("");
    setName("");
    setPhoneNumber("");

    // Redirect to home page
    navigate("/");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-md p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold mb-6 text-center">Apply for a Loan</h2>
        <form onSubmit={handleFormSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Name:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:border-blue-500"
              placeholder="Enter your name"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Phone Number:</label>
            <input
              type="text"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:border-blue-500"
              placeholder="Enter your phone number"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Loan Amount:</label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:border-blue-500"
              placeholder="Enter loan amount"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Loan Term (in weeks):</label>
            <input
              type="number"
              value={term}
              onChange={(e) => setTerm(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:border-blue-500"
              placeholder="Enter loan term"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-3 rounded-md w-full hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200"
          >
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateLoan;
