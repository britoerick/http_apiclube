import React, { Component } from 'react';
import api from '../../services/api';

export default class Product extends Component {
    state = {
        product: {},
    };

    async componentDidMount() {
        const { id } = this.props.match.params;

        const response = await api.get('/products/${id}');

        this.setState({ product: response.data });
    }

    render() {
        const { product } = this.state;

        return (
            <div className="product-info">
                <h1>{product.nome}</h1>
                <p>{product.cpf}</p>
                <p>{product.rg}</p>
            </div>
        );
    }
}