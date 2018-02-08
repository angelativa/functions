const getType = (val) => {
  return val === undefined
    ? 'undefined'
    : val === null
       ? 'null'
       : val.constructor.name.toLowerCase()
}
const isNil = val => val === undefined || val === null;
const isFunction = val => typeof val === 'function';
const isLikeArray = val => {
    try {
        return [...val], true;
    }
    catch (e) {
        return false;
    }
};
Yox.validate = function (props, propTypes) {
 let result = { }
  Yox.object.each(
    propTypes,
    function (rules, key) {
      let { type, value, required } = rules
      let target = props[ key ]
      if (!isNil(target) && type) {
        if (type === PropTypes.array && isLikeArray(target)) {
          result[key] = target
        }
      }
      else if (required) {
        logger.warn(`"${key}" prop is not found.`)
      }
      else if (value) {
        if (isFunction(type)) {
          result[ key ] = value
        }
        else {
          result[ key ] = isFunction(value) ? value(props) : value
        }
      }
    }
  )
  return result;
}

let PropTypes = {
  array: 'array',
  array: 'array'
};

window.PropTypes = PropTypes;

export default PropTypes
