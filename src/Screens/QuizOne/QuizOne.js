import React, { useState } from "react";
import { db } from "../../Components/FireBase/FireBaseconfig";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const QuizOne = () => {
  const navigate = useNavigate();

  const [age, getAge] = useState("");
  const [profession, getProfession] = useState("");

  // console.log(age);
  // console.log(profession);

  const handleStartButtonClick = async () => {
    // Create a data object with age, profession, and any other relevant user data
    const UserData = {
      age,
      profession,
      timestamp: serverTimestamp(),
    };

    // Add the user data to a collection (e.g., 'users')
    try {
      const docRef = await addDoc(collection(db, "UserData"), UserData);
      console.log("Document written with ID: ", docRef.id);
      // navigate("/Game");
      // navigate(`/Game?age=${age}&profession=${profession}`);
      navigate("/Game", { state: { age, profession } });
    } catch (error) {
      console.error("Error adding document: ", error);
    }

    // You can also create a random document here if needed
  };

  return (
    <div className="bg-primary min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-royalgolden  text-5xl  font-bold mb-24">
        Quiz Challenge
      </h1>
      <div className="mb-24">
        <div className="text-white">
          <select
            onChange={(e) => getAge(e.target.value)}
            className="py-2 px-8 mb-6 bg-transparent border-0 border-b-2 border-white outline-none"
          >
            <option className="bg-primary border-primaryborder" value="">
              Select your age
            </option>
            <option value="25-30" className="bg-primary border-primaryborder ">
              25-30
            </option>
            <option value="31-40" className="bg-primary border-primaryborder">
              31-40
            </option>
            <option value="41-50" className="bg-primary border-primaryborder">
              41-50
            </option>
            <option value="51above" className="bg-primary border-primaryborder">
              51 and above
            </option>
          </select>
        </div>

        <div className="text-white">
          <select
            onChange={(e) => getProfession(e.target.value)}
            className="py-2 px-3 bg-transparent border-0 outline-none border-b-2 border-white"
          >
            <option
              className="bg-primary border-none"
              value=""
              disabled
              selected
            >
              Select your profession
            </option>
            <option
              value="SecurityGuard"
              className="bg-primary border-primaryborder"
            >
              Security Guard
            </option>
            <option
              value="FactoryWorker"
              className="bg-primary border-primaryborder"
            >
              Factory Worker
            </option>
            <option
              value="IT-Employee"
              className="bg-primary border-primaryborder"
            >
              IT Employee
            </option>
            <option
              value="Engineer"
              className="bg-primary border-primaryborder"
            >
              Engineer
            </option>
          </select>
        </div>
      </div>
      <button
        onClick={handleStartButtonClick}
        className="text-black font-bold border rounded-full bg-royalgoldenbg border-royalgoldenborder px-6 py-2"
      >
        Start
      </button>
    </div>
  );
};

export default QuizOne;
