import { app } from '../firebase';
import { useState } from 'react';
import { getAuth,createUserWithEmailAndPassword } from 'firebase/auth';


const auth = getAuth(app);
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');


const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault()
  await createUserWithEmailAndPassword(auth, email, password)
}
const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
  setEmail(e.currentTarget.value)
}
const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
  setPassword(e.currentTarget.value)
}