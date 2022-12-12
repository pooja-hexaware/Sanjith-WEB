import MenuConfig from "../../main/menuPage/MenuConfig";
import StoreConfig from "../../main/storePage/StoreConfig";

const routeConfig = [
    ...StoreConfig,
    ...MenuConfig,
]

console.log(routeConfig)

export default routeConfig;