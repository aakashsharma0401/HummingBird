import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  data: null,
  isLoading: false,
  error: null,
  response: null,
};

//Signup
export const createUser = createAsyncThunk("CreateUser", async (body) => {
  const Formdata = new FormData();
  Formdata.append("User_Name", body.User_Name);
  Formdata.append("User_number", body.User_number);
  Formdata.append("User_password", body.User_password);

  try {
    const res = await axios.post("http://localhost:8080/api/Signup", Formdata);
    return res.data;
  } catch (error) {
    console.log("error", error);
    return error;
  }
});

//Login
export const loginEmploye = createAsyncThunk("loginEmploye", async (body) => {
  const Formdata = new FormData();

  Formdata.append("User_number", body.User_number);
  Formdata.append("User_password", body.User_password);
  try {
    const response = await axios.post(
      "http://localhost:8080/api/Login",
      Formdata
    );
    return response.data;
  } catch (error) {
    console.log("error", error);
    return error;
  }
});

export const ChatUser = createSlice({
  name: "userSlice",
  initialState,
  reducer: [],
  extraReducers: (builder) => {
    //Signup
    builder.addCase(createUser.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(createUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.response = action.payload;
    });

    builder.addCase(createUser.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
    //Login
    builder.addCase(loginEmploye.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(loginEmploye.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
      if (action.payload.status == true) {

        console.log(41,action.payload.data.data );
        localStorage.setItem("authToken", action.payload.data.token);
        
      }
    });

    builder.addCase(loginEmploye.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export default ChatUser.reducer;
