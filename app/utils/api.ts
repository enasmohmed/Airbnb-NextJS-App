import axios from "axios";
import { SearchResultData } from "../types/app";


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




export const getSearchResult = async (): Promise<SearchResultData> => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/b/5NPS`);
    
        if (!res.ok) {
            throw new Error("Failed to fetch search results");
    }

        const searchResultData = await res.json();
        return searchResultData;
    } catch (error) {
        console.error("Error fetching search results:", error);
      return []; // ارجع مصفوفة فاضية في حالة الخطأ لتفادي الكراش
    }
};

// export const getSearchResult = async () => {
//     try {
//         const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/b/5NPS`);
//         const searchResultDate = await res.json();
//         return searchResultDate;
//     } catch (error) {
        
//     }
// };
