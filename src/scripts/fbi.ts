import axios from "axios";

type Item = {
    uid: string;
    title: string;
    url: string;
    images: {
        large: string;
        original: string;
        thumb: string;
    }
}

interface FBIResponse {
    total: number;
    items: Item[]
}

const fetchFBIData = async (): Promise<Item[]> => {
    try {
        const response = await axios.get("https://api.fbi.gov/@wanted?pageSize=200&page=1&sort_on=modified&sort_order=desc", {
            headers: {
                "Accept": "/",
                "Content-Type": "application/json; charset=UTF-8",
                "Connection": "keep-alive",
                "User-Agent": "PostmanRuntime/7.29.2",
                "Accept-Encoding": "application/json; charset=UTF-8"
            }
         })
        const data = response.data as FBIResponse
        return data.items
    } catch (err) {
        console.error(err)    
        return []
    }
}

export { fetchFBIData }
