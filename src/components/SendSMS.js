import React, { useState } from 'react'

function SendSMS(props){
    // create function to send 
    // create local state for message and number 
    // validate phone number
    // validate text lenght and lack of special characters
    // enable send with validation
    const [SMSNumber, setSMSNumber] = useState("");
    const [SMSText, setSMSText] = useState("");

    const handleSMSText = (event)=>{
        setSMSText(event.target.value)
    }
    const handleSMSNumber = (event)=>{
        setSMSNumber(event.target.value)
    }

    const sendMessage = ()=>{
        const configObj = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({ 'SMSNumber': SMSNumber, 'SMSText': SMSText })
        }
        console.log("sending that for you")
        fetch(props.backEndURL , configObj )
        .then(r => r.json())
        .then(data => {
            console.log(data)
        })
        console.log("fetch was initiated")
    }

    const handleSend = ()=>{
        sendMessage()
    }

    return (
        <div>
            <p>Enter a new text message to send.</p>
            <label htmlFor="SMSText">Message:</label>
            <input type="text" id="SMSText" placeholder="Your message text" onChange={handleSMSText} value={SMSText} >
            </input>
            <label htmlFor="SMSNumber">To Phone Number:</label>
            <input type="text" id="SMSNumber" placeholder="1234567890" onChange={handleSMSNumber} value={SMSNumber}></input>
            <button id="send-sms" onClick={handleSend} >Send SMS message</button>
        </div>
    )
}

export default SendSMS