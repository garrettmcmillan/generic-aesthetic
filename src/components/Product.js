import React, { Component } from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ProductConsumer } from '../Context';
import PropTypes from 'prop-types';

export default class Product extends Component {
    render() {
        const { id, title, img, price, loaded } = this.props.product;
        return (
            <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
                <div className="card">
                <ProductConsumer>
                    {(value) => (
                        <div 
                            className="img-container p-5" 
                            onClick={() => value.handleDetail(id)
                            }
                        >
                            <Link to="/details">
                                <img src={img} alt="product" className="card-img-top"/>
                            </Link>
                            <button 
                                className="cart-btn" 
                                disabled={loaded? true : false} 
                                onClick={() => {
                                    value.addToCart(id);
                                    value.openModal(id);
                                }}
                            >
                                {loaded ? (
                                    <p className="text-capitalize mb-0" disabled>
                                        {" "}
                                        loaded <i className="fas fa-truck-loading" />
                                    </p>
                                ) : (
                                    <p className="text-capitalize mb-0" disabled> load up <i className="fas fa-truck-monster" />
                                    </p>
                                )}
                            </button>
                        </div>
                    )}
                </ProductConsumer>

                    <div className="card-footer d-flex justify-content-between">
                        <p className="align-self-center mb-0">
                            {title}
                        </p>
                        <h5 className="text-green font-italic mb-0">
                            <span className="mr-1">${price}</span>
                        </h5>
                    </div>
                </div>
            </ProductWrapper>
)}}

Product.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number,
        img: PropTypes.string,
        title: PropTypes.string,
        price: PropTypes.number,
        loaded: PropTypes.bool
    })
}

const ProductWrapper = styled.div`
    .card {
        border: transparent;
        transition: all 0.4s linear;

    }
    .card-footer {
        display: flex;
        align-items: center;
        background: transparent;
        border-top: transparent;
        transition: all 0.4s linear;
        color: var(--mainGreen);
        letter-spacing: 0.01rem;
    }
        &:hover {
            .card {
                border: transparent;
                box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.2);
            }
            .card-footer {
                background: var(--mainBlue);
            }
    }
    .img-container {
        position: relative;
        overflow: hidden;
    }
    .card-img-top {
        transition: all .3s linear;
    }
    .img-container:hover .card-img-top {
        transform: scale(1.2);
    }
    .cart-btn {
        color: var(--mainGreen);
        position: absolute;
        bottom: 0;
        right: 0;
        padding: 0.2rem 0.4rem;
        background: var(--paleGreen);
        border: .05rem solid var(--paleGreen);
        font-size: 1rem;
        transform: translate(100%, 100%);
    }
    .img-container: hover .cart-btn {
        transform: translate(0, 0);
        transition: all .4s linear;
    }
    .cart-btn:hover {
        background: var(--paleGreen);
        color: var(--mainGreen);
        transform: scale(1.01) !important;
        cursor: pointer;
    }
`
