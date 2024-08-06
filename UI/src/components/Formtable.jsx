import React from 'react'
import "../App.css"
import { MdClose } from 'react-icons/md'

const Formtable = ({ handleSubmit, handleOnChange, handleclose, rest }) => {
  
// Custom onChange handler for mobile number validation
const handleMobileChange = (e) => {
  const { name, value } = e.target;
  if (/^\d{0,10}$/.test(value)) { // Allows only digits and limits to 10 digits
    handleOnChange(e);
  }
};


  return (
    // <div className="addContainer">
    <div className="addContainer flex justify-center items-center min-h-screen p-4">
            <form onSubmit={handleSubmit}>
            <div className="close-btn" onClick={handleclose}><MdClose/></div>
              <label htmlFor="username">Name : </label>
              <input type="text" id="username" name="username" className='border-2 rounded-md h-[35px]' onChange={handleOnChange} value={rest.username} required/>

              <label htmlFor="email">Email : </label>
              <input type="email" id="email" name="email" className='border-2 rounded-md h-[35px]' onChange={handleOnChange} value={rest.email} required/>

              <label htmlFor="password">Password : </label>
              <input type="password" id="password" name="password" className='border-2 rounded-md h-[35px]' onChange={handleOnChange} value={rest.password} required/>

              {/* <label htmlFor="userType">User Type : </label>
              <input type="text" id="userType" name="userType" className='border-2 rounded-md h-[35px]' onChange={handleOnChange} value={rest.userType}/> */}
        
        <label htmlFor="userType">User Type: </label>
        <select
          id="userType"
          name="userType"
          className="border-2 rounded-md h-[35px]"
          onChange={handleOnChange}
          value={rest.userType}
        >
          <option value="" disabled>Select User Type</option>
          <option value="user">User</option>
          <option value="Manager">Manager</option>
        </select>


              <label htmlFor="userRoll">Department : </label>
              <input type="text" id="userRoll" name="userRoll" className='border-2 rounded-md h-[35px]' onChange={handleOnChange} value={rest.userRoll} required/>


              <label htmlFor="mobile">Mobile : </label>
              <input type="number" id="mobile" name="mobile" className='border-2 rounded-md h-[35px]' onChange={handleMobileChange} value={rest.mobile} required/>

              <button className="btn" type='submit'>Submit</button>
            </form>
    </div>
  )
}

export default Formtable