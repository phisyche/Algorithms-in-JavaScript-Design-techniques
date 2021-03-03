function getSubsequence(word){

    // base case

    if(word == ''){
        return '';
    }

    const first = word.charAt(0);

    const rest_string = getSubsequence(word.substring(1));

    let result = '';

    rest_string.split(',').forEach(subseq =>{

        result += ','+ first + subseq;
        result += ','+ subseq

    });

    return result.substring(1);


}

subsequences = getSubsequence('Nothing')
console.log(subsequences)