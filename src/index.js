/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
	let count = 0
  for (let i = 1, j, k, l; i <= preferences.length; i++) {
    j = preferences[i - 1]
    k = preferences[j - 1]
    l = preferences[k - 1]
    if (l === i) {
      count++
    }
  }

  if (count / 3 >= 1) {
    return Math.floor(count / 3)
  } else {
    return 0
  }
};
