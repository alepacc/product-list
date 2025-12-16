import { useState, useEffect } from "react";

function Data() {
  const [data, setData] = useState([]);

    useEffect(() => {
      try { 
        fetch(`${import.meta.env.BASE_URL}data.json`)
        // fetch("./src/data/data.json") 
        .then(response => response.json())
        .then(data => setData(data));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }, []);

    return data;
}

export default Data;