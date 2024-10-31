/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/accordion/edit.js":
/*!*******************************!*\
  !*** ./src/accordion/edit.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./editor.scss */ "./src/accordion/editor.scss");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__);


// import editor style





const Edit = props => {
  const {
    attributes,
    setAttributes,
    clientId
  } = props;
  const {
    uniqueId,
    iconColor,
    iconActiveColor,
    titleBg,
    titleColor,
    titlePadding,
    contentBg,
    contentPadding,
    iconSize,
    iconUnit,
    iconUnitActive,
    iconMarginsRight,
    preview
  } = attributes; // set unique ID

  setAttributes({
    uniqueId: clientId
  });

  function updateIconSize(newIconSize) {
    setAttributes({
      iconSize: newIconSize
    });
  }

  function updateIconColor(newIconColor) {
    setAttributes({
      iconColor: newIconColor
    });
  }

  function updateIconActiveColor(newIconActiveColor) {
    setAttributes({
      iconActiveColor: newIconActiveColor
    });
  }

  function updateTitleColor(newTitleColor) {
    setAttributes({
      titleColor: newTitleColor
    });
  }

  function updateTitleBg(newTitleBg) {
    setAttributes({
      titleBg: newTitleBg
    });
  }

  function unitUpdate(e) {
    setAttributes({
      iconUnit: e.target.value,
      iconUnitActive: "is-" + e.target.value + "-active"
    });
  }

  if (preview) {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("svg", (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      xmlns: "http://www.w3.org/2000/svg",
      xmlnsXlink: "http://www.w3.org/1999/xlink",
      viewBox: "0 0 800 400"
    }, props), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("rect", {
      width: "800",
      height: "400",
      fill: "#F1F0F0"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("path", {
      fill: "#C9C9C9",
      d: "M679.8,119.3H120.7c-1.6,0-2.9-1.3-2.9-2.9V80.7c0-1.9,1.5-3.5,3.4-3.5h558.1c1.9,0,3.5,1.5,3.5,3.4v35.6C682.8,118,681.4,119.3,679.8,119.3z"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("path", {
      fill: "#616161",
      d: "M152.8,96.4h-5.9c-0.3,0-0.5-0.2-0.5-0.5v-6.4c0-0.8-0.6-1.4-1.4-1.4h-0.5c-1,0-1.8,0.8-1.8,1.8v6c0,0.3-0.2,0.5-0.5,0.5h-5.9c-1,0-1.8,0.8-1.8,1.8v0.5c0,0.8,0.6,1.4,1.4,1.4h6.4c0.3,0,0.5,0.2,0.5,0.5v6.4c0,0.8,0.6,1.4,1.4,1.4h0.5c1,0,1.8-0.8,1.8-1.8v-6c0-0.3,0.2-0.5,0.5-0.5h5.9c1,0,1.8-0.8,1.8-1.8l0,0C154.6,97.3,153.8,96.4,152.8,96.4z"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("path", {
      fill: "#C9C9C9",
      d: "M679.8,170.1H120.7c-1.6,0-2.9-1.3-2.9-2.9v-35.6c0-1.9,1.5-3.4,3.4-3.4h558.1c1.9,0,3.5,1.5,3.5,3.4v35.6C682.8,168.8,681.4,170.1,679.8,170.1z"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("path", {
      fill: "#616161",
      d: "M152.8,147.3h-5.9c-0.3,0-0.5-0.2-0.5-0.5v-6.4c0-0.8-0.6-1.4-1.4-1.4h-0.5c-1,0-1.8,0.8-1.8,1.8v6c0,0.3-0.2,0.5-0.5,0.5h-5.9c-1,0-1.8,0.8-1.8,1.8v0.5c0,0.8,0.6,1.4,1.4,1.4h6.4c0.3,0,0.5,0.2,0.5,0.5v6.4c0,0.8,0.6,1.4,1.4,1.4h0.5c1,0,1.8-0.8,1.8-1.8v-6c0-0.3,0.2-0.5,0.5-0.5h5.9c1,0,1.8-0.8,1.8-1.8l0,0C154.6,148.1,153.8,147.3,152.8,147.3z"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("path", {
      fill: "#C9C9C9",
      d: "M679.3,221H120.2c-1.6,0-2.9-1.3-2.9-2.9v-35.6c0-1.9,1.5-3.4,3.4-3.4h558.1c1.9,0,3.5,1.5,3.5,3.4v35.6C682.2,219.7,680.9,221,679.3,221z"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("path", {
      fill: "#616161",
      d: "M152.3,198.2h-5.9c-0.3,0-0.5-0.2-0.5-0.5v-6.4c0-0.8-0.6-1.4-1.4-1.4h-0.5c-1,0-1.8,0.8-1.8,1.8v6c0,0.3-0.2,0.5-0.5,0.5h-5.9c-1,0-1.8,0.8-1.8,1.8v0.5c0,0.8,0.6,1.4,1.4,1.4h6.4c0.3,0,0.5,0.2,0.5,0.5v6.4c0,0.8,0.6,1.4,1.4,1.4h0.5c1,0,1.8-0.8,1.8-1.8v-6c0-0.3,0.2-0.5,0.5-0.5h5.9c1,0,1.8-0.8,1.8-1.8l0,0C154.1,199,153.3,198.2,152.3,198.2z"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("path", {
      fill: "#C9C9C9",
      d: "M679.8,271.9H120.7c-1.6,0-2.9-1.3-2.9-2.9v-35.6c0-1.9,1.5-3.4,3.4-3.4h558.1c1.9,0,3.5,1.5,3.5,3.4v35.6C682.8,270.6,681.4,271.9,679.8,271.9z"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("path", {
      fill: "#616161",
      d: "M152.8,249h-5.9c-0.3,0-0.5-0.2-0.5-0.5v-6.4c0-0.8-0.6-1.4-1.4-1.4h-0.5c-1,0-1.8,0.8-1.8,1.8v5.9c0,0.3-0.2,0.5-0.5,0.5h-5.9c-1,0-1.8,0.8-1.8,1.8v0.5c0,0.8,0.6,1.4,1.4,1.4h6.4c0.3,0,0.5,0.2,0.5,0.5v6.4c0,0.8,0.6,1.4,1.4,1.4h0.5c1,0,1.8-0.8,1.8-1.8v-6c0-0.3,0.2-0.5,0.5-0.5h5.9c1,0,1.8-0.8,1.8-1.8l0,0C154.6,249.9,153.8,249,152.8,249z"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("path", {
      fill: "#C9C9C9",
      d: "M679.3,322.8H120.2c-1.6,0-2.9-1.3-2.9-2.9v-35.6c0-1.9,1.5-3.5,3.4-3.5h558.1c1.9,0,3.5,1.5,3.5,3.4v35.6C682.2,321.4,680.9,322.8,679.3,322.8z"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("path", {
      fill: "#616161",
      d: "M152.3,299.9h-5.9c-0.3,0-0.5-0.2-0.5-0.5V293c0-0.8-0.6-1.4-1.4-1.4h-0.5c-1,0-1.8,0.8-1.8,1.8v5.9c0,0.3-0.2,0.5-0.5,0.5h-5.9c-1,0-1.8,0.8-1.8,1.8v0.5c0,0.8,0.6,1.4,1.4,1.4h6.4c0.3,0,0.5,0.2,0.5,0.5v6.4c0,0.8,0.6,1.4,1.4,1.4h0.5c1,0,1.8-0.8,1.8-1.8v-6c0-0.3,0.2-0.5,0.5-0.5h5.9c1,0,1.8-0.8,1.8-1.8l0,0C154.1,300.7,153.3,299.9,152.3,299.9z"
    })));
  }

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("style", null, `
				.next_block_accordion_${uniqueId} .accordion-item .accordion-button {
					color: ${titleColor};
					background-color: ${titleBg};
					padding: ${titlePadding.top} ${titlePadding.right} ${titlePadding.bottom} ${titlePadding.left};
				}
				`, `
				.next_block_accordion_${uniqueId} .accordion-item .accordion-body {
					background-color: ${contentBg};
					padding: ${contentPadding.top} ${contentPadding.right} ${contentPadding.bottom} ${contentPadding.left};
				}
				`, `
				.next_block_accordion_${uniqueId} .accordion-item .accordion-button i{
					color: ${iconColor};
					font-size: ${iconSize + iconUnit};
					margin-right: ${iconMarginsRight.right};
				}
				.next_block_accordion_${uniqueId} .accordion-item .accordion-button:not(.collapsed) i{
					color: ${iconActiveColor};
				}`), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    initialOpen: false,
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)("Icon", "next-accordion-block")
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "next-accordion-icon-control"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "next-accordion-icon-button-control"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ButtonGroup, {
    className: `next-accordion-icon-button-control-units ${iconUnitActive}`
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
    className: "is-px",
    value: "px",
    onClick: unitUpdate
  }, "px"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
    className: "is-em",
    value: "em",
    onClick: unitUpdate
  }, "em"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
    className: "is-%",
    value: "%",
    onClick: unitUpdate
  }, "%"))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)("Icon Size", "next-accordion-block"),
    value: iconSize,
    onChange: updateIconSize,
    min: 1,
    max: 200
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.__experimentalBoxControl, {
    values: iconMarginsRight,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)("Gap between Icon and Title", "next-accordion-block"),
    sides: ["right"],
    allowReset: false,
    resetValues: {
      right: 10
    },
    onChange: newValue => setAttributes({ ...iconMarginsRight,
      iconMarginsRight: {
        right: newValue.right
      }
    })
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.__experimentalUnitControl, null)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "next-accordion-block-color-controls"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("p", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)("Icon Color", "next-accordion-block")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Dropdown, {
    position: "top right",
    renderToggle: _ref => {
      let {
        isOpen,
        onToggle
      } = _ref;
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
        onClick: onToggle,
        "aria-expanded": isOpen
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ColorIndicator, {
        colorValue: iconColor
      }));
    },
    renderContent: () => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ColorPicker, {
      value: iconColor,
      onChange: updateIconColor,
      enableAlpha: true
    }))
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "next-accordion-block-color-controls"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("p", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)("Icon Active Color", "next-accordion-block")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Dropdown, {
    position: "bottom right",
    renderToggle: _ref2 => {
      let {
        isOpen,
        onToggle
      } = _ref2;
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
        onClick: onToggle,
        "aria-expanded": isOpen
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ColorIndicator, {
        colorValue: iconActiveColor
      }));
    },
    renderContent: () => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ColorPicker, {
      value: iconActiveColor,
      onChange: updateIconActiveColor,
      enableAlpha: true
    }))
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    initialOpen: false,
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)("Accordion Title", "next-accordion-block")
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "next-accordion-block-color-controls"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("p", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)("Text Color", "next-accordion-block")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Dropdown, {
    position: "bottom right",
    renderToggle: _ref3 => {
      let {
        isOpen,
        onToggle
      } = _ref3;
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
        onClick: onToggle,
        "aria-expanded": isOpen
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ColorIndicator, {
        colorValue: titleColor
      }));
    },
    renderContent: () => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ColorPicker, {
      value: titleColor,
      onChange: updateTitleColor,
      enableAlpha: true
    }))
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "next-accordion-block-color-controls"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("p", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)("Background Color", "next-accordion-block")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Dropdown, {
    position: "bottom right",
    renderToggle: _ref4 => {
      let {
        isOpen,
        onToggle
      } = _ref4;
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
        onClick: onToggle,
        "aria-expanded": isOpen
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ColorIndicator, {
        colorValue: titleBg
      }));
    },
    renderContent: () => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ColorPicker, {
      value: titleBg,
      onChange: updateTitleBg,
      enableAlpha: true
    }))
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.__experimentalBoxControl, {
    values: titlePadding,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)("Padding", "next-accordion-block"),
    sides: ["top", "right", "bottom", "left"],
    allowReset: false,
    resetValues: {
      top: "10px",
      right: "10px",
      bottom: "10px",
      left: "10px"
    },
    onChange: newValue => setAttributes({ ...titlePadding,
      titlePadding: {
        top: newValue.top,
        right: newValue.right,
        bottom: newValue.bottom,
        left: newValue.left
      }
    })
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.__experimentalUnitControl, null))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    initialOpen: false,
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)("Accordion Content", "next-accordion-block")
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "next-accordion-block-color-controls"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("p", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)("Background Color", "next-accordion-block")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Dropdown, {
    position: "bottom right",
    renderToggle: _ref5 => {
      let {
        isOpen,
        onToggle
      } = _ref5;
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
        onClick: onToggle,
        "aria-expanded": isOpen
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ColorIndicator, {
        colorValue: contentBg
      }));
    },
    renderContent: () => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ColorPicker, {
      value: contentBg,
      onChange: newValue => setAttributes({
        contentBg: newValue
      }),
      enableAlpha: true
    }))
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.__experimentalBoxControl, {
    values: contentPadding,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)("Padding", "next-accordion-block"),
    sides: ["top", "right", "bottom", "left"],
    allowReset: false,
    resetValues: {
      top: "10px",
      right: "10px",
      bottom: "10px",
      left: "10px"
    },
    onChange: newValue => setAttributes({ ...contentPadding,
      contentPadding: {
        top: newValue.top,
        right: newValue.right,
        bottom: newValue.bottom,
        left: newValue.left
      }
    })
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.__experimentalUnitControl, null)))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.useBlockProps)({
    className: `next-block-accordion next_block_accordion_${uniqueId}`,
    style: {
      padding: "20px"
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "accordion"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InnerBlocks, {
    __experimentalCaptureToolbars: true,
    allowedBlocks: ["nextblocks/accordion-item"],
    template: [["nextblocks/accordion-item"]]
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Edit);

/***/ }),

/***/ "./src/accordion/save.js":
/*!*******************************!*\
  !*** ./src/accordion/save.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);



const Save = _ref => {
  let {
    attributes
  } = _ref;
  const {
    uniqueId,
    iconColor,
    iconActiveColor,
    titleBg,
    titleColor,
    titlePadding,
    contentBg,
    contentPadding,
    iconSize,
    iconUnit,
    iconMarginsRight
  } = attributes;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("style", null, `
				.next_block_accordion_${uniqueId} .accordion-item .accordion-button {
					color: ${titleColor};
					background-color: ${titleBg};
					padding: ${titlePadding.top} ${titlePadding.right} ${titlePadding.bottom} ${titlePadding.left};
				}
				`, `
				.next_block_accordion_${uniqueId} .accordion-item .accordion-body {
					background-color: ${contentBg};
					padding: ${contentPadding.top} ${contentPadding.right} ${contentPadding.bottom} ${contentPadding.left};
				}
				`, `
				.next_block_accordion_${uniqueId} .accordion-item .accordion-button i{
					color: ${iconColor};
					font-size: ${iconSize + iconUnit};
					margin-right: ${iconMarginsRight.right};
				}
				.next_block_accordion_${uniqueId} .accordion-item .accordion-button:not(.collapsed) i{
					color: ${iconActiveColor};
				}`), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps.save({
    className: `next-block-accordion next_block_accordion_${uniqueId}`
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "accordion"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InnerBlocks.Content, null))));
};

/* harmony default export */ __webpack_exports__["default"] = (Save);

/***/ }),

