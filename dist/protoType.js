(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.protoType = factory());
}(this, (function () { 'use strict';

const getType = x => {
  // return Object.prototype.toString.call(x).toLowerCase().slice(8, -1);
  return x === undefined ? 'undefined' : x === null ? 'null' : x.constructor.name.toLowerCase();
};
Yox.validate = function (prop, propTypes) {
  Yox.object.each(propTypes, function (rules, key) {
    let { type } = rules;
    console.log(getType(prop[key]), type);
    if (getType(prop[key]) === type) {}
  });
};

let YoxPropTypes = {
  array: 'array'
};

window.YoxPropTypes = YoxPropTypes;

return YoxPropTypes;

})));
