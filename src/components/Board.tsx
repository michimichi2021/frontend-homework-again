import { useContext } from 'react';
import { AuthContext } from "../context/AuthContext";
import { Navigate } from 'react-router-dom';
import type { AuthContextProps } from "../context/AuthContext";



const Board = () => {
  const { user } = useContext<AuthContextProps>(AuthContext);
  if(!user){
    return <Navigate to="/login" />;
  }else {
    return(
      <h1>掲示板</h1>
    );
  }
};

export default Board;
