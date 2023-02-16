import React,{useState} from 'react'

export default function Textarea(props) {

  
    const capitalFirstLetter = ()=>{
            let words = text.split(" ")
            let uppercaseword = ''
            words.forEach(element => {
                uppercaseword += element.charAt(0).toUpperCase() + element.slice(1) + " "

            });
            setText(uppercaseword.trim())

    }

    const words = ()=>{
        
    //    return (text.split(/[ ]+/).length<=1&&text.length>=1)?0:(text.split(/[ ]+/).length-1)
        return text.split(/\s+/).filter((word)=>{
            return word.length!==0;
        }).length

    }


    const upperCase = ()=>{
        let newText = text.toUpperCase()
        setText(newText)

    }
    

    const lowerCase = ()=>{
        let newText = text.toLowerCase()
        setText(newText)

    }
    
    const clear = ()=>{
       setText("")
    }

    const onChangeText = (event)=>{
        setText(event.target.value)
    }

    const [text,setText] = useState("")
return (
    <div>
        <h2 className="fst-italic text-center">{props.heading}</h2> 
        
        <textarea className={`form-control bg-secondary bg-gradient p-2 text-${props.bgMode===`dark`?`white`:`black`} bg-opacity-25`} value={text} onChange={onChangeText} id="TextArea" rows="10"></textarea>
        <div className="my-2">
        <button type="button" className={`btn btn-${props.bgMode} mx-1 my-1`} onClick={upperCase}>Convert to Uppercase</button>
        <button type="button" className={`btn btn-${props.bgMode} text-${!props.bgMode} mx-1 my-1`} onClick={lowerCase}>Convert to Lowercase</button>
        <button type="button" className={`btn btn-${props.bgMode} mx-1 my-1`} onClick={clear}>Clear</button>
        <button type="button" className={`btn btn-${props.bgMode} mx-1 my-1`} onClick={(capitalFirstLetter)}>Capitalize Every first character</button>
        </div>
        <div className="container my-2">
            <h4>{text.length} characters and {words()} words</h4> 
        </div>
        <div className="container my-3">
            <div className="card">
        <div className={`card-body bg-${props.bgMode}`}>
            <h5 className={`card-title text-${!props.bgMode}`}>Your Text</h5>
            <p className={`card-text`}>{text}</p>
        </div>
        </div>
        </div>
    </div>        
    )
    // (text.split(/[ ]+/).length<=1&&text.length>=1)?0:(text.split(/[ ]+/).length-1)
}
