import { useState, useEffect } from "react";

function Data() {
  const [data, setData] = useState([]);

    useEffect(() => {
        fetch("./src/data/data.json") 
        .then(response => response.json())
        .then(data => setData(data));
    }, []);

    return data;
}

export default Data;