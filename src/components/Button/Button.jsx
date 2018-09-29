import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { Link } from 'react-router-dom'
import styles from './Button.module.scss'

export class Button extends React.Component {
  static propTypes = {
    children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
    className: PropTypes.string,
    href: PropTypes.string,
    onClick: PropTypes.func,
    size: PropTypes.oneOf(['small', 'normal', 'medium', 'large']),
    target: PropTypes.string,
    to: PropTypes.string,
    uppercase: PropTypes.bool,
  }

  static defaultProps = {
    size: 'normal',
  }

  render() {
    const {
      children,
      className,
      href,
      onClick,
      size,
      target,
      to,
      uppercase,
      ...restProps
    } = this.props
    let Component

    if (href) {
      Component = 'a'
    }
    if (to) {
      Component = Link
    }
    if (!to && !href) {
      Component = 'button'
    }
    return (
      <Component
        className={classNames(
          className,
          styles.button,
          styles[size],
          { [styles.uppercase]: uppercase }
        )}
        onClick={onClick}
        target={target}
        {...restProps}
      >
        {children}
      </Component>
    )
  }
}

export default Button
