import React from 'react'
import { useState } from 'react';
import Sidebar from './SideBar';
import Footer from './Footer';


const Quizz = () => {
    var questionStore = [
        {
            Question: "What of the following is used in React.js to increase performance?",
            Answers: [
                { Answer: "A)Virtual DOM", isCorrect: true },
                { Answer: "B)Original DOM", isCorrect: false },
                { Answer: "C)None of the above", isCorrect: false },
                { Answer: "D)Both A and B", isCorrect: false }
            ]
        },
        {
            Question: "Which of the following is a linear data structure?",
            Answers: [
                { Answer: "A)AVL trees", isCorrect: false },
                { Answer: "B)Array", isCorrect: true },
                { Answer: "C)Binary trees", isCorrect: false },
                { Answer: "D)Graphs", isCorrect: false }
            ]
        }, {
            Question: "Which data structure is mainly used for implementing the recursive algorithm?",
            Answers: [
                { Answer: "A)Stack", isCorrect: true },
                { Answer: "B)Queue", isCorrect: false },
                { Answer: "C)Array", isCorrect: false },
                { Answer: "D)List", isCorrect: false }
            ]
        },
        {
            Question: "Which of the following is a Divide and Conquer algorithm?",
            Answers: [
                { Answer: "A)Merge sort", isCorrect: true },
                { Answer: "B)Bubble sort", isCorrect: false },
                { Answer: "C)Merge sort", isCorrect: false },
                { Answer: "D)Selection sort", isCorrect: false }
            ]
        },
        {
            Question: "How can you measure the efficiency of an the algorithm?",
            Answers: [
                { Answer: "A)Processor and memory", isCorrect: false },
                { Answer: "B)Data and space", isCorrect: false },
                { Answer: "C)Time and space", isCorrect: true },
                { Answer: "D)Complexity and capacity", isCorrect: false }
            ]
        }
    ]

    //useState Hook
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);

    const handleAnswerResponse = (isCorrect) => {
        if (isCorrect) {
            setScore(score + 1);
        }

        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questionStore.length) {
            setCurrentQuestion(nextQuestion);
        }
        else {
            setShowScore(true);
        }
    }

    const resetQuiz = () => {
        setCurrentQuestion(0);
        setScore(0);
        setShowScore(false);
    }

    return (
        <>
            <div className='P-12'>
                <h1>Take  a quizz to boost your score</h1>
            </div>

            <div className='bg-[#EDF4F9] text-black rounded-3xl p-5 justify-evenly w-2/4 flex mb-48 mt-16 ml-24'>

                {showScore ? (
                    <div className='flex text-2xl items-center'>
                        You have scored {score} out of {questionStore.length}
                        <>
                            <button className='bg-[#1D6697]' type="submit" onClick={resetQuiz}>Take test again!!</button>
                        </>
                    </div>
                )
                    : (
                        <>
                            <div className='relative w-full'>
                                <div className='question-count'>
                                    <span>{currentQuestion + 1}</span>/{questionStore.length}
                                </div>

                                <div className='question-text'>
                                    {questionStore[currentQuestion].Question}
                                </div>
                            </div>

                            <div className='w-full flex flex-col justify-between'>
                                {questionStore[currentQuestion].Answers.map((answer) =>
                                (
                                    <button className='bg-[#1D6697] text-2xl rounded-3xl m-2.5 w-full' onClick={() => handleAnswerResponse(answer.isCorrect)}>{answer.Answer}</button>
                                ))}
                            </div>
                        </>
                    )
                }

            </div>
            <Footer/>

        </>
        
    );
}

export default Quizz;
