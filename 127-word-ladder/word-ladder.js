/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function (beginWord, endWord, wordList) {
    let seen = new Set(wordList);
    if (!seen.has(endWord)) return 0;
    let q = [];
    q.push([beginWord, 1]);
    while (q.length > 0) {
        let [currWord, seq] = q.shift();
        if (currWord == endWord) return seq;
        //try changing letters in currword
        for (let i = 0; i < currWord.length; i++) {
            for (let ch = 97; ch <= 122; ch++) {
                let newWord =
                    currWord.slice(0, i) +
                    String.fromCharCode(ch) +
                    currWord.slice(i + 1);
                if (seen.has(newWord)) {
                    q.push([newWord, seq + 1]);
                    seen.delete(newWord);
                }
            }
        }
    }
    return 0;
};
