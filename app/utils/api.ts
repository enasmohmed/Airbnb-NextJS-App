import axios from "axios";


export const getExplore = async () => {
    try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/b/4G1G`);
        return response.data;
    } catch (error) {
        console.error("Error fetching explore data:", error);
    }
}   


export const getLive = async () => {
    try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/b/VHHT`);
        return response.data;
    } catch (error) {
        console.error("Error fetching live data:", error);
    }
}   

export const getSearchResult = async () => {
    try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/b/5NPS`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};