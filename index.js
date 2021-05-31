/**
 * Example problem with existing solution and passing test.
 * See problem 0 in the spec file for the assertion
 * @returns {string}
 */
exports.example = () => 'hello world';

exports.stripPrivateProperties = (propertiesToRemove, items) => {
  let newList = [];
  items.forEach((item) => {
    let newItem = Object.keys(item).reduce((object, key) => {
      if ( !propertiesToRemove.includes(key) ) { object[key] = item[key]; }
      return object;
    }, {})
    newList.push(newItem);
  })
  return newList;
};

exports.excludeByProperty = () => {};
exports.sumDeep = () => {};
exports.applyStatusColor = () => {};
exports.createGreeting = () => {};
exports.setDefaults = () => {};
exports.fetchUserByNameAndUsersCompany = () => {};
