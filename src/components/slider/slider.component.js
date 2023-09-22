import { Carousel } from "react-bootstrap"

export const SliderComponent  = ({data, title=null, showCaption=false}) => {
    // props: {data: [{}], title: ""}
    return (<>
        <Carousel>
            {
                data && data.map((item, index) => (
                    <Carousel.Item interval={2000} key={index}>
                        <img
                        className="d-block w-100"
                        src={item.image}
                        alt={item.title}
                        />
                        
                        {
                            showCaption ? <>
                            <Carousel.Caption>
                                <h3>{item.title}</h3>
                                <p>{item?.slogan}</p>
                            </Carousel.Caption>
                            </> : <></>
                        }
                        

                    </Carousel.Item>
                ))
            }    
        </Carousel>
    </>)
}