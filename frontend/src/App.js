import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [file, setFile] = useState();

  const handleFileChange = (e) => {
    console.log(e.target.files);
    const form = new FormData();
    const { files } = e.target;
    form.append("file", files[0]);
    fetch("http://localhost:3000/upload", {
      method: "POST",
      body: form,
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.error(err));
  };

  return (
    <div className="App">
      <input type="file" name="file" onChange={handleFileChange} />
    </div>
  );
}

export default App;
