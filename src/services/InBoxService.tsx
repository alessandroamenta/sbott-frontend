import axios from "../utils/axios";

const getInBox = async () => {
  try {
    const response = await axios.get("/home");
    return response;
  } catch (err) {}
};

const InBoxService = {
  getInBox,
};

export default InBoxService;
