import React, { useEffect, useRef, useState } from 'react'

export const useFetch = (url) => {

    
    
    const isMounted = useRef(true);
    
    const [state, setstate] = useState({data: null, loading: true, error: null});
    
 

    useEffect(() => {
        
        return () => {
            isMounted.current = false;
        }
    }, [])
    

   useEffect(() => {

       setstate({data: null, loading: true, error: null})
  
 
       fetch(url)
         .then(resp => resp.json())
         .then(data => {
             setTimeout(() => {
                 if(isMounted.current) {
                 
                     setstate({
                         loading: false,
                         erro: null,
                         data
                     });
                    } else {
                        console.log('set state no se llamo')
                    }

             },3000)
         })
       
   }, [url])
   
   return state;
}
