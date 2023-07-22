import { useContext } from "react";
import {AuthContext} from '../Auth_firebase/AuthContext';


const useAuth = () => useContext(AuthContext)


export default useAuth