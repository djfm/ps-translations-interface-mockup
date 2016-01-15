import _ from 'underscore';

const objectsToArrays = data => {
  if (_.isObject(data)) {
    return _.pairs(data);
  } else {
    return data;
  }
};

const separateDomainsFromTranslations = obj =>
  _.pairs(obj).map(([key, value]) =>
    _.isObject(value) ? {
      type: 'domain',
      name: key,
      data: separateDomainsFromTranslations(value),
    } : {
      type: 'translation',
      string: key,
      translation: value,
    }
  )
;

export function getDomainsForAudience(audience, translations) {
  return separateDomainsFromTranslations(
    _.object(_.filter(_.pairs(translations), ([domain]) =>
      (audience === 'customers' && domain !== 'admin')
      ||
      (audience === 'employees' && domain === 'admin')
    ))
  );
}
