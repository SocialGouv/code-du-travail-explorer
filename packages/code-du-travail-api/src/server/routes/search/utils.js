// merge by one of each

const merge = (res1, res2, max_result) => {
  //  simple array concat
  // return [...res1.hits, ...res2.hits].sort(sortByScore);

  // interleave results
  const res = [];
  Array.from({
    length: max_result
  }).forEach((x, i) => {
    if (res1.length > i) res.push(res1[i]);
    if (res2.length > i) res.push(res2[i]);
  });
  return res;
};

// Remove Duplicates

const removeDuplicate = arr =>
  Object.values(
    arr.reduce(
      (values, current) => ({
        ...values,
        [current._source.source + "/" + current._source.slug]: current
      }),
      {}
    )
  );

const mergeDuplicate = arr => {
  return Object.values(
    arr.reduce((acc, current) => {
      const unique = current._source.source + "/" + current._source.slug;
      // case we've already seen the same result from a different algo
      if (
        acc[unique] != undefined &&
        acc[unique]._source.algo != current._source.algo
      ) {
        acc[unique]._source.algo = "both";
      } else {
        acc[unique] = current;
      }
      return acc;
    }, {})
  );
};

const mergePipe = (a, b, max_result) => {
  const res = merge(a, b, a.length + b.length);
  return mergeDuplicate(res).slice(0, max_result);
};

exports.merge = merge;
exports.removeDuplicate = removeDuplicate;
exports.mergePipe = mergePipe;
