import { useEffect, useState } from "react"
import { SliderComponent } from "../../../components/slider/slider.component"
import { bannerData } from "../../mock.data"

export const HomeBannerSlider = () => {
    // data 
    let [data, setData] = useState()


    useEffect(() => {
        // TODO: API Consume 

        setData(bannerData)
    }, [])
    return (<>
    
        <SliderComponent data={data} showCaption={false} />

    </>)
}