import { useEffect, useState } from "react"

const useFetch =(url)=>{
    const [data,setData]=useState(null);  // create a state

    useEffect(()=>{           //useeffect is used to execute th function when it is called
        fetch(url).then(res=>{   //here we get the response
            res.json()           //here rsponse is converted in to json
            .then(result=>{
                setData(result.products) //now the setData contains result
            })
        })
},[]) //empty array is provided to render the data only @ one time
    return  data // data has aacess only inside the useFetch function.here we return the data by using 'setData'
}

export default useFetch