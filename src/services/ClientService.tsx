import axios from "../utils/axios";

const getClient = async () => {
  try {
    const response = await axios.get("/home");
    return response;
  } catch (err) {}
};

const ClientService = {
  getClient,
};

export default ClientService;
