import { useEffect, useState } from "react";

export default function useAuth(){
    const [isLoading,setIsLoading]=useState(true);
    const [isAuthenticated,setIsAuthenticated]=useState(false);

    const getAccessToken=()=>{
        // await setTimeout(()=>{},1000);
        return  "MPjl2Y5AkvtP30rFb3ABRwkYNWsuRhJXkRQLhjaweqsC7H4fg8H2UmY5RpOkbO05";
    }

    useEffect(()=>{
        setIsAuthenticated(true);
    },[])

    useEffect(()=>{
        if(isAuthenticated) setIsLoading(false);
    },[isAuthenticated])

    return {isLoading,isAuthenticated,getAccessToken};
}