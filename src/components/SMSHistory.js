import React from 'react'

function SMSHistory(){
    // most likely need a function to get received texts from plivo api
    // local state to store data
    // map texts to li to display
    return(
        <div>
            <p>The messages received by Phone number #</p>
            <ol>
                <li>$text message from $phonenumber</li>
            </ol>
        </div>
    )
}

export default SMSHistory