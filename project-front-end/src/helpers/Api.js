import axios from "axios";

const BASE_API_URL = "http://localhost:5000";

class SplitSystemApi {
  static async getEquipments() {
    const result = await axios.get(`${BASE_API_URL}/equipments`);
    return result.data;
  }

  static async searchEquipment(keyword) {
    const result = await axios.get(`${BASE_API_URL}/equipments/search?keyword=${keyword}`);
    return result.data;
  }

}

export default SplitSystemApi;
