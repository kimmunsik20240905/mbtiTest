import React, { useContext, useEffect, useState } from "react";
import { mbtiDescriptions } from "../utils/mbtiCalculator";
import { getTestResults, deleteTestResult, updateTestResultVisibility } from "../api/testResults";
import TestResultItem from "../components/TestResultItem";
import { UserContext } from "../contexts/UserContext";

const TestResultList = () => {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { user } = useContext(UserContext);

  const fetchTestResults = async () => {
    try {
      const data = await getTestResults();
      setResults(data);
    } catch (error) {
      console.error("Test results fetch error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchTestResults();
  }, []);

  console.log("results ====>" + JSON.stringify(results))
  const filteredResults = results.filter(result => result.visibility === true || result.userId === user?.userId);
console.log("filteredResults :"+ JSON.stringify(filteredResults));
const handleVisibilityChange = async (id, visibility) => {
    try {
      const resultToUpdate = results.find(result => result.id === id);
      
      if (resultToUpdate) {
        const updatedResult = {
          ...resultToUpdate,
          visibility: visibility,
        };
  
        await updateTestResultVisibility(id, updatedResult);
        fetchTestResults();
      }
    } catch (error) {
      console.error("Visibility update error:", error);
    }
  };
  

  const handleDelete = async (id) => {
    try {
      await deleteTestResult(id);
      fetchTestResults();
    } catch (error) {
      console.error("Delete error:", error);
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-full flex flex-col items-center justify-center bg-[#eee]">
      <div className="bg-white rounded-lg p-8 max-w-lg w-full h-full overflow-y-auto">
        <h1 className="text-3xl font-bold text-primary-color border-b mb-6 pb-4">
          모든 테스트 결과
        </h1>
        {filteredResults.length === 0 ? (
          <div>결과가 없습니다.</div>
        ) : (
          filteredResults.map((result) => (
            <TestResultItem
              key={result.id}
              result={result}
              userId={user?.userId}
              onVisibilityChange={handleVisibilityChange}
              onDelete={handleDelete}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default TestResultList;
