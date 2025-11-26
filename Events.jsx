import { useState } from "react";

const Events = () => {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", name);
    alert("Form Submitted: " + name);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px"}}>
      <h1>React onSubmit Example</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{
            padding: "10px",
            fontSize: "16px",
            width: "200px",
            marginBottom: "20px",
          }}
        />

        <br />

        <button
          type="submit"
          style={{
            padding: "10px 20px",
            fontSize: "18px",
            cursor: "pointer",
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Events;
