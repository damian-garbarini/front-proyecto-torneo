import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

const Articulos = () => {
    return (
    <div className="container" >
            <CardGroup>
    <Card>
        <Card.Img variant="top" src="https://www.buenosaires.gob.ar/sites/gcaba/files/field/image/_fm01642.jpg" />
        <Card.Body>
        <Card.Title>Asado para 100 personas que pueden invitar equipo campeon</Card.Title>

        </Card.Body>
    </Card>
    <Card>
        <Card.Img variant="top" src="https://www.lavoz.com.ar/resizer/75tQ5-F8gjyA3a1fRzyg2Hql2_Y=/1023x575/smart/cloudfront-us-east-1.images.arcpublishing.com/grupoclarin/F57FPYTECZA2ZPGZHATTULOWTI.jpg" />
        <Card.Body>
        <Card.Title>Juego de 22 camisetas a eleccion o diseñadas por el mismo equipo</Card.Title>

        </Card.Body>
    </Card>
    <Card>
        <Card.Img variant="top" src="https://i0.wp.com/www.disfrutarosario.com/wp-content/uploads/2022/06/bariloche-argentina-nieve-invierno.jpg?fit=750%2C535&ssl=1" />
        <Card.Body>
        <Card.Title>Pasaje de 30 personas para un viaje 7 dias 6 noches a Bariloche todo pago</Card.Title>
        </Card.Body>
        </Card>

        
    </CardGroup>
    </div>

);
};

export default Articulos;
