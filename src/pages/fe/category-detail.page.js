import { useParams, useSearchParams } from "react-router-dom";
// import { useState } from "react";

const CategoryDetail = () => {
    // hook react-router-dom 
    let params = useParams();
    // let [loading, setLoading] = useState()
    let [query] = useSearchParams();

    console.log(params)
    console.log(query.get('price'))
    // setQuery({price: "1000-10000"})
    return (<>
        {params.catSlug}
        <br/>
        Filter: {query.get("price")}
    </>)
}

export default CategoryDetail;