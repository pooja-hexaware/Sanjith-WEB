import { createSlice } from '@reduxjs/toolkit';
import { fetchStoresData } from './store.actions';

const storeSlice = createSlice({
    name: 'stores',
    initialState: {
        storesList: { dataMap: {}, dataList: [], loading: false }
    },
    reducers: {
    },
    extraReducers: {
        [fetchStoresData.pending]: (state) => {
            state.storesList.loading = true
        },
        [fetchStoresData.fulfilled]: (state, actions) => {
            state.storesList.dataMap = actions.payload.dataMap;
            state.storesList.dataList = actions.payload.dataList;
            state.storesList.loading = false
        },
    },
});

export default storeSlice.reducer;
