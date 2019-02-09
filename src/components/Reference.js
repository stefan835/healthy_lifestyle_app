import React from 'react'
import ReactSVG from 'react-svg'

const Reference = (props) => {
    return (
        <div className="reference">
            <h2 className="reference__title">{props.title}</h2>
            <h2 className="reference__content">{props.content}</h2>
            <div className="reference__buttons">
                {props.buttons.map((btn, index) =>
                    <a key={index} className={`btn btn--primary ${btn.class}`} href={btn.url}>
                        {btn.icon ?
                            <img className="btn-logo" src={btn.icon} alt="icon"/>
                            : null}
                        {btn.title} <ReactSVG
                        path={`media/icons/Arrow.svg`}
                        svgClassName={'btn-arrow'}
                    /></a>
                )}
            </div>
        </div>
    )
};

export default Reference