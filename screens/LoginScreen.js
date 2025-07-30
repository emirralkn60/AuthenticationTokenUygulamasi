import { StyleSheet, Text, View,Alert } from 'react-native'
import React,{useState,useContext} from 'react'
import AuthContent from '../components/AuthContent'
import { createUser, login } from '../util/auth'
import Loading from '../components/Loading'
import { AuthContext } from '../store/auth-context'

export default function LoginScreen() {

  const [isAuthanticating, setIsAuthanticating] = useState(false)
  const authContext=useContext(AuthContext);
  
    async function loginHandler({ email, password }) {
      setIsAuthanticating(true);
      try {
        const token= await login(email, password);
        authContext.authenticate(token);
      } catch (error) {
        Alert.alert('Giriş yapılamadı!','Lütfen bilgileri kontrol ediniz.');
      }
      
      setIsAuthanticating(false);
    }
    if(isAuthanticating)
    {
      return <Loading message="Giriş Yapılıyor ..."/>
    }
  return <AuthContent isLogin onAuthenticate={loginHandler}/>
}

const styles = StyleSheet.create({})