/**
 * @param {string} text
 * @return {string}
 */
var entityParser = function(text) {
  text = text.replace(/&quot;/g, '"')
  text = text.replace(/&apos;/g, "'")
  text = text.replace(/&amp;/g, '&')
  text = text.replace(/&gt;/g, '>')
  text = text.replace(/&lt;/g, '<')
  text = text.replace(/&frasl;/g, '/')
  return text
};

console.warn(entityParser("&amp; is an HTML entity but &ambassador; is not."))
console.warn(entityParser("and I quote: &quot;...&quot;") === "and I quote: \"...\"")
console.warn(entityParser("Stay home! Practice on Leetcode :)") === "Stay home! Practice on Leetcode :)")
console.warn(entityParser("x &gt; y &amp;&amp; x &lt; y is always false") === "x > y && x < y is always false")
console.warn(entityParser("leetcode.com&frasl;problemset&frasl;all") === "leetcode.com/problemset/all")
