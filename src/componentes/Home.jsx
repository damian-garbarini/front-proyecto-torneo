import Carousel from "react-bootstrap/Carousel";

function Imagenes() {
    return (
        <Carousel>
            <Carousel.Item>
            <div className="container">
                <img
                    className="d-block w-100"
                    src="http://www.sur54.com/data/upload/news/fd8cc47b4055491494934a85b0b2edaf-cesped_rg1.JP.jpg"
                    alt="Primer imagen"
                />
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className="container">
                <img
                    className="d-block w-100"
                    src="https://1.bp.blogspot.com/-2AuiXcMaBoc/XdHBHJBE7UI/AAAAAAAA4zY/EOiMMziH-mQTrNB6ccHOzVZBH3_qwl3HwCLcBGAsYHQ/s1600/index1.jpg"
                    alt="Segunda imagen"
                />
                </div>
            </Carousel.Item>
            <Carousel.Item>
            <div className="container">
                <img
                    className="d-block w-100"
                    src="http://www.redesypelotas.com.ar/wp-content/uploads/2015/07/16.jpg"
                    alt="Tercera imagen"
                />
                </div>
            </Carousel.Item>
        </Carousel>
    );
}

export default Imagenes;
