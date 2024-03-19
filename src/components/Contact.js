import React from 'react'
import '../css/Contact.css'
export default function Contact() {
  return (
    <div className='lastbox'>
        <div className="contele">
            <h4 style={{paddingTop:'4vh'}}>Let's Connect</h4>
            <p style={{paddingLeft:'20px'}}>
                I am currently looking for new oppurtunities, my inbox will always be open. 
                Whether you have any questions, or just want to say me Hi, I'll always be best to get back to you
            </p>
        </div>
        <div className="contele">
            <label for="">Your Email</label><br />
            <input type="text" /><br /><br />
            <label for="">Subject</label><br />
            <input type="text" /><br /><br />
            <label for="">Message</label><br />
            <textarea name="" id="" rows="3"></textarea>
            <br />
            <button type='submit' className="btn btn-primary my-3">Submit</button>
        </div>
    </div>
  )
}
