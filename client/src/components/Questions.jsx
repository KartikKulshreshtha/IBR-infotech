// import React from 'react'

import { useState } from "react";
import axios from "axios";

const Questions = () => {
  const [currentState, setCurrentState] = useState(1);
  const [name, setName] = useState("")
  const [dob, setDob] = useState("")
  const [state, setState] = useState("")
  const [country, setCountry] = useState("India")
  const [interests, setInterest] = useState([])
  const handleClick = (type) => {
    if (type === "previous") {
      if (document.getElementById("1").style.display !== "none") {
        document.getElementById("1").style.display = "none";
        document.getElementById("5").style.display = "block";
        setCurrentState(5);
      } else if (document.getElementById("2").style.display !== "none") {
        document.getElementById("2").style.display = "none";
        document.getElementById("1").style.display = "block";
        setCurrentState(1);
      } else if (document.getElementById("3").style.display !== "none") {
        document.getElementById("3").style.display = "none";
        document.getElementById("2").style.display = "block";
        setCurrentState(2);
      } else if (document.getElementById("4").style.display !== "none") {
        document.getElementById("4").style.display = "none";
        document.getElementById("3").style.display = "block";
        setCurrentState(3);
      } else {
        document.getElementById("5").style.display = "none";
        document.getElementById("4").style.display = "block";
        setCurrentState(4);
      }
    } else if(type === "next") {
      if (document.getElementById("1").style.display !== "none") {
        document.getElementById("1").style.display = "none";
        document.getElementById("2").style.display = "block";
        setCurrentState(2);
      } else if (document.getElementById("2").style.display !== "none") {
        document.getElementById("2").style.display = "none";
        document.getElementById("3").style.display = "block";
        setCurrentState(3);
      } else if (document.getElementById("3").style.display !== "none") {
        document.getElementById("3").style.display = "none";
        document.getElementById("4").style.display = "block";
        setCurrentState(4);
      } else if (document.getElementById("4").style.display !== "none") {
        document.getElementById("4").style.display = "none";
        document.getElementById("5").style.display = "block";
        setCurrentState(5);
      }
    }
    else{
        axios.post("http://localhost:3000/api/add", {
            name, dob, state, country, interests
        }).then((res) => {
            if(res.data.success){
                alert(res.data.message)
                setName("")
                setDob("")
                setState("")
                setInterest("")
                document.getElementById("1").style.display = "block"
                document.getElementById("2").style.display = "none"
                document.getElementById("3").style.display = "none"
                document.getElementById("4").style.display = "none"
                document.getElementById("5").style.display = "none"
            }
            else{alert(res.data.message)}
        })
    }
  };
  return (
    <div className="main-container">
      <div className="for-question1" id="1">
        <label htmlFor="q1">Q 1: What is your name?</label>
        <input type="text" onChange={(e) => setName(e.target.value)}/>
      </div>
      <div className="for-question2" style={{ display: "none" }} id="2">
        <label htmlFor="q2">Q:2 Date of birth?</label>
        <input type="date" onChange={(e) => setDob(e.target.value)}/>
      </div>
      <div className="for-question3" style={{ display: "none" }} id="3">
        <label htmlFor="q3">Q: 3 In which State do you live?</label>
        <select name="statelist" onChange={(e) => setState(e.target.value)}>
          <option value="Andaman and Nicobar Islands">
            Andaman and Nicobar Islands
          </option>
          <option value="Andhra Pradesh">Andhra Pradesh</option>
          <option value="Arunachal Pradesh">Arunachal Pradesh</option>
          <option value="Assam">Assam</option>
          <option value="Bihar">Bihar</option>
          <option value="Chandigarh">Chandigarh</option>
          <option value="Chhattisgarh">Chhattisgarh</option>
          <option value="Dadra and Nagar Haveli">Dadra and Nagar Haveli</option>
          <option value="Daman and Diu">Daman and Diu</option>
          <option value="Delhi">Delhi</option>
          <option value="Goa">Goa</option>
          <option value="Gujarat">Gujarat</option>
          <option value="Haryana">Haryana</option>
          <option value="Himachal Pradesh">Himachal Pradesh</option>
          <option value="Jammu and Kashmir">Jammu and Kashmir</option>
          <option value="Jharkhand">Jharkhand</option>
          <option value="Karnataka">Karnataka</option>
          <option value="Kerala">Kerala</option>
          <option value="Lakshadweep">Lakshadweep</option>
          <option value="Madhya Pradesh">Madhya Pradesh</option>
          <option value="Maharashtra">Maharashtra</option>
          <option value="Manipur">Manipur</option>
          <option value="Meghalaya">Meghalaya</option>
          <option value="Mizoram">Mizoram</option>
          <option value="Nagaland">Nagaland</option>
          <option value="Orissa">Orissa</option>
          <option value="Pondicherry">Pondicherry</option>
          <option value="Punjab">Punjab</option>
          <option value="Rajasthan">Rajasthan</option>
          <option value="Sikkim">Sikkim</option>
          <option value="Tamil Nadu">Tamil Nadu</option>
          <option value="Tripura">Tripura</option>
          <option value="Uttaranchal">Uttaranchal</option>
          <option value="Uttar Pradesh">Uttar Pradesh</option>
          <option value="West Bengal">West Bengal</option>
        </select>
      </div>
      <div className="for-question4" style={{ display: "none" }} id="4">
        <label htmlFor="q4">Q:4 In which country do you live?</label>
        <select>
          <option value="india">India</option>
        </select>
      </div>
      <div className="for-question5" style={{ display: "none" }} id="5">
        <label htmlFor="">Q:5 Your interests?</label>
        <div className="hobbies">
          <span>Cricket</span>
          <input type="checkbox" onChange={(e) => setInterest(e.target.value)} value="cricket" name="Cricket" id="" />
          <span>Web Development</span>
          <input type="checkbox" onChange={(e) => setInterest(e.target.value)} value="web Development" name="Web Development" id="" />
          <span>Coding</span>
          <input type="checkbox" onChange={(e) => setInterest(e.target.value)} value="coding" name="Coding" id="" />
          <span>Problem Solving</span>
          <input type="checkbox" onChange={(e) => setInterest(e.target.value)} value="problem solving" name="Problem Solving" id="" />
          <span>Chess</span>
          <input type="checkbox" onChange={(e) => setInterest(e.target.value)} value = "chess" name="Chess" id="" />
        </div>
      </div>

      <div className="footer">
        <button
          onClick={() => {
            handleClick("previous");
          }}
        >
          Previous
        </button>
        <p>{currentState}/5</p>
        <button
          onClick={() => {
            if(currentState === 5){
                handleClick("Submit")
            }
            else{
                handleClick("next")
            }
          }}
        >
          {currentState === 5 ? "Submit" : "Next"}
        </button>
      </div>
    </div>
  );
};

export default Questions;
