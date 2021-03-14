module.exports = function check(str, bracketsConfig) {
  let br = bracketsConfig.flat(Infinity);
  let st = [];
  for (var i = 0; i < str.length; ++i) {
    let ch = str[i];
    let ind = br.indexOf(ch);
    let duplicationBrace = br[ind] === br[ind + 1];
    if (ind >= 0) {
      if (ind & 1) {
        if (!st.length) return false;
        let last_br = st.pop();
        if (last_br != br[ind - 1]) return false;
      } else {
        if (duplicationBrace && st[st.length - 1] === ch) {
          st.pop();
        } else {
          st.push(ch);
        }
      }
    }
  }
  return !st.length;
}
