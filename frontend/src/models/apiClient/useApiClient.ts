import { createUseApiClient } from "../tsrpc-umi/createUseApiClient";
import { apiClient } from "./apiClient";

export const useApiClient = createUseApiClient(apiClient);