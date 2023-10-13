// import React, { useState } from "react";
// import { useLocation } from "react-router-dom";
// import { useSprings, animated } from "@react-spring/web";

// import { SecurityData } from "../../Data/Data";
// import { ITEmployeeData } from "../../Data/Data";
// import { EngineerData } from "../../Data/Data";
// import { FactoryWorkerData } from "../../Data/Data";

// const QuizQuestion = () => {
//   const [selectedQuestionIndex, setSelectedQuestionIndex] = useState(0);
//   const [gone, setGone] = useState(new Set());

//   const location = useLocation();
//   const { age, profession } = location.state;

//   const handleNextButtonClick = () => {
//     if (selectedQuestionIndex < SecurityData.length - 1) {
//       setSelectedQuestionIndex(selectedQuestionIndex + 1);
//       setGone(new Set());
//     }
//   };

//   const handleCardClick = (index) => {
//     if (!gone.has(index)) {
//       const newGone = new Set(gone);
//       // Set both cards as gone
//       newGone.add(0);
//       newGone.add(1);
//       setGone(newGone);
//     }
//   };

//   const handlePreviousButtonClick = () => {
//     if (selectedQuestionIndex > 0) {
//       setSelectedQuestionIndex(selectedQuestionIndex - 1);
//     }
//   };

//   const cards = [
//     {
//       text: SecurityData[selectedQuestionIndex].Option1,
//       id: 0,
//     },
//     {
//       text: SecurityData[selectedQuestionIndex].Option2,
//       id: 1,
//     },
//   ];

//   const springs = useSprings(
//     cards.length,
//     cards.map((_, index) => ({
//       x: gone.has(index) ? (index === 0 ? -500 : 500) : 0,
//       opacity: gone.has(index) ? 0 : 1,
//     }))
//   );

//   return (
//     <div className="flex bg-black justify-center items-center min-h-screen">
//       {selectedQuestionIndex < SecurityData.length && (
//         <div>
//           <div className="absolute top-0 right-0 p-4 text-white flex flex-col">
//             <p className="text-center">Age: {age}</p>
//             <p className="text-center">Profession: {profession}</p>
//           </div>

//           <div className="text-center self-center text-xl text-white mb-4">
//             {SecurityData[selectedQuestionIndex].title}
//           </div>

//           <div className="flex flex-col items-center text-white p-4 rounded shadow mb-4">
//             <div className="w-96 text-center">
//               <p>Scenario: {SecurityData[selectedQuestionIndex].Scenario1}</p>
//             </div>
//             <div className="flex flex-row gap-11 mt-10">
//               {springs.map(({ x, opacity }, index) => (
//                 <animated.div
//                   key={cards[index].id}
//                   style={{
//                     transform: x.to((x) => `translateX(${x}px)`),
//                     opacity,
//                   }}
//                   className="bg-yellow-100 text-black p-4 h-80 w-52 rounded-lg shadow cursor-pointer text-2xl font-bold flex justify-center items-center"
//                   onClick={() => handleCardClick(index)}
//                 >
//                   <p className="text-center">{cards[index].text}</p>
//                 </animated.div>
//               ))}
//             </div>
//           </div>

//           <div className="flex justify-between">
//             <button
//               onClick={handlePreviousButtonClick}
//               className="text-black font-bold border rounded-full bg-royalgoldenbg border-royalgoldenborder px-6 py-2 mr-4"
//             >
//               Previous
//             </button>
//             <button
//               onClick={handleNextButtonClick}
//               className="text-black font-bold border rounded-full bg-royalgoldenbg border-royalgoldenborder px-6 py-2"
//             >
//               Next
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default QuizQuestion;

import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { useSprings, animated } from "@react-spring/web";
import { SecurityData } from "../../Data/Data";
import { ITEmployeeData } from "../../Data/Data";
import { EngineerData } from "../../Data/Data";
import { FactoryWorkerData } from "../../Data/Data";

const QuizQuestion = () => {
  const [selectedQuestionIndex, setSelectedQuestionIndex] = useState(0);
  const [gone, setGone] = useState(new Set());
  const [rewards, setRewards] = useState(0); // Initialize rewards

  const location = useLocation();
  const { age, profession } = location.state;

  // Define question sets based on profession
  const questionSets = {
    ITEmployee: ITEmployeeData,
    Engineer: EngineerData,
    FactoryWorker: FactoryWorkerData,
  };

  // Select the appropriate question set based on the profession
  const selectedQuestions = questionSets[profession] || SecurityData;

  const handleNextButtonClick = () => {
    if (selectedQuestionIndex < selectedQuestions.length - 1) {
      setSelectedQuestionIndex(selectedQuestionIndex + 1);
      setGone(new Set());
    }
  };

  const handleCardClick = (index) => {
    if (!gone.has(index)) {
      const newGone = new Set(gone);
      // Set both cards as gone
      newGone.add(0);
      newGone.add(1);
      setGone(newGone);

      setRewards(rewards + 100);
      setTimeout(() => {
        handleNextButtonClick();
      }, [1000]);
    }
  };

  const handlePreviousButtonClick = () => {
    if (selectedQuestionIndex > 0) {
      setSelectedQuestionIndex(selectedQuestionIndex - 1);
    }
  };

  const cards = [
    {
      text: selectedQuestions[selectedQuestionIndex].Option1,
      id: 0,
    },
    {
      text: selectedQuestions[selectedQuestionIndex].Option2,
      id: 1,
    },
  ];

  const springs = useSprings(
    cards.length,
    cards.map((_, index) => ({
      x: gone.has(index) ? (index === 0 ? -500 : 500) : 0,
      opacity: gone.has(index) ? 0 : 1,
    }))
  );

  return (
    <div className="flex bg-black justify-center items-center min-h-screen">
      {selectedQuestionIndex < selectedQuestions.length && (
        <div>
          <div className="absolute top-0 right-0 p-4 text-white flex flex-col">
            <p className="text-center">Age: {age}</p>
            <p className="text-center">Profession: {profession}</p>
            <p className="text-center">₹ {rewards}</p>
          </div>

          <div className="text-center self-center text-xl text-white mb-4">
            {selectedQuestions[selectedQuestionIndex].title}
          </div>

          <div className="flex flex-col items-center text-white p-4 rounded shadow mb-4">
            <div className="w-96 text-center">
              <p>
                Scenario: {selectedQuestions[selectedQuestionIndex].Scenario1}
              </p>
            </div>
            <div className="flex flex-row gap-11 mt-10">
              {springs.map(({ x, opacity }, index) => (
                <animated.div
                  key={cards[index].id}
                  style={{
                    transform: x.to((x) => `translateX(${x}px)`),
                    opacity,
                  }}
                  className="bg-yellow-100 text-black p-4 h-80 w-52 rounded-lg shadow cursor-pointer text-2xl font-bold flex justify-center items-center"
                  onClick={() => handleCardClick(index)}
                >
                  <p className="text-center">{cards[index].text}</p>
                </animated.div>
              ))}
            </div>
          </div>

          <div className="flex justify-between">
            <button
              onClick={handlePreviousButtonClick}
              className="text-black font-bold border rounded-full bg-royalgoldenbg border-royalgoldenborder px-6 py-2 mr-4"
            >
              Previous
            </button>
            <button
              onClick={handleNextButtonClick}
              className="text-black font-bold border rounded-full bg-royalgoldenbg border-royalgoldenborder px-6 py-2"
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuizQuestion;
