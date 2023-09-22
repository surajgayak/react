import { Container, Row, Col } from "react-bootstrap"
import { GridList } from "../../../components/grid/grid-6-col.component"

export const HomeBrandGrid = () => {
    return (<>
    <Container className="my-5">
            <Row className="bg-light customheader">
                <Col>
                    <h4>Brand List....</h4>
                </Col>
            </Row>
            <hr />
            <Row>
                
                <GridList />
                <GridList />
                <GridList />
                <GridList />
                <GridList />
                <GridList />
            </Row>
        </Container>
    </>)
}