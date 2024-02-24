import React, { forwardRef, memo } from 'react'
import PropTypes from 'prop-types'
import { splitBoxProps } from 'ui-box'
import { FormField } from '../../form-field'
import { useId } from '../../hooks'
import { generateAriaDescribedBy } from '../../lib/generate-aria-describedby'
import { majorScale } from '../../scales'
import DateInput from './DateInput'

const DateInputField = memo(
  forwardRef((props, ref) => {
    const id = useId('TextInputField', props.id)

    const {
      // We are using the id from the state
      appearance,

      // FormField props
      description,
      disabled,
      hint,
      id: unusedId,

      // DateInput props
      inputHeight = majorScale(4),
      inputWidth = '100%',
      isInvalid,
      label,
      required,
      validationMessage,

      // Rest props are spread on the FormField
      ...restProps
    } = props

    /**
     * Split the wrapper props from the input props.
     */
    const { matchedProps, remainingProps } = splitBoxProps(restProps)

    // Date input CANNOT have children!
    delete restProps.children

    return (
      <FormField
        marginBottom={24}
        label={label}
        isRequired={required}
        hint={hint}
        description={description}
        validationMessage={validationMessage}
        labelFor={id}
        {...matchedProps}
      >
        <DateInput
          id={id}
          width={inputWidth}
          height={inputHeight}
          disabled={disabled}
          required={required}
          isInvalid={isInvalid}
          appearance={appearance}
          ref={ref}
          aria-describedby={generateAriaDescribedBy(id, { description, hint, validationMessage })}
          {...remainingProps}
        />
      </FormField>
    )
  })
)

DateInputField.propTypes = {
  /**
   * Composes the TextInput component as the base.
   */
  ...DateInput.propTypes,
  ...FormField.propTypes,

  /**
   * The label used above the input element.
   */
  label: PropTypes.node.isRequired,

  /**
   * Passed on the label as a htmlFor prop.
   */
  labelFor: PropTypes.string,

  /**
   * Whether or not to show an asterix after the label.
   */
  required: PropTypes.bool,

  /**
   * An optional description of the field under the label, above the input element.
   */
  description: PropTypes.node,

  /**
   * An optional hint under the input element.
   */
  hint: PropTypes.node,

  /**
   * If a validation message is passed it is shown under the input element
   * and above the hint. This is unaffected by `isInvalid`.
   */
  validationMessage: PropTypes.node,

  /**
   * The height of the input element.
   */
  inputHeight: PropTypes.number,

  /**
   * The width of the input width.
   */
  inputWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
}

export default DateInputField
