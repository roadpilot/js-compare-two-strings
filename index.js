/*
Given two stings ransomNote and magazine, return true if ransomNote can be constructed from magazine and false otherwise.

Each letter in magazine can only be used once in ransomNote.
*/
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    let inR = true
    for (let i=0; i<ransomNote.length; i++){
        let char = ransomNote[i]
        let test1 = ransomNote.split('').filter(el => el === char)
        let test2 = magazine.split('').filter(el => el === char)
        console.log(char, test1.length, test2.length, test1.length==test2.length)
        if (test2.length==0 || test1.length > test2.length){
            inR = false
        }
    }
    return inR
}