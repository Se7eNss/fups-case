import axios from "axios";
import { useEffect, useState } from "react";
import { MENU_API } from "../config";

interface ExpensesType {
            icon: string,
            title:string,
            account: string,
            amount: string,
            time: string,
            color: string
}




export const useFetchExpenses= () => {
    const [data, setData] = useState<ExpensesType[] | null>(null);
    const [error, setError] = useState("");
  
  
    
    useEffect(() => {
        (async () => {
          try {
            const response = await axios.get(`${MENU_API}/expenses`);
            setData(response.data);
          } catch (error:any) {
            setError(error.message);
          }
        })();
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);

    return { data, error };
   
  
  }