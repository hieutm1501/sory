/* eslint-disable @typescript-eslint/no-explici */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllPitch } from "../../api/pitch";



const initialState = {
    pitchs: [],
    isLoading: false,
};

export const fetchAllPitch = createAsyncThunk(
    "pitch/fetchAllPitch",
    async (_, thunkAPI) => {
        try {
            const { data } = await getAllPitch();

            console.log({ data });

            return data.data;
            // eslint-disable-next-line @typescript-eslint/no-explici
        } catch (error) {
            return thunkAPI.rejectWithValue({ message: error.message });
        }
    }
);



const pitchSlice = createSlice({
    name: "pitch",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchAllPitch.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchAllPitch.fulfilled, (state, action) => {
                state.pitchs = action.payload;
                state.isLoading = false;
            })
            .addCase(fetchAllPitch.rejected, (state) => {
                state.isLoading = false;
            });

    },
});

export default pitchSlice.reducer;
