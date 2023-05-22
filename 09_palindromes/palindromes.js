const palindromes = function (string) {
    let changeForm = string.toLowerCase().replace(/[^a-z]/g,"")
    let splitArray = changeForm.split("")
    let reversedArray = splitArray.reverse()
    let reversedString = reversedArray.join("")

    if(changeForm === reversedString)
    {
        return true
    }
    else
    {
        return false
    }

};


// Do not edit below this line
module.exports = palindromes;
