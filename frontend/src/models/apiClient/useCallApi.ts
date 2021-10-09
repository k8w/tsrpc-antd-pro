import { apiClient } from "./apiClient";
import { createUseCallApi } from "../tsrpc-umi/createUseCallApi";

export const useCallApi = createUseCallApi(apiClient);