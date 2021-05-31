/**
 * Example problem with existing solution and passing test.
 * See problem 0 in the spec file for the assertion
 * @returns {string}
 */
exports.example = () => 'hello world';

exports.stripPrivateProperties = (propertiesToRemove, items) => {
  return items.map((item) => {
    return Object.keys(item).reduce((object, key) => {
      if ( !propertiesToRemove.includes(key) ) { object[key] = item[key]; }
      return object;
    }, {})
  })
};

exports.excludeByProperty = (propertyToExclude, list) => {
  return list.filter(item => !item.hasOwnProperty(propertyToExclude));
};

exports.sumDeep = (list) => {
  return list.map(item => item.objects.reduce((acc, o) => {
    acc['objects'] += o.val;
    return acc;
  }, { objects: 0 }));
};

exports.applyStatusColor = (colors, statuses) => {
  return statuses.map(item => {
    let color = Object.keys(colors).find(key => colors[key].includes(item.status));
    if ( color ) {
      item['color'] = color;
      return item;
    }
  }).filter(item => item !== undefined);
};

exports.createGreeting = () => {};
exports.setDefaults = () => {};
exports.fetchUserByNameAndUsersCompany = () => {};
