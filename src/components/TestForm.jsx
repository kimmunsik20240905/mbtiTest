import React, { useState } from "react";
import { questions } from "../data/questions";

const TestForm = ({ onSubmit }) => {
    const [answers, setAnswers] = useState(
        Array(questions.length).fill({ type: "", answer: "" }),
    );

    const handleChange = (index, value) => {
        const newAnswers = [...answers];
        newAnswers[index] = { type: questions[index].type, answer: value };
        setAnswers(newAnswers);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Answers:", answers);
        onSubmit(answers);
    };

    return (
        <div className='flex justify-center pt-8'>
                <div className="  text-left">
                    
                    <form onSubmit={handleSubmit} className="space-y-6 p-6 bg-white rounded-lg">
                        {questions.map((q, index) => (
                            <div key={q.id} className="mb-6">
                                <p className="font-semibold text-lg mb-3">{q.question}</p>
                                <div className="space-y-2">
                                    {q.options.map((option, i) => (
                                        <label
                                            key={i}
                                            className={`block p-3 border rounded-lg cursor-pointer transition-colors duration-300 ${answers[index]?.answer === q.type.split("/")[i]
                                                    ? "bg-gray-100"
                                                    : ""
                                                } hover:bg-gray-100`}
                                        >
                                            <input
                                                type="radio"
                                                name={`question-${index}`}
                                                value={q.type.split("/")[i]}
                                                checked={answers[index]?.answer === q.type.split("/")[i]}
                                                onChange={() => handleChange(index, q.type.split("/")[i])}
                                                className="mr-2 text-primary-color"
                                            />
                                            {option}
                                        </label>
                                    ))}
                                </div>
                            </div>
                        ))}
                        <button
                            type="submit"
                            className="rounded-lg bg-red-600 text-white p-3 inline-block w-[100%] text-center"
                        >
                            제출하기
                        </button>
                    </form>
                </div>
        </div>
    );
};

export default TestForm;
