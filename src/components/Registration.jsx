import React, { useState, useEffect } from "react";

import Payment from "./Payment";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import axios from "axios";
import '../styles/reg.css';




export default function Registration() {
  
  
  const [user, setUser] = useState({
    name: "",
    age: "",
    gender: "",
    contact: "",
    fee: "",
    slot: "",
  });

  const [error, setError] = useState({});
  const [submit, isSubmit] = useState(false);
  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  

  function handleChange(e) {
    const { name, value } = e.target;

    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  }

  function submitUser(e) {
    e.preventDefault();
    setError(validate(user));
    isSubmit(true);
  }

  useEffect(() => {
    if (Object.keys(error).length === 0 && submit) {
      axios
        .post("https://flexmoneybackend-5d06.onrender.com/", user)
        .then((res) => console.log(res.data));
        

      setUser({
        name: "",
        age: "",
        gender: "",
        contact: "",
        fee: "",
        slot: "",
      });
      toast.success("Successfully register");
      setRegistrationSuccess(true);
      
    }
  }, [error]);

  const validate = (user) => {
    const errors = {};
  
    const validateField = (field, fieldName, additionalCheck) => {
      if (!user[field]) {
        errors[field] = `${fieldName} is required!`;
      } else if (additionalCheck && !additionalCheck(user[field])) {
        errors[field] = `${fieldName} is invalid!`;
      }
    };
  
    const validateAge = (age) => {
      const parsedAge = parseInt(age);
      return !isNaN(parsedAge) && parsedAge >= 18 && parsedAge <= 65;
    };
  
    const validateContact = (contact) => {
      const parsedContact = parseInt(contact);
      return (
        !isNaN(parsedContact) &&
        contact.length === 10 &&
        parsedContact >= 1000000000 &&
        parsedContact <= 9999999999
      );
    };
  
    const validateFee = (fee) => {
      const parsedFee = parseInt(fee);
      return !isNaN(parsedFee) && parsedFee === 500;
    };
  
    validateField('name', 'Name');
    validateField('age', 'Age', validateAge);
    validateField('gender', 'Gender');
    validateField('contact', 'Contact', validateContact);
    validateField('fee', 'Fees', validateFee);
    validateField('slot', 'Select a slot');
  
    return errors;
  };
  
    
  

  return (
    <div class="main">
    {registrationSuccess ? (<Payment/>
              ): (
    <section class="signup">
      
        <div class="container">
            <div class="signup-content">
                <div class="signup-form">
                    <h2 class="form-title">Admission Form</h2>
                    <form  autoComplete="off" class="register-form" id="register-form">
                        <div class="form-group">
                            <label for="name"><i class="zmdi zmdi-account material-icons-name"></i></label>
                            <input type="text" placeholder="Your Name"  name="name" value={user.name} onChange={handleChange}/>
      
                        </div>
                        <p>{error.name}</p>
                        <div class="form-group">
                            <label for="age"><i class="zmdi zmdi-email"></i></label>
                            <input
                            type="text"
                            placeholder="You Age"
                            name="age"
                            value={user.age}
                            onChange={handleChange}
                          />
                           
                        </div>
                        <p>{error.age}</p>
                        <div class="form-group">
                            <label for="gender"><i class="zmdi zmdi-lock"></i></label>
                            <input
                            type="text"
                            placeholder="Your Gender"
                            name="gender"
                            value={user.gender}
                            onChange={handleChange}
                          />
                         
                           
                        </div>
                        <p>{error.gender}</p>
                        <div class="form-group">
                            <label for="number"><i class="zmdi zmdi-lock"></i></label>
                            <input
            type="text"
            placeholder="Your Contact Number"
            name="contact"
            value={user.contact}
            onChange={handleChange}
          ></input>
                          <p>{error.contact}</p>
                           
                        </div>
                        <div class="form-group">
                            <label for="re-pass"><i class="zmdi zmdi-lock-outline"></i></label>
                            <input
                            type="text"
                            placeholder="Enter Amount"
                            name="fee"
                            value={user.fee}
                            onChange={handleChange}
                          />
                          
                        </div>
                        <p>{error.fee}</p>
                        <div class="form-group">
                            <label for="re-pass"><i class="zmdi zmdi-lock-outline"></i></label>
                            <select name="slot"  class="slot" value= {user.slot} onChange={handleChange}>
                                <option className="option1">Pick a slot</option>
                                <option>6-7 AM</option>
                                <option>7-8 AM</option>
                                <option>8-9 AM</option>
                                <option>5-6 PM</option>
                              </select>
                           
                        </div>
                        <div class="form-group form-button">
                            <button type="submit" id="signup"  class="form-submit" onClick={submitUser}>
                                Make Payment <i className="fa-solid fa-indian-rupee-sign"></i>
                              </button>
                            
                        </div>
                    </form>
                </div>
                <div class="signup-image">
                    <img src="https://media.istockphoto.com/id/1139912908/vector/woman-meditating-in-nature-and-leaves-concept-illustration-for-yoga-meditation-relax.jpg?s=612x612&w=0&k=20&c=c2hvyhWDX1hfjnfgJcghUQoB9xrEawehcB5XIwjtIqI=" alt="sing up image"/>
                    
                </div>
            </div>
        </div>
    </section>
    

)
}
<ToastContainer />
</div>
)
}
