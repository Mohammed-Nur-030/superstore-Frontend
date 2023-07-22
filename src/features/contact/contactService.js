import axios from "axios";
import { base_url, config } from "../../utils/axiosConfig";

const postQuery = async (userData) => {
    try {
        console.log("userData")
        console.log(userData)
        const storage = localStorage.getItem("customer");
        const user = JSON.parse(storage);
        const token = user.token;
        console.log("token")
        console.log(token)
        const headers = {
            Authorization: `Bearer ${token}`,
        };
        const response = await axios.post(`${base_url}enquiry/create-enquiry`, userData, { headers });

        if (response.data) {
            return response.data;
        }
    } catch (error) {
        // Handle error
        console.log(error);
    }
};

export const contactService = {
    postQuery,
};
