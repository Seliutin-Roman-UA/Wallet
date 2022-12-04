import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const categories = createAsyncThunk(
  'transaction/category',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get('/api/transaction-categories');
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const transaction = createAsyncThunk(
  'transaction/transactions',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get('/api/transactions');
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const addTransaction = createAsyncThunk(
  'transaction/add',
  async (transaction, thunkAPI) => {
    try {
      const res = await axios.post('/api/transactions', transaction);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
// export const logIn = createAsyncThunk(
//   'auth/login',
//   async (credentials, thunkAPI) => {
//     try {
//       const res = await axios.post('/api/auth/sign-in', credentials);
//       setAuthHeader(res.data.token);

//       return res.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

// export const logOut = createAsyncThunk(
//   'auth/logout',
//   async (_, thunkAPI) => {
//   try {
//     await axios.post('/api/auth/sign-out');
//     clearAuthHeader();
//   } catch (error) {
//     return thunkAPI.rejectWithValue(error.message);
//   }
// });

// export const refreshUser = createAsyncThunk(
//   'auth/refresh',
//   async (_, thunkAPI) => {
//     const state = thunkAPI.getState();
//     const token = state.auth.token;

//     if (token === null) {
//       return thunkAPI.rejectWithValue('Unable to fetch user');
//     }

//     try {
//       setAuthHeader(token);
//       const res = await axios.get('/api/users/current');
//       return res.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );