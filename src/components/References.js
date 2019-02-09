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
                               class: null,
                           }
                       ]}/>
            <Reference title={"Bod•e Trainer in your pocket"}
                       content={"Lorem ipsum dolor sit amet, consect turadipiscing elit. Integer aliquet."}
                       buttons={[
                           {
                               title: "iOS",
                               icon: "media/icons/apple.png",
                               url: "#",
                               class: "btn--short"
                           }, {
                               title: "Android",
                               icon: "media/icons/android.png",
                               url: "#",
                               class: null,
                           }
                       ]}/>
            <Reference title={"Frequently Asked Questions"}
                       content={"Lorem ipsum dolor sit amet, consect turadipiscing elit. Integer aliquet."}
                       buttons={[
                           {
                               title: "Read FAQs",
                               icon: null,
                               url: "#",
                               class: null,
                           }
                       ]}/>
        </div>
    )
};

export default References