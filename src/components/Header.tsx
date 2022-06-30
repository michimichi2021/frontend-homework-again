import { app } from "../firebase";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export const Header = () =>{
  const auth = getAuth(app)
  const navigate = useNavigate();
  const handleLogout = async () => {
  await signOut(auth)
  await navigate('/',{state: {message: '成功',type: 'success' }})
}
  return(
    <>
      <button onClick={handleLogout}>
        ログアウト
      </button>
    </>
  );
}