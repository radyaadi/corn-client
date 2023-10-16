import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Classify from "../pages/Classify";
import Prepocessing from "../pages/Prepocessing";
import FeatureMap from "../pages/FeatureMap";
import Evaluation from "../pages/Evaluation";

const Content = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [image, setImage] = useState(null);
  const [classified, setClassified] = useState(false);
  const [result, setResult] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const url = URL.createObjectURL(e.target.files[0]);
    setSelectedFile(file);
    setImage(url);
  };

  const handleSubmit = (e) => {
    setResult(null);
    e.preventDefault();

    if (selectedFile) {
      const formData = new FormData();
      formData.append("image", selectedFile);

      fetch("http://127.0.0.1:5000/classify", {
        method: "POST",
        body: formData,
      })
        .then((response) => response.json())
        .then(setClassified(true))
        .then((data) => setResult(data))
        .catch((error) => console.error("Error:", error));
    }
  };
  return (
    <div className="absolute left-[15rem] top-14 min-h-[calc(100vh-3.5rem)] w-[calc(100%-15rem)] bg-slate-100 p-5">
      <Routes>
        <Route
          path="/"
          element={
            <Classify
              onHandleFileChange={handleFileChange}
              onHandleSubmit={handleSubmit}
              onImage={image}
              onClassified={classified}
              {...result}
            />
          }
        />
        <Route
          path="/prepocessing"
          element={
            <Prepocessing
              onImage={image}
              {...result}
              onClassified={classified}
            />
          }
        />
        <Route
          path="/visual-ekstraksi-fitur"
          element={<FeatureMap onClassified={classified} {...result} />}
        />
        <Route path="/evaluation" element={<Evaluation />} />
      </Routes>
    </div>
  );
};

export default Content;
