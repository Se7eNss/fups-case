//https://my-json-server.typicode.com/Se7eNss/fups-case

import axios from "axios";
import { useEffect, useState } from "react";
import { MENU_API } from "../config";
import { NavItemType }  from "../layouts/homeLayout/navbar/Navbar";






export const useFetchMenu= () => {
    const [data, setData] = useState<NavItemType[] | null>(null);
    const [error, setError] = useState("");
  
  
    
    useEffect(() => {
        (async () => {
          try {
            const response = await axios.get(`${MENU_API}/menu`);
            setData(response.data);
          } catch (error:any) {
            setError(error.message);
          }
        })();
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);

    return { data, error };
   
  
  }