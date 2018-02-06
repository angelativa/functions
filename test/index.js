const getType = (val) => {
  return val === undefined
    ? 'undefined'
    : val === null
       ? 'null'
       : val.constructor.name.toLowerCase()
}

Yox.validate = function (props, propTypes) {
 let result = { }
  Yox.object.each(
    propTypes,
    function (rules, key) {
      let { type, value, required } = rules
      let target = props[ key ]

      if (getType(target) === type) {
        result[ key ] = target;
      }
    }
  )
  return result;
}

let YoxPropTypes = {
  array: 'array'
}

window.YoxPropTypes = YoxPropTypes;

export default YoxPropTypes
