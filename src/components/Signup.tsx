import { useState, useEffect, useContext } from 'react';
import { getAuth,createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate,Link } from 'react-router-dom';
import { Button, InputLabel, TextField } from "@mui/material";
import { app } from "../firebase";


export const Signup = () => {
  const auth = getAuth(app);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
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
            <Link to="/login">登録済みの方はこちらからログイン</Link>
          </div>
        </form>
      </div>

    </>
  );

};
