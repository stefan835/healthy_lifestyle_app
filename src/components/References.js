import React from 'react'
import Reference from "./Reference";

const References = () => {
    return (
        <div className="references">
            <Reference title={"Running out of products?"}
                       content={"Lorem ipsum dolor sit amet, consect turadipiscing elit. Integer aliquet."}
                       buttons={[
                           {
                               title: "Buy now",
                               url: "#"
                           }
                       ]}/>
            {/*<Reference/>*/}
            {/*<Reference/>*/}
        </div>
    )
};

export default References