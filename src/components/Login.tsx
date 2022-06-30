import { useEffect,useState } from 'react';
import { getAuth,createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate,Link } from 'react-router-dom';
import { Alert,Button, InputLabel, TextField,Snackbar } from "@mui/material";
import { app } from "../firebase";

const Login = ()=>{
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



  return(
    <>
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

    </>
  );

};

export default Login;