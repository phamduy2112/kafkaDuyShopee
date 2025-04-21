import { Utils } from "@/utils";

class AxiosWithAuth {
    private instance: AxiosInstance;
    
    constructor() {
        this.instance = axios.create({
            baseURL:`${Utils.urlBackend}`,
            timeout:Utils.timeAxios,
        });

        // Optional: Add interceptors here if needed
        this.instance.interceptors.request.use(
            (config:any) => {
                // Add token or auth headers here if needed
                const token = localStorage.getItem('token'); // ví dụ
                if (token) {
                    config.headers['Authorization'] = `Bearer ${token}`;
                }
                return config;
            },
            (error:any) => Promise.reject(error)
        );
    }

    getInstance(): AxiosInstance {
        return this.instance;
    }
}

export default AxiosWithAuth;
