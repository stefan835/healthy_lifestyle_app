import React from 'react'

const Reference = (props) => {
    return (
        <div className="reference">
            <h2 className="reference__title">{props.title}</h2>
            <h2 className="reference__content">{props.content}</h2>
            <div className="reference__buttons">
                {props.buttons.map(btn =>
                    <a className="btn btn--primary" href={btn.url}>
                        {btn.icon ?
                            <img src={btn.icon} alt="icon"/>
                            : null}
                        {btn.title}</a>
                )}
            </div>
        </div>
    )
};

export default Reference