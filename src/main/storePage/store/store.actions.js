import { createAsyncThunk } from "@reduxjs/toolkit";
import StoreService from "../../../services/api-service/StoreService";

export const fetchStoresData = createAsyncThunk("stores/fetchStoresData", async() => {
    try {
        const stores = await StoreService.findAll();
        let storeMap = {}
        for (const store of stores.data) {
            storeMap[store._id] = store;
        }
        console.log(storeMap)
        return {
            dataMap: storeMap,
            dataList: Object.values(storeMap)
        }
    }
    catch {
        return [];
    }
})