import React, { useState } from "react";
import axios from "axios";

const Ask = () => {
  const [question, setQuestion] = useState("");
  const [response, setResponse] = useState("");

  const handleSubmit = async () => {
    try {
      const res = await axios.post("http://localhost:5000/api/ask", { question });
      setResponse(res.data.reply);
    } catch (error) {
      setResponse("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="container">
      <h2>Ask a Legal Question</h2>
      <textarea
        rows="5"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Write your question here..."
      />
      <br />
      <button onClick={handleSubmit}>Submit</button>
      <div className="reply-box">
        <p>{response}</p>
      </div>
    </div>
  );
};

export default Ask;
          
