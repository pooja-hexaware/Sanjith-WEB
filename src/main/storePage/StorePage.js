import withReducer from "../../store/withReducer";
import { useDispatch, useSelector } from "react-redux";
import reducer from "./store";
import { useEffect } from "react";
import { fetchStoresData } from "./store/store.actions";
import { Button, Card, CardActions, CardContent, Divider, Typography } from "@mui/material";
import "./storePage.css";
import { useNavigate } from "react-router-dom";

function StorePage() {

    const dispatch = useDispatch();
    const navigate = useNavigate(); 

    const stores = useSelector(state => state.stores.data.storesList.dataList);

    useEffect(() => {
        dispatch(fetchStoresData());
    }, [dispatch])

    return (
        <>
            <Typography variant="h5" fontWeight={200}>Find A Store</Typography>
            <br />
            <div className="storeContent">
                {stores?.map((store, index) => {
                    return (
                        <Card key={index} sx={{ minWidth: 275 }} onClick={() => navigate(`/store/${store._id}/menu`)}>
                            <CardContent>
                                <div className="storeHeader">
                                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                        {store.name}
                                    </Typography>
                                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                        {store.distance} Mi.
                                    </Typography>
                                </div>
                                <div className="storeCard">
                                    <Typography variant="body2">
                                        Address : {store.address},{store.zip}
                                    </Typography>
                                    <hr />
                                    <Divider />
                                    <hr />
                                    <Typography variant="body2">
                                        Store : {store.storePhone}
                                    </Typography>
                                    <Typography variant="body2">
                                        Kitchen : {store.kitchenPhone}
                                    </Typography>
                                </div>
                            </CardContent>
                            <CardActions>
                                {/* <Button size="small">Learn More</Button> */}
                            </CardActions>
                        </Card>
                    )
                })}
            </div>
        </>
    )
}

export default StorePage;