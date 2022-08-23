import { React, useState} from 'react'
import { NavLink } from 'react-router-dom';

function Test(props){
    const [counter, setCounter] = useState(1);
    const [select, setSelect] = useState([]);
    const [error, setError] = useState("");
    const increase = () => {
        setCounter(count => count + 1);
        setError(" ");     
    };
    const decriment = () => {
        setCounter(count => count - 1);
        setError(" ");
    };
    const selectAnswer = (answer,question,correct_answer) => {
        let userSelect = {
            question:question,
            answer:answer,
            correct_answer:correct_answer
        }
        if(select.length > 0){
             select.foreach((ele) => {
                if(ele.question === question){
                    setError("Already option is selected plz click next button");
                    setSelect(select    );
                } else {
                    setSelect(select.concat(userSelect));
                }
            })
        }
        if(select.length === 0){
            setSelect(select.concat(userSelect));
        }
    }
    props.getResult(select);
    if(props.allData){
        let question = props.allData.filter((ele,i) =>  i+1 === counter);
        let options = question[0].incorrect_answers.concat(question[0].correct_answer).sort(() => Math.random() - 0.5);
        let questions = {
            question:question[0].question,
            options:options,
            correct_answer:question[0].correct_answer
        }
    return(
        <div className="container w-10/12 mx-auto text-center">
           <div className='mt-10'>
            {
                error ? <p className='text-red-600 py-2 text-xl'>{error}</p> : ""
            }
                <h1 className='text-2xl'>{questions.question}</h1>
                 <ul className='mt-10'>
                     {
                         questions.options.map((ele,i) => (
                            <button key={i} className="bg-white  w-10/12 hover:bg-green-600 text-gray-800 font-semibold py-2 px-96 flex mx-auto border mt-5" onClick={() => selectAnswer(ele,questions.question,questions.correct_answer)}>{ele}</button>
                         ))
                     }
                 </ul>
           </div>
            <div>
               {
                 counter > 1 ? <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-10 mx-40 text-left' onClick={decriment}>Previous</button> : " "
               }
               {
                counter > 9 ? <NavLink to='/result'><button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-10 mx-40 text-right'>result</button></NavLink> : <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-10 mx-40 text-right'onClick={increase} >next</button>
               }
            </div>
        </div>
    )
    } else {
        return (
            <h2>Your are not Select category or difficulty</h2>
        )
    }
}

export default Test;