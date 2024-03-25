import { useEffect, useState } from "react";

const useCurrency = (currency) => {
    const url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024.3.22/v1/currencies/${currency}.json`;
    const [data, setData] = useState({});

    useEffect(() => {
        fetch(url)
            .then((res) => res.json()) // Parse the JSON here
            .then((res) => setData(res[currency]))
            .catch((error) => {
                console.error("Error fetching currency data:", error);
            });
    }, [currency, url]);

    return data;
};

export default useCurrency;
