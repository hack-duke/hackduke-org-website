import React, {useState} from "react";
import "./InputTextBox.css";

function InputTextBox({color}) {
    const [email, setEmail] = useState("");

    return (
        <div className={`email-input input-${color}`}>
            <form
                action="https://hackduke.us3.list-manage.com/subscribe/post?u=a7b4eb1bed58daee44224e855&amp;id=77768c8753"
                method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate"
                target="_ blank" noValidate>
                <input type="email" placeholder="Your Duke email" name="EMAIL" value={email} onChange={e=>setEmail(e.target.value)}/>
                <button name="subscribe" type="submit"><i className="fas fa-arrow-right"></i></button>
            </form>
        </div>
    )

}

export default InputTextBox;