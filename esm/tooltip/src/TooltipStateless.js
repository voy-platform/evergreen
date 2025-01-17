import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["appearance", "children"],
    _excluded2 = ["color"];
import React, { memo, forwardRef } from 'react';
import PropTypes from 'prop-types';
import { useStyleConfig } from '../../hooks';
import { Pane } from '../../layers';
import { Paragraph } from '../../typography';
var pseudoSelectors = {};
var internalStyles = {};
var TooltipStateless = /*#__PURE__*/memo( /*#__PURE__*/forwardRef(function TooltipStateless(props, ref) {
  var appearance = props.appearance,
      children = props.children,
      restProps = _objectWithoutProperties(props, _excluded);

  var _useStyleConfig = useStyleConfig('Tooltip', {
    appearance: appearance
  }, pseudoSelectors, internalStyles),
      color = _useStyleConfig.color,
      themedProps = _objectWithoutProperties(_useStyleConfig, _excluded2);

  var child;

  if (typeof children === 'string') {
    child = /*#__PURE__*/React.createElement(Paragraph, {
      color: color,
      size: 400
    }, children);
  } else {
    child = children;
  }

  return /*#__PURE__*/React.createElement(Pane, _extends({
    ref: ref
  }, themedProps, restProps), child);
}));
TooltipStateless.propTypes = {
  children: PropTypes.node,

  /**
   * The appearance of the tooltip.
   */
  appearance: PropTypes.oneOf(['default', 'card']).isRequired
};
export default TooltipStateless;