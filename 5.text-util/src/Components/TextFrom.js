import React from 'react';
import PropTypes from 'prop-types'

export default function TextFrom(props) {
    return (
        <div className='container'>
            <h1>{props.heading}</h1>
            <div className="mb-">
                <label for="textArea" className="form-label">{props.txt}</label>
                <textarea className="form-control" id="textArea" rows="3"></textarea>
            </div>
        </div>
    )
}

TextFrom.propTypes = {
    heading: PropTypes.string.isRequired
}
