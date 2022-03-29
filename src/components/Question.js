import React, {useState, useEffect, useRef} from 'react'
import { act } from 'react-dom/test-utils'

const Question = ({questions, onAnswerUpdate, numberOfQuestions, activeQuestion, onSetActiveQuestion, onSetStep}) => {


    const [selected, setSelected] = useState("")
    const[error, setError] = useState("")
    const radioWrapper = useRef()

    useEffect(()=>{
        const findCheckedInput = radioWrapper.current.querySelector('input:checked')
        if(findCheckedInput){
            findCheckedInput.checked = false;
        }
    }, [questions])

    const changeHandler =(e)=>{
        setSelected(e.target.value)
        if(error){
            setError("")
        }
    }
    
    const nextClickHandler =(e) =>{
            if(selected===""){
                return setError("Please select one option!")
            }
            onAnswerUpdate(prevState => [...prevState,{q: questions.question, a: selected}])
            setSelected("")
            if(activeQuestion <numberOfQuestions-1){
                onSetActiveQuestion(activeQuestion+1)
            }else{
                onSetStep(3)
            }
        }


  return (
    <div className='card'>
        <div className='card-content'>
            <div className='content'>
                <h2 className='mb-5'>{questions.question}</h2>
            <div className='control'ref={radioWrapper} >
                    { questions.choices.map((choice, i)=>(
                                  <label className='radio has-background-light' key={i}>
                                  <input type='radio' name="answer" value={choice.price} onChange={changeHandler} />
                                  {choice.price}
                              </label>
                    ))}
     
                    
            </div>
  {  error &&   <div className='has-text-danger'>{error}</div>}
            <button className='button is-link is-medium is-fullwidth mt-4' onClick={nextClickHandler}>Next</button>
            </div>

        </div>

    </div>
  )
}

export default Question