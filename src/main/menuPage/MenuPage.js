import { useDispatch, useSelector } from "react-redux";
import { Button, Card, CardActions, CardContent, InputAdornment, TextField, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import "./menuPage.css";
import { useEffect } from "react";
import { openToppingsDialog, setMenuAmount, setStoreMenu } from "./store/dataSlice"
import { fetchStoresData } from "../storePage/store/store.actions";
import AddIcon from '@mui/icons-material/Add';
import ToppingsiDialog from "./ToppingsDialog";

function MenuPageContent() {

    const dispatch = useDispatch();

    const { storeid } = useParams()
    const storesMap = useSelector(state => state.stores.data.storesList.dataMap)

    const menuItems = useSelector(state => state.menu.data.menuList.data)

    useEffect(() => {
        if (Object.values(storesMap).length === 0) {
            dispatch(fetchStoresData()).then((res) => {
                dispatch(setStoreMenu(res.payload.dataMap[storeid]?.menuItems));
                for (const menuItem of res.payload.dataMap[storeid]?.menuItems) {
                    console.log(menuItem?.toppings);
                    dispatch(setMenutoppings())
                } 
            })
        }
        else {
            dispatch(setStoreMenu(storesMap[storeid].menuItems))
        }
    }, [dispatch])

    return (
        <>
            <br />
            <Card className="menuContent" sx={{ width: "50vw" }} style={{ margin: "0px auto", backgroundColor: "#1B4F72", color: "#FFFFFF" }}>
                <CardContent>
                    <div className="menuCard">
                        <Typography sx={{ fontSize: 30 }} style={{ textAlign: "center" }} gutterBottom>
                            Good Food Great Time
                        </Typography>
                        <Typography variant="body2">
                            Our Chefs at WiWi make delicious food selections every week - you pick, we cook and deliver
                        </Typography>
                    </div>
                </CardContent>
            </Card>
            <br />
            <div className="menuContent">
                {Object.values(menuItems)?.map((menu, index) => {
                    return (
                        <>
                            <Card key={index} className="menuCard" sx={{ width: "70vw" }}>
                                <CardContent>
                                    <div className="menuHeader">
                                        <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
                                            {menu.name}
                                        </Typography>
                                        <TextField
                                            type="number"
                                            size="small"
                                            value={menuItems[menu._id]?.amount}
                                            onChange={(ev) => {
                                                dispatch(setMenuAmount({
                                                    id: menu._id,
                                                    object: {
                                                        ...menu,
                                                        amount: ev.target.value
                                                    }
                                                }))
                                            }}
                                        />
                                    </div>
                                    <div className="menuCard">
                                        <Typography variant="body2">
                                            {menu.description}
                                        </Typography>
                                    </div>
                                    <br />
                                    <div className="menuBody2">
                                        <Typography variant="body2" color="error" fontWeight={700}>
                                            $&nbsp;{menu.price}
                                        </Typography>
                                        &nbsp;
                                        <Button size="small" variant="contained" style={{ backgroundColor: "#1B4F72", borderRadius: "20px", marginLeft: "10px" }}
                                            onClick={() => dispatch(openToppingsDialog(menu._id))}
                                            startIcon={<AddIcon />}>
                                            Toppings
                                        </Button>
                                    </div>
                                </CardContent>
                                <CardActions className="menuActions">
                                    <Button size="small" variant="contained" style={{ backgroundColor: "#1B4F72", borderRadius: "20px" }} startIcon={<AddIcon />}>Add</Button>
                                </CardActions>
                            </Card>
                            <br />
                            <br />
                        </>
                    )
                })}
            </div>
        </>
    )
}

function MenuPage() {
    return (
        <>
            <MenuPageContent />
            <ToppingsiDialog />
        </>
    )
}
export default MenuPage;