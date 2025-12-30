import React from 'react'

function Login() {
  return (
    <div>
            <h1>Login Page</h1>
            <div className='container'>
              <form>
                <div>
                    <label htmlFor="fullname">FullName:</label>
                    <input type="text" />
                </div>
              </form>
            </div>
    </div>
  )
}

export default Login