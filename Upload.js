import React, { useState } from "react";
import axios from "axios";

const Upload = () => {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState("");

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await axios.post("http://localhost:5000/api/upload", formData);
      setResult(res.data.text);
    } catch (error) {
      setResult("Error processing the document.");
    }
  };

  return (
    <div className="container">
      <h2>Upload Legal Document</h2>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
      <div className="reply-box">
        <pre>{result}</pre>
      </div>
    </div>
  );
};

export default Upload;
