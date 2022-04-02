import {React} from "react";
import "../../scss/App.scss";
import "./ProductFeatures.scss"

function ProductFeatures({features, includes}){
    return(
        <div className="product-features">
            <div className="product-features__features">
                <h3 className="h3">FEATURES</h3>
                <p>{features}</p>
            </div>
            <div className="product-features__box">
                <h3 className="h3">in the box</h3>
                <div className="product-features-list">{ 
                    (includes.map( (item, index) => 
                        <div key={index} className="product-feature">
                            <p className="subtitle product-feature__number">{item.quantity}x</p>
                            <p>{item.item}</p> 
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ProductFeatures