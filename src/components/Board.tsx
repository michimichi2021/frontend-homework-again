import { useEffect,useContext } from "react";
import { Header } from "./Header";
// import { AuthContext } from "../context/AuthContext";


export const Board = () => {
  // const { currentUser } = useContext(AuthContext);

  // useEffect(() => {
  //   // currentUserがnullの場合はログイン画面へリダイレクト
  //   currentUser === null && props.history.push("/login");
  //  }, [currentUser]);


  return(
    <>
      <Header/>
      <h1>掲示板</h1>
    </>
  );
};

