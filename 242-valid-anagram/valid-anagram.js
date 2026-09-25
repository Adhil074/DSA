/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    if (s.length !== t.length) return false;

    let seen = new Map();

    // Step 1: Count frequency of each character in string s
    for (let i = 0; i < s.length; i++) {
        if (seen.has(s[i])) {
            seen.set(s[i], seen.get(s[i]) + 1);
        } else {
            seen.set(s[i], 1);
        }
    }

    // Step 2: Decrement frequency for each character in string t
    for (let j = 0; j < t.length; j++) {
        if (!seen.has(t[j])) {
            return false; // Character in t doesn't exist in s
        } else {
            seen.set(t[j], seen.get(t[j]) - 1);
        }

        // Delete key if count drops to 0
        if (seen.get(t[j]) === 0) {
            seen.delete(t[j]);
        }
    }

    // Step 3: If all characters matched, return true
    return true;
};