// service

import ClientService from "../../../services/ClientService";

// store
import { dispatch } from "../../store";
import { getClientSuccess } from "./clientSlice";

export function addAlternatorAction() {
  return async () => {
    try {
      const response = await ClientService.getClient();
      dispatch(getClientSuccess(response));
    } catch (error) {
      console.log("error");
    }
  };
}
