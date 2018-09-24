import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const TextFieldGroup = ({ field, value, label, error, type, onChange }) => {
    return (
        <div className="group">
            <input className={classnames("login-input", {'has-error': error})} value={value} onChange={onChange} name={field} type={type} required />
            <span className="bar"></span>
            <label className="group-label">{label}</label>
            {error && <span className="error-message">{error}</span>}
        </div>
    )
}

TextFieldGroup.propTypes = {
    field: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    error: PropTypes.string,
    type: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
}

TextFieldGroup.defaultProps = {
    type: 'text'
}

export default TextFieldGroup
