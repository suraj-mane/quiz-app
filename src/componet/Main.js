import {useState,useEffect} from 'react';
import Quiz from "./Quiz";
import Test from "./Test";
import { Route,Routes } from 'react-router-dom';
import Result from './Result';



function Main (){
    let [allQuestion , setAllQuestion] = useState([]);
    const [category, setCategory] = useState("");
    const [difficulty, setDifficulty] = useState("easy");
    const [results, setResult] = useState([]);
    useEffect(() => {
        fetchQuestion();
    },[category,difficulty]);
    let fetchQuestion = () => {
        fetch(`https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}`).then((res) => res.json()).then((data) => setAllQuestion(data.results));
    }
    let getAllquestionAndAnswer = (category,difficulty) => {
        setCategory(category);
        setDifficulty(difficulty);
    } 
    let getResult = (result) => {
        setResult(result);
    }
    return(
        <>
        <Routes>
            <Route path='/' element={<Quiz getAllquestionAndAnswer={getAllquestionAndAnswer}/>}></Route>
            <Route path='/test' element={<Test allData={allQuestion} getResult={getResult}/>}></Route>
            <Route path='/result' element={<Result result={results}/>} ></Route>
        </Routes>
        </> 
    )
   
}

export default Main;