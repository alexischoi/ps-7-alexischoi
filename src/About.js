import React, { Component } from 'react';
import { Jumbotron, Container } from 'reactstrap';

export class About extends Component {
    render() {
        return <div>
                <div>
                    <Jumbotron fluid>
                        <Container fluid>
                            <h1 className="display-3">About Page</h1>
                            <p className="lead">This page is the about page that shows information</p>
                        </Container>
                    </Jumbotron>
                </div>
                <div className="container">I like React.</div>
            </div>
    }
}