import React, { useEffect, useState } from 'react';
import axios from 'axios'
import styles from './LoginPage.module.css'

function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  useEffect(() => {
    async function fetchData() {
      let user = {
        email,
        password
      }
      const str = JSON.stringify(user)
      await fetch('https://my-json-server.typicode.com/typicode/demo/profile')
      .then(resp => resp.json).then(data => console.log(data))
    }

    fetchData()
  })

  return (
    <div className={styles.loginPage}>
      <div>Login Page</div>
      <form
        action=""
        type="submit"
        onSubmit={e => e.preventDefault()}>
        <div>
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div>
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        <div>
          <button>Login</button>
        </div>
      </form>
    </div>
  );
}

export default LoginPage;