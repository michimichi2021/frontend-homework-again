// import { User } from 'firebase';
// import { useState, createContext,useEffect,ReactNode, } from 'react';
// import auth from '../components/Login';

// interface IAuthContext{
//   currentUser: User|null|undefined;
// }

// const AuthContext = createContext<IAuthContext>({currentUser:undefined});

// const AuthContextProvider = (props:any) => {
//   const [currentUser, setCurrentUser] = useState<User|null|undefined>(
//     undefined
//   );

//   useEffect(()=>{
//     auth.onAuthStateChanged(user=>{
//       setCurrentUser(user);
//     });
//   },[]);

//   return(
//     <AuthContext.Provider value={{ currentUser:currentUser}}>
//       {props.children}
//     </AuthContext.Provider>
//   )
// };

// export { AuthContext,AuthContextProvider };



