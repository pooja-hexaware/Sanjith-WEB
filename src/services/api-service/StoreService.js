import { RequestHandler } from "../../http/requestHandler";

class StoreService extends RequestHandler {
    endPath = "/store";

    findAll() {
        return this.axiosInstance.get(this.endPath)
    }
}

export default new StoreService();