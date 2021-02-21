import React, {useState} from "react";
import "./InputTextBox.css";

function InputTextBox({color}) {
    const [email, setEmail] = useState("");

    const submitToMailingList = () => {
        //TODO: add to mailing list
    }

    return (
        <div className={`email-input input-${color}`}>
            <input type="email" placeholder="Your Duke email" onChange={e=>setEmail(e.target.value)}/>
            <i className="fas fa-arrow-right" onClick={submitToMailingList}></i>
        </div>
    )

}

export default InputTextBox;