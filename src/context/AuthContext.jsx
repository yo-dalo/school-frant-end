import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import Yo from "../part/utils/Yo"




const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const go = useNavigate()


  const [phoneNav, SetPhoneNav] = useState(false)




  const [resData, setResData] = useState([])
  useEffect(() => {

    Yo.get("/api/client/pages").then((res) => {
      setResData(res?.data)

    })
  }, [])


  const [resMsg, setResMsg] = useState([])
  useEffect(() => {

    Yo.get("/api/client/messages").then((res) => {
      setResMsg(res?.data?.data)

    })
  }, [])






  const [resNotification, setResNotification] = useState([])
  useEffect(() => {

    Yo.get("/api/client/notification").then((res) => {
      setResNotification(res?.data?.data)
      console.log(res?.data?.data)
    })
  }, [])


  return (
    <AuthContext.Provider value={{ resData, resMsg, resNotification, phoneNav, SetPhoneNav }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
