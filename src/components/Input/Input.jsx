import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import styles from './Input.module.scss'

export class Input extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    error: PropTypes.string,
    id: PropTypes.string.isRequired,
    label: PropTypes.string,
    onChange: PropTypes.func,
    placeholder: PropTypes.string,
    target: PropTypes.string,
    type: PropTypes.oneOf(['email', 'password', 'text', 'number']),
    value: PropTypes.any,
  }

  render() {
    const {
      className,
      error,
      id,
      label,
      onChange,
      placeholder,
      target,
      type,
      value,
    } = this.props
    return (
      <React.Fragment>
        <label
          className={styles.label}
          htmlFor={id}
        >
          {label && label}
          <input
            className={classNames(
              className,
              styles.input,
            )}
            id={id}
            onChange={onChange}
            placeholder={placeholder}
            target={target}
            type={type}
            value={value}
          />
          {error
           && <span className={styles.error}>
                {error}
              </span>
          }
        </label>
      </React.Fragment>
    )
  }
}

export default Input
