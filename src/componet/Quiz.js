import {NavLink} from "react-router-dom";
import { React, useState,useEffect} from 'react';

function Quiz(props){
    const [category, setCategory] = useState("");
    const [difficulty, setDifficulty] = useState("easy");
    const [allCategory, setAllCategory] = useState([]);
    useEffect(() => {
        fetchCategory();
    },[]);
    let fetchCategory = () => {
        fetch("https://opentdb.com/api_category.php").then((res) => res.json()).then((data) => setAllCategory(data.trivia_categories));
    }
    return (
      <div>   
                  <div className="container w-10/12 mx-auto">
                    <h5 className="text-center text-4xl my-5">Select Category and Difficulty</h5>
                    <div className="flex pt-6">
                        <div className="flex w-6/12 mx-14">
                            <h2 className="text-xl mr-3">Select Category</h2>
                            <select className="block w-40 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300
                              rounded
                              transition
                              ease-in-out
                              m-0
                              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example" onChange={(event) => setCategory(event.target.value)}>
                                <option defaultValue>Select one option</option>
                                {
                                    allCategory.map((categorys) => (
                                        <option key={categorys.id} value={categorys.id}>{categorys.name}</option>
                                    ))
                                }
                            </select>
                        </div>
                        <div className="flex w-6/12 mx-10">
                            <h2 className="text-xl mr-3">Difficulty</h2>
                            <select className=" block w-40 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding  border border-solid border-gray-300
                              rounded
                              transition
                              ease-in-out
                              m-0
                              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" onChange={(event) =>setDifficulty(event.target.value)}>
                                <option defaultValue>Select one option</option>
                                <option value="easy">Easy</option>
                                <option value="medium">Medium</option>
                                <option value="hard">Hard</option>
                            </select>
                        </div>
                    </div>
                    <div className="text-center  ">
                        <NavLink to='/test'><button className="bg-green-600 text-white font-bold py-2 px-4 mr-36 mt-20 rounded" onClick={() => props.getAllquestionAndAnswer(category,difficulty)}>test</button></NavLink> 
                    </div>
                </div>
      </div>
    );
}

export default Quiz;