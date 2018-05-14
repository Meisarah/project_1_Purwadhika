import React from 'react';

const SingleProduct = (props) => (
    <div>
        <div className="col-sm-3"> 
            <div className="product1">
                <a href={`/productdetail/${props.id}`}>
                <img src={process.env.PUBLIC_URL + props.gambar} alt="Hijab" className="product1img"/>
                    <div className="middle text">Buy</div>
                </a>
            </div>
            <p><strong>{props.nama}</strong></p>
            <p>{props.product}<br/>{props.harga}</p>
        </div>
    </div>
)

export default SingleProduct;