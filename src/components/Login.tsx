import { useState,useContext } from 'react';
import { initializeApp } from "firebase/app";
import { firebaseConfig } from '../firebase';
import { getAuth,createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate,Link,Navigate } from 'react-router-dom';
import { Button, InputLabel, TextField } from "@mui/material";
import { AuthContext } from "../context/AuthContext";

function Login(){
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    await createUserWithEmailAndPassword(auth, email, password)
    navigate('/board',{state: {message: '成功',type: 'success' }})
  }
  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.currentTarget.value)
  }
  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.currentTarget.value)
  }
  const { isAuth } = useContext(AuthContext);

  if(!isAuth){
    return < Navigate to="/login" />;
  } else {
    return(
      <div>
        <h1>ログイン</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <InputLabel>ログイン</InputLabel>
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
              ログイン
            </Button>
            <Link to="/signup">登録済みでない方はこちらから</Link>
          </div>
        </form>
      </div>
    );
  }

};

export default Login;