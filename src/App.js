import logo from './logo.svg';
import './App.css';
import { db } from './firebase';
import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from 'firebase/firestore';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  let tbl = collection(db, "user")
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");



  const onSubmit = async () => {
    let data = await addDoc(tbl, { name: name, email: email, phone: phone, subject: subject, message:message })
    alert("Data success full add Firebase");
    setEmail("");
    setMessage("");
    setName("");
    setPhone("");
    setSubject("");
  }
  return (
    <div className='container-fluid'>
      <div className='Contact'>
        <div className='row justify-content-between lign-items-center'>
          <div className='w-30'>
            <div className="blog">
              <div className="row">
                <div className="blog-con justify-content-between align-items-center">
                  <div className="blog-img"><img src="https://rainbowit.net/themes/inbio/wp-content/uploads/2021/08/contact1.png" alt="" /></div>
                  <div className="con-blog row justify-content-between align-items-center">
                    <h4>Vatsal Panchani</h4>
                    <span>Web developer</span>
                    <p>i am available for freelance work. Connect with me via and call in to my
                      account.</p>
                    <h3>Phone:<span>+01234567890</span>
                      Email:<span>admin@example.com</span>
                      <div className="titel">FIND WITH ME</div>
                      <div className="social row justify-content-between align-items-center">
                        <a href="#"><i className="bi bi-facebook"></i></a>
                        <a href="#"><i className="bi bi-twitter"></i></a>
                        <a href="#"><i className="bi bi-linkedin"></i></a>
                      </div>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-8'>
            <div className="contact-form row">
              <form>
                <div className="form-line row">
                  <div className="form-name col-6">
                    <label>YOUR NAME</label>
                    <input type="text" name='name' onChange={(e) => setName(e.target.value)} value={name} />
                  </div>
                  <div className="form-name col-6">
                    <label>PHONE NUMBER</label>
                    <input type="text" name='phone' onChange={(e) => setPhone(e.target.value)} value={phone} />
                  </div>
                </div>
                <div className="form-name">
                  <label>EMAIL</label>
                  <input type="email" name='email' onChange={(e) => setEmail(e.target.value)} value={email} />
                  <label>SUBJECT</label>
                  <input type="text" name='subject' onChange={(e) => setSubject(e.target.value)} value={subject} />
                  <label>YOUR MESSAGE</label>
                  <textarea rows={6} className="sender" type="" name='message' onChange={(e) => setMessage(e.target.value)} value={message} />
                </div>
                <div className="btn row justify-content-center align-items-center" >
                  <input type='button' onClick={() => onSubmit()} value="Submit" className="order" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>


    </div>
  );
}

export default App;
