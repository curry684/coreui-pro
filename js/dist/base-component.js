/*!
  * CoreUI base-component.js v4.0.0-alpha.4 (https://coreui.io)
  * Copyright 2021 The CoreUI Team (https://github.com/orgs/coreui/people)
  * Licensed under MIT (https://coreui.io)
  */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('./dom/data.js')) :
  typeof define === 'function' && define.amd ? define(['./dom/data'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.Base = factory(global.Data));
}(this, (function (Data) { 'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var Data__default = /*#__PURE__*/_interopDefaultLegacy(Data);

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var VERSION = '4.0.0-alpha.4';

  var BaseComponent = /*#__PURE__*/function () {
    function BaseComponent(element) {
      element = typeof element === 'string' ? document.querySelector(element) : element;

      if (!element) {
        return;
      }

      this._element = element;
      Data__default['default'].set(this._element, this.constructor.DATA_KEY, this);
    }

    var _proto = BaseComponent.prototype;

    _proto.dispose = function dispose() {
      Data__default['default'].remove(this._element, this.constructor.DATA_KEY);
      this._element = null;
    }
    /** Static */
    ;

    BaseComponent.getInstance = function getInstance(element) {
      return Data__default['default'].get(element, this.DATA_KEY);
    };

    _createClass(BaseComponent, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION;
      }
    }]);

    return BaseComponent;
  }();

  return BaseComponent;

})));
//# sourceMappingURL=base-component.js.map
