import React, { useContext, useState } from "react";
import TestForm from "../components/TestForm";
import { calculateMBTI, mbtiDescriptions } from "../utils/mbtiCalculator";
import { useNavigate } from "react-router-dom";
import { createTestResult } from "../api/testResults";
import { UserContext } from "../contexts/UserContext";

const TestPage = () => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  const [result, setResult] = useState(null);
  console.log()
  const handleTestSubmit = async (answers) => {
    try {
      const mbtiResult = calculateMBTI(answers);
      const resultData = { userId: user?.userId, mbti: mbtiResult, visibility: true };
      const savedResult = await createTestResult(resultData);
      console.log('result', savedResult);

      setResult(mbtiResult);
    } catch (error) {
      console.error('서버등록 실패:', error);
    }
  };

  const handleNavigateToResults = () => {
    navigate("/result");
  };

  return (
    <div className="w-full flex flex-col items-center justify-center bg-[#eee]">
      <div className="bg-white rounded-lg p-8 max-w-lg w-full h-full overflow-y-auto">
        {!result ? (
          <>
            <h1 className="text-3xl font-bold text-primary-color mb-6">
              MBTI 테스트
            </h1>
            <TestForm onSubmit={handleTestSubmit} />
          </>
        ) : (
          <>
            <h1 className="text-3xl font-bold text-primary-color mb-6">
              테스트 결과: {result}
            </h1>
            <p className="text-lg text-gray-700 mb-6">
              {mbtiDescriptions[result] ||
                "해당 성격 유형에 대한 설명이 없습니다."}
            </p>
            <button
              onClick={handleNavigateToResults}
              className="rounded-lg bg-red-600 text-white p-3 inline-block w-[100%] text-center"
            >
              결과 페이지로 이동하기
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default TestPage;
