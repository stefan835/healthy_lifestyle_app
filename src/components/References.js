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
                               icon: null,
                               url: "#",
                           }
                       ]}/>
            <Reference title={"Bod•e Trainer in your pocket"}
                       content={"Lorem ipsum dolor sit amet, consect turadipiscing elit. Integer aliquet."}
                       buttons={[
                           {
                               title: "iOS",
                               icon: "/apple",
                               url: "#"
                           }, {
                               title: "Android",
                               icon: "/android",
                               url: "#"
                           }
                       ]}/>
            <Reference title={"Frequently Asked Questions"}
                       content={"Lorem ipsum dolor sit amet, consect turadipiscing elit. Integer aliquet."}
                       buttons={[
                           {
                               title: "Read FAQs",
                               icon: null,
                               url: "#"
                           }
                       ]}/>
        </div>
    )
};

export default References