/***/ "./src/accordion/editor.scss":
/*!***********************************!*\
  !*** ./src/accordion/editor.scss ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ (function(module) {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ (function(module) {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ (function(module) {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ (function(module) {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ (function(module) {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _extends; }
/* harmony export */ });
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };
  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./src/accordion/block.json":
/*!**********************************!*\
  !*** ./src/accordion/block.json ***!
  \**********************************/
/***/ (function(module) {

module.exports = JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"nextblocks/accordion","version":"1.0.0","title":"Next Accordion","description":"Display beautiful accordion section or page with Next Accordion Block","category":"next-blocks","supports":{"html":false,"anchor":true},"example":{"attributes":{"type":"boolean","preview":true}},"attributes":{"uniqueId":{"type":"string"},"iconColor":{"type":"string","default":"#444"},"iconActiveColor":{"type":"string","default":"#444"},"titleBg":{"type":"string","default":"#eee"},"titleColor":{"type":"string","default":"#444"},"titlePadding":{"type":"object","default":{"top":"10px","right":"10px","bottom":"10px","left":"10px"}},"contentBg":{"type":"string","default":"#fff"},"contentPadding":{"type":"object","default":{"top":"10px","right":"10px","bottom":"10px","left":"10px"}},"iconSize":{"type":"number","default":16},"iconUnit":{"type":"string","default":"px"},"iconUnitActive":{"type":"string","default":"is-px-active"},"iconMarginsRight":{"type":"object","default":{"right":"10px"}},"preview":{"type":"boolean","default":false}},"textdomain":"next-accordion-block","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css"}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!********************************!*\
  !*** ./src/accordion/index.js ***!
  \********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./block.json */ "./src/accordion/block.json");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit */ "./src/accordion/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./save */ "./src/accordion/save.js");




