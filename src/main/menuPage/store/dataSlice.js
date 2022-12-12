import { createSlice } from '@reduxjs/toolkit';

const menuSlice = createSlice({
    name: 'menu',
    initialState: {
        menuList: { data: {}, loading: true },
        toppingsDialog: { props: { open: false, menuId: "" } }
    },
    reducers: {
        setStoreMenu: (state, action) => {
            let menuItems = {}
            console.log(menuItems)
            for (const menu of action.payload) {
                let menuObj = {
                    ...menu,
                    amount: 1
                }
                menuItems[menu._id] = menuObj
            }
            state.menuList.data = menuItems
        },
        setMenuAmount: (state, action) => {
            state.menuList.data[action.payload.id] = action.payload.object
        },
        openToppingsDialog: (state, action) => {
            state.toppingsDialog.props.open = true;
            state.toppingsDialog.props.menuId = action.payload
        },
        closeToppingsDialog: (state) => {
            state.toppingsDialog.props.open = false
        }
    },
    extraReducers: {
    },
});

export const { setStoreMenu, setMenuAmount, openToppingsDialog, closeToppingsDialog } = menuSlice.actions;

export default menuSlice.reducer;
