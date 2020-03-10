import React, { useState }  from 'react'

function SMSHistory(props){
    // most likely need a function to get received texts from plivo api
    // local state to store data
    // map texts to li to display
    const [History, setHistory] = useState([]);
    const handleGetHistory =  ()=>{
        const configObj = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            }
        }

        console.log("getting history")
        fetch(props.backEndURL , configObj )
        .then(r => r.json())
        .then(data => {
            console.log(data)
            setHistory([ ...data.response])
        })
        console.log("history fetch was initiated")
    }

    
    
    
    
    let historyItems = ()=>{
        return History.map(item=>{ 
            // trim first and last
            let formatItem = item.slice(1,item.length-1)
            // split at commas
            formatItem = formatItem.split(", ")
            
            let itemObject = {}
            for(let i = 0;i<formatItem.length;i++){
                // split at rocket
                let keyValItem = formatItem[i].split("=>")
                // rejoin as key value
                itemObject[keyValItem[0]]=keyValItem[1]
            }
            console.log(formatItem)
            console.log(itemObject)
            // return <li>{item}</li> 
            return (<tr key={itemObject[":message_uuid"]}>
                <td>{itemObject[":api_id"]}</td>
                <td>{itemObject[":error_code"]}</td>
                <td>{itemObject[":from_number"]}</td>
                <td>{itemObject[":message_direction"]}</td>
                <td>{itemObject[":message_state"]}</td>
                <td>{itemObject[":message_time"]}</td>
                <td>{itemObject[":message_type"]}</td>
                <td>{itemObject[":message_uuid"]}</td>
                <td>{itemObject[":resource_uri"]}</td>
                <td>{itemObject[":to_number"]}</td>
                <td>{itemObject[":total_amount"]}</td>
                <td>{itemObject[":total_rate"]}</td>
                <td>{itemObject[":units"]}</td>
            </tr>)
        })
    }
    const phoneNumber = "15123573063"

    const historyDisplay = ()=>{

    }

    return(
        
        <div>
            <p>The messages received by Phone number #</p>
            <button id="get-history" onClick={handleGetHistory} >Get History</button>
            <ol>
                
            </ol>
            <table >
                <thead>
                    <tr> 
                        <th colSpan="13">
                        {`${phoneNumber} message history`}
                        </th>
                    </tr>
            <tr>
            <th>api_id</th>
            <th>error_code</th>
            <th>from_number</th>
            <th>message_direction</th>
            <th>message_state</th>
            <th>message_time</th>
            <th>message_type</th>
            <th>message_uuid</th>
            <th>resource_uri</th>
            <th>to_number</th>
            <th>total_amount</th>
            <th>total_rate</th>
            <th>units</th>
              
            </tr>
          </thead>
          <tbody>
            {History.length>0 ? historyItems() :
                <tr><td colSpan="13">No current data</td> </tr>}
          </tbody>
        </table>
        </div>
    )
}

export default SMSHistory