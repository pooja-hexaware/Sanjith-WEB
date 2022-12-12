import { Avatar, Checkbox, Dialog, DialogTitle, List, ListItem, ListItemAvatar, ListItemText } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { closeToppingsDialog } from "./store/dataSlice";
import PersonIcon from '@mui/icons-material/Person';
import { blue } from '@mui/material/colors';
import { useEffect, useState } from "react";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

function ToppingsiDialog() {

    const dispatch = useDispatch()

    const dialogConfig = useSelector(state => state.menu.data.toppingsDialog)

    const menuItems = useSelector(state => state.menu.data.menuList.data)

    const [selectedToppings, setSelectedToppings] = useState([])

    const handleClose = () => {
        dispatch(closeToppingsDialog());
    };

    useEffect(() => {
        console.log(selectedToppings)
    }, [selectedToppings])

    return (
        <Dialog onClose={handleClose} open={dialogConfig.props.open}>
            <DialogTitle>Customize With Toppings</DialogTitle>
            <List sx={{ pt: 0 }}>
                {menuItems[dialogConfig.props.menuId]?.toppings?.map((topping, index) => (
                    <ListItem button key={index} style={{ padding: "20px" }}>
                        <ListItemAvatar>
                            <Avatar sx={{ bgcolor: blue[100], color: blue[600] }}>
                                <PersonIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={topping?.name} />
                        <Checkbox
                            checked={selectedToppings.includes(topping._id) ? true : false}
                            onChange={(ev) => {
                                if (ev.target.checked) {
                                    setSelectedToppings([...selectedToppings, topping._id])
                                }
                                else {
                                    console.log(ev.target.checked, topping._id);
                                    console.log(selectedToppings.filter((toppingData) => toppingData !== topping._id));
                                    setSelectedToppings(selectedToppings.filter((toppingData) => toppingData !== topping._id))
                                }
                            }}
                            inputProps={{ 'aria-label': 'controlled' }}
                        />
                    </ListItem>
                ))}
            </List>
        </Dialog>
    );
}

export default (ToppingsiDialog);