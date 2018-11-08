import React, { Component } from 'react';
import api from '../../services/api';

import { Link } from 'react-router-dom';

import './style.css';

export default class Main extends Component {

    state = {
        products: [],
    }

    componentDidMount(){
        this.loadProducts();
    }

    loadProducts = async () => {
        const response = await api.get('associado');

        console.log(response.data);

        this.setState({ products: response.data })
    };

    prevPage = () => {};

    nextPage = () => {};

    render() {
        const { products } = this.state;

        return (
            <div className="product-list">
                {products.map( product => (
                    <article key={product.id}>
                        <strong>{product.nome}</strong>
                        <p>"CPF: " {product.cpf}</p>
                        <p>"RG: " {product.rg}</p>

                        <Link to={'/products/${product.id}'}>Detalhes</Link>
                    </article>
                ) )}
                <div className="actions">
                    <button onClick={this.prevPage}>Anterior</button>
                    <button onClick={this.nextPage}>Próximo</button>
                </div>
            </div>
        )
    }
}