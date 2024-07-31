import React from 'react'
import "../App.css"
import { MdClose } from 'react-icons/md'

const Formtable = ({handleSubmit,handleOnChange,handleclose,rest}) => {
  return (
    <div className="addContainer">
            <form onSubmit={handleSubmit}>
            <div className="close-btn" onClick={handleclose}><MdClose/></div>
              <label htmlFor="username">Name : </label>
              <input type="text" id="username" name="username" className='border-2 rounded-md h-[35px]' onChange={handleOnChange} value={rest.username}/>

              <label htmlFor="email">Email : </label>
              <input type="email" id="email" name="email" className='border-2 rounded-md h-[35px]' onChange={handleOnChange} value={rest.email}/>

              <label htmlFor="password">Password : </label>
              <input type="password" id="password" name="password" className='border-2 rounded-md h-[35px]' onChange={handleOnChange} value={rest.password}/>

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
              <input type="text" id="userRoll" name="userRoll" className='border-2 rounded-md h-[35px]' onChange={handleOnChange} value={rest.userRoll}/>


              <label htmlFor="mobile">Mobile : </label>
              <input type="number" id="mobile" name="mobile" className='border-2 rounded-md h-[35px]' onChange={handleOnChange} value={rest.mobile}/>

              <button className="btn" type='submit'>Submit</button>
            </form>
    </div>
  )
}

export default Formtable