import React from 'react'
import "./LogoutForm.scss";

const LogoutForm = (props) => {
  return (
    <div className="LogoutForm">
      <div class="LogoutForm__Content">
        <div>
            <h2>Congratulations</h2>
            <h3>You have successfully logged in.</h3>
        </div>
        <button className="" onClick={props.logoutUser}>sign out</button>      
      </div>
    </div>
  )
}

export default LogoutForm
