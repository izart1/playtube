import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentSongs: [],
};

const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {},
});