/**
 * Internal dependencies
 */



/**
 * Block Registration
 */

(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_2__, {
  icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SVG, {
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 28 28",
    fill: "#0D47A1"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Path, {
    fill: "#0D47A1",
    d: "M4.9,8.6v2.7c0,0.9,0.7,1.6,1.5,1.7h15.2c0.9-0.1,1.6-0.9,1.5-1.7V8.6c0.1-0.9-0.6-1.6-1.5-1.7H6.4 C5.5,7,4.9,7.7,4.9,8.6z M12.9,9.9c0-0.4,0.2-0.6,0.6-0.6h6.4c0.4,0,0.6,0.2,0.6,0.6c0,0.4-0.2,0.6-0.6,0.6h-6.4 C13.2,10.6,12.9,10.3,12.9,9.9z M7.3,9.9c0-0.4,0.2-0.6,0.6-0.6h0.6V8.7c0-0.4,0.2-0.6,0.6-0.6c0.4,0,0.6,0.2,0.6,0.6v0.6h0.6 c0.4,0,0.6,0.2,0.6,0.6c0,0.4-0.2,0.6-0.6,0.6H9.8v0.6c0,0.4-0.2,0.6-0.6,0.6c-0.4,0-0.6-0.2-0.6-0.6v-0.6H8 C7.6,10.6,7.3,10.3,7.3,9.9z"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Path, {
    fill: "#0D47A1",
    d: "M4.9,16.7v2.7c0,0.9,0.7,1.6,1.5,1.7h15.2c0.9-0.1,1.6-0.9,1.5-1.7v-2.7c0.1-0.9-0.6-1.6-1.5-1.7H6.4 C5.5,15,4.9,15.7,4.9,16.7z M12.9,18c0-0.4,0.2-0.6,0.6-0.6h6.4c0.4,0,0.6,0.2,0.6,0.6c0,0.4-0.2,0.6-0.6,0.6h-6.4 C13.2,18.6,12.9,18.4,12.9,18z M7.3,18c0-0.4,0.2-0.6,0.6-0.6h0.6v-0.6c0-0.4,0.2-0.6,0.6-0.6c0.4,0,0.6,0.2,0.6,0.6v0.6h0.6 c0.4,0,0.6,0.2,0.6,0.6c0,0.4-0.2,0.6-0.6,0.6H9.8v0.6c0,0.4-0.2,0.6-0.6,0.6c-0.4,0-0.6-0.2-0.6-0.6v-0.6H8 C7.6,18.6,7.3,18.4,7.3,18z"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Path, {
    fill: "#0D47A1",
    d: "M21.7,28H6.3C2.8,28,0,25.2,0,21.7V6.3C0,2.8,2.8,0,6.3,0h15.4C25.2,0,28,2.8,28,6.3v15.4 C28,25.2,25.2,28,21.7,28z M6.3,2.5c-2.1,0-3.8,1.7-3.8,3.8v15.4c0,2.1,1.7,3.8,3.8,3.8h15.4c2.1,0,3.8-1.7,3.8-3.8V6.3 c0-2.1-1.7-3.8-3.8-3.8H6.3z"
  })),
  edit: _edit__WEBPACK_IMPORTED_MODULE_4__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_5__["default"]
});
}();
/******/ })()
;
//# sourceMappingURL=index.js.map