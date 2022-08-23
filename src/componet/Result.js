
function Result(props){
    return(
        <div className="container w-10/12 mx-auto">
            <div className="flex mt-5">
                 <h1 className="text-2xl border-2 border-black px-2 w-1/2">Question</h1>
                 <h1 className="text-2xl border-2 border-black px-2 w-1/5">Answer</h1>
                 <h1 className="text-2xl border-2 border-black px-2 w-1/5">Correct_answer</h1>
            </div>
            {
                props.result.map((ele,i) => (
                       <div className="flex border-solid border-2 border-black" >
                            <div className=" px-2 w-1/2">
                                 <h3>{ele.question}</h3>
                             </div>
                             <div className=" p-2 w-1/5">
                                 <h4>{ele.answer}</h4>
                             </div>
                             <div className=" p-2 w-1/5">
                                 <h4>{ele.correct_answer}</h4>
                             </div>
                             <div className="py-2">
                                {
                                    ele.answer === ele.correct_answer ? <p className="text-grren-800 text-center"><i className="fa-solid fa-circle-check"></i></p> : <p className="text-red-900 text-center"><i className="fa-solid fa-circle-xmark"></i></p>
                                }
                             </div>
                       </div>
                ))
            }
        </div>
    )
}

export default Result;