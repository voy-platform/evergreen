import React, { forwardRef, memo } from 'react'
import PropTypes from 'prop-types'
import Box, { spacing, dimensions, position, layout } from 'ui-box'
import { useStyleConfig } from '../../hooks'
import { getTextPropsForControlHeight } from '../../lib/deprecated-theme-helpers'
import { useTheme } from '../../theme'

const pseudoSelectors = {
  _focus: '&:focus',
  _disabled: '&:disabled',
  _invalid: '&[aria-invalid="true"]:not(:focus)',
  _placeholder: '&::placeholder',
  _placeholderHover: '&:hover::placeholder',
  _placeholderFocus: '&:focus::placeholder'
}

const internalStyles = {
  MozAppearance: 'none',
  outline: 'none',
  textDecoration: 'none',
  WebkitAppearance: 'none',
  WebkitFontSmoothing: 'antialiased'
}

const DateInput = memo(
  forwardRef((props, ref) => {
    const {
      appearance = 'default',
      className,
      disabled = false,
      fontFamily = 'ui',
      isInvalid = false,
      placeholder,
      required,
      width = 125,
      ...restProps
    } = props

    const theme = useTheme()
    const { fontFamilies } = theme
    const themedFontFamily = fontFamilies[fontFamily] || fontFamily
    const themedProps = useStyleConfig(
      'Input',
      { appearance, size: restProps.size || 'medium' },
      pseudoSelectors,
      internalStyles
    )

    const height = restProps.height || themedProps.height
    const textProps = !restProps.size && restProps.height ? getTextPropsForControlHeight(restProps.height) : {}

    // Date input CANNOT have children!
    delete restProps.children

    return (
      <Box
        is="input"
        className={className}
        type="date"
        width={width}
        required={required}
        disabled={disabled}
        placeholder={placeholder}
        aria-invalid={isInvalid}
        ref={ref}
        fontFamily={themedFontFamily}
        {...themedProps}
        {...restProps}
        {...textProps}
        height={height}
      />
    )
  })
)

DateInput.propTypes = {
  /**
   * Composes the dimensions spec from the Box primitive.
   */
  ...dimensions.propTypes,

  /**
   * Composes the spacing spec from the Box primitive.
   */
  ...spacing.propTypes,

  /**
   * Composes the position spec from the Box primitive.
   */
  ...position.propTypes,

  /**
   * Composes the layout spec from the Box primitive.
   */
  ...layout.propTypes,

  /**
   * Makes the input element required.
   */
  required: PropTypes.bool,

  /**
   * Makes the input element disabled.
   */
  disabled: PropTypes.bool,

  /**
   * Sets visual styling of _only_ the text input to be "invalid".
   * Note that this does not effect any `validationMessage`.
   */
  isInvalid: PropTypes.bool,

  /**
   * The appearance of the DateInput.
   */
  appearance: PropTypes.string,

  /**
   * The width of the DateInput.
   */
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /**
   * Class name passed to the button.
   * Only use if you know what you are doing.
   */
  className: PropTypes.string
}

export default DateInput
