/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function (s) {
  let st = [];
  for (let i = 0; i < s.length; i++) {
    if (st.length > 0 && s[i] === st[st.length - 1]) {
      st.pop();
    } else {
      st.push(s[i]);
    }
  }
  return st.join("");
};