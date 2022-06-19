import React from 'react';
import { initializeApp } from "firebase/app";
import { firebaseConfig } from '../firebase';
import { useState } from 'react';
import { getAuth,createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate,Link } from 'react-router-dom';
import { Button, InputLabel, TextField } from "@mui/material";


function Signup(){
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    await createUserWithEmailAndPassword(auth, email, password)
    navigate('/login',{state: {message: '成功',type: 'success' }})
  }
  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.currentTarget.value)
  }
  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.currentTarget.value)
  }


  return(
    <>
    <div>
        <h1>ユーザー登録</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <InputLabel>メールアドレス</InputLabel>
            <TextField
              name="email"
              type="email"
              size="small"
              onChange={handleChangeEmail}
            />
          </div>
          <div>
            <InputLabel>パスワード</InputLabel>
            <TextField
              name="password"
              type="password"
              size="small"
              onChange={handleChangePassword}
            />
          </div>
          <div>
            <Button type="submit" variant="outlined">
              登録
            </Button>
            <a href="/login">登録済みの方はこちらからログイン</a>
          </div>
        </form>
      </div>

    </>
  );

};

export default Signup;