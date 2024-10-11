import "./FormStyle.css";
import Modal from "./Modal";
import { useState } from "react";
export default function LoneForm() {
  const [errorMessage, setErrorMessage] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [loanInput, setLoanInput] = useState({
    name: "",
    phoneNumber: "",
    age: "",
    isEmployee: false,
    salaryRange: "",
  });

  function handleFormSubmit(e) {
    e.preventDefault();
    setErrorMessage(null);
    const { age, phoneNumber } = loanInput;
    if (age < 18 || age > 100) {
      setErrorMessage("The age is not allowed");
      setShowModal(true);
    } else if (phoneNumber.length < 10 || phoneNumber.length > 12) {
      setErrorMessage("Phone Number Format iS Incorrect");
    }
    setShowModal(true);
  }

  const btnIsDisabled =
    loanInput.name === "" ||
    loanInput.age === "" ||
    loanInput.isEmployee === "";

  function handleDivClick() {
    if (showModal) setShowModal(false);
  }
  return (
    <div
      onClick={handleDivClick}
      className="flex"
      style={{ flexDirection: "column" }}
    >
      <form
        id="lone-from"
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <h1>Request a Loan</h1>
        <hr></hr>
        <label>Name:</label>
        <input
          value={loanInput.name}
          onChange={(event) => {
            setLoanInput({ ...loanInput, name: event.target.value });
          }}
        />

        <label>Phone Number:</label>
        <input
          value={loanInput.phoneNumber}
          onChange={(event) => {
            setLoanInput({ ...loanInput, phoneNumber: event.target.value });
          }}
        />

        <label>Age:</label>
        <input
          value={loanInput.age}
          onChange={(event) => {
            setLoanInput({ ...loanInput, age: event.target.value });
          }}
        />

        <label
          style={{
            marginTop: "30px",
          }}
        >
          Are You an Employee?
        </label>
        <>
          <input
            id="check"
            style={{}}
            type="checkbox"
            checked={loanInput.isEmployee}
            onChange={(event) => {
              setLoanInput({ ...loanInput, isEmployee: event.target.checked });
            }}
          />
        </>

        <label>Salary</label>
        <select
          value={loanInput.salaryRange}
          onChange={(event) => {
            setLoanInput({ ...loanInput, salaryRange: event.target.value });
          }}
        >
          <option>less than 500$</option>
          <option>between 500$ and 2000</option>
          <option>above 2000</option>
        </select>
        <div className="btn">
          <button
            className={btnIsDisabled ? "disabled" : ""}
            onClick={handleFormSubmit}
            disabled={btnIsDisabled}
            id="submit-btn"
          >
            Submit
          </button>
        </div>
      </form>
      <Modal errorMessage={errorMessage} isVisible={showModal} />
    </div>
  );
}
