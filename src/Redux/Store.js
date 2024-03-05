import { configureStore} from "@reduxjs/toolkit";
import ChatUser from "./Slice/ChatUser";



const store = configureStore({
    reducer:{
      user:ChatUser
    }
})
export default store