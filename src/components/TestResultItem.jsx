import React, { useState } from "react";
import { mbtiDescriptions } from "../utils/mbtiCalculator";

const TestResultItem = ({ result, userId, onVisibilityChange, onDelete }) => {
   
  const isOwner = result.userId === userId; 
  console.log(isOwner)
  const [isVisible, setIsVisible] = useState(result.visibility); 

  const handleVisibilityToggle = () => {
    const newVisibility = !isVisible;
    setIsVisible(newVisibility);
    onVisibilityChange(result.id, newVisibility); 
  };

  const handleDelete = () => {
    onDelete(result.id); 
  };

  return (
    <div key={result.id} className="border-b pb-4">
      <p className="text-3xl font-bold text-primary-color mb-3 pt-4">
        {result.mbti}
      </p>
      <p className="text-xl text-gray-500 mb-6">
        {result.userId}
      </p>
      <p className="text-lg text-gray-700 mb-6">
        {mbtiDescriptions[result.mbti]}
      </p>

      {isOwner && (
        <div className="flex justify-center gap-2 px-20">
          <button
            onClick={handleVisibilityToggle}
            className={`rounded-lg bg-blue-600 text-white p-3 inline-block w-[100%] text-center`}
          >
            {isVisible ? "비공개 전환" : "공개 전환"}
          </button>
          <button
            onClick={handleDelete}
            className="rounded-lg bg-red-600 text-white p-3 inline-block w-[100%] text-center"
          >
            삭제하기
          </button>
        </div>
      )}
    </div>
  );
};

export default TestResultItem;
