/* eslint-disable react/prop-types */
import React, { useReducer } from 'react'
import { validateEmail } from '../utils';
import Button from '../common/Button';
import './reservations.css'


const updateTimes = (state, action) => {
 switch (action.type) {
    case '134': {
        return[ "17:00", "19:00", "20:00" ];
    }
    case 'all': {
        return state;
    }
    case "56":{
        return [  "21:00", "22:00"];
    }
  }
}
const initializeTimes = [ "17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]

const ReserveForm = ({setShow, submit}) => {
    const [date, setDate] = React.useState("");
    const [time, setTime] = React.useState("");
    const [guests, setGuests] = React.useState(1);
    const [name, setName] = React.useState(""); 
    const [email, setEmail] = React.useState(""); 
    const [occasion, setOccation] = React.useState("");
    const [state, dispatch] = useReducer(updateTimes, initializeTimes);
    
    const getIsFormValid = () => { 
    return ( 
        name && 
        validateEmail(email) 
    ); 
    }; 
    
    const clearForm = () => { 
    setName(""); 
    setEmail(""); 
    setGuests(1);
    setDate("");
    setTime("");
    setOccation("")
    }; 
    
    const handleSubmit = (e) => { 
    e.preventDefault(); 
    getIsFormValid();
    setShow(true);
    setTimeout(() => {
        setShow(false)
        submit()
      }, 3000)
    clearForm(); 
    }; 

    const times = (value) =>{
        setDate(value)
        const availtimes = ['123', 'all', '56']
        dispatch({type : availtimes[Math.floor(Math.random() * 3)]})
    }
    return ( 
    <div> 
        <form onSubmit={handleSubmit}>
            <fieldset> 
            <h2>Date and Time</h2> 
            <label htmlFor="res-date">Choose date</label>
            <input type="date" id="res-date" value={date} onChange={(e) => times(e.target.value)} /> <br/>
            <label htmlFor="res-time">Choose time</label>
            <select id="res-time " value={time} onChange={(e) => setTime(e.target.value)}>
                {/* <option>17:00</option>
                <option>18:00</option>
                <option>19:00</option>
                <option>20:00</option>
                <option>21:00</option>
                <option>22:00</option> */}
                {state.map(item => <option>{item}</option>)}
            </select>
            <br/>
            <label htmlFor="guests">Number of guests</label>
            <input type="number" placeholder="1" min="1" max="10" id="guests" value={guests} onChange={(e) => setGuests(e.target.value)}/>
            <br />
            <label htmlFor="occasion">Occasion</label>
            <select id="occasion" value={occasion} onChange={(e) => setOccation(e.target.value)}>
                <option>Birthday</option>
                <option>Anniversary</option>
                <option>Other</option>
            </select>
            <br/>
            </fieldset>
            <fieldset> 
            <h2>Details</h2> 
            <div className="Field"> 
            <label> Name </label> 
            <input 
                value={name} 
                onChange={(e) => { 
                setName(e.target.value); 
                }} 
                placeholder="Name" 
            /> 
            </div> 
            <div className="Field"> 
            <label> Email address</label> 
            <input 
                value={email} 
                onChange={(e) => { 
                setEmail(e.target.value); 
                }} 
                placeholder="Email address" 
            /> 
            </div> 
            <div className='button-reserve'>
                <Button onClick="#" name={"Reserve a table"} /> 
            </div> 
        </fieldset> 
        </form> 
    </div> 
    )
}

export default ReserveForm