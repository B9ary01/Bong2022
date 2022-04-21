import React, {useState} from "react";
import { useNavigate } from "react-router";


export default function ContactScreen() {
  const navigate=useNavigate();

  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }


  const sendMsg=(e) =>{
    e.preventDefault();
    alert("message sent!")
    navigate(`/`);
    };
    
   
    
  
   
    
    return (
      <div>
        <h1>Contact Us</h1>

 <form className="form" onSubmit={sendMsg}>

    <div className="name">

       <label for="firstName">First name</label>
       <input
            type="text"
            name="firstName" value={inputs.firstName || ""} 
            onChange={handleChange}
            required
       />
       <label for="lastName">Last name</label>
       <input
            type="text"
            name="lastName" value={inputs.lastName || ""} 
            onChange={handleChange}
            required
       />
       <label for="email">Email</label>
<input
     type="email"
     name="email"
    placeholder="abcd@example.com" value={inputs.email || ""} 
    onChange={handleChange}
      required
/>
<label for="message">Message</label>

<textarea
  placeholder="Start typing..."
  className="message"
  name="message" value={inputs.message} 
  onChange={handleChange} required
/>
<br/>

<button type="submit" >Send</button>

    </div>
 </form>

      </div>
    );
  }