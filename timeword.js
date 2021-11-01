function timeWord(input) {
    let fields = input.split(':');
    let h = fields[0];
    let m = fields[1];

    if (h.startsWith('0')) h = h.substring(1);
    if (m.startsWith('0')) m = m.substring(1);

    return printWords(+h, +m);
}

function printWords(h, m) {
    let nums = [
        'zero',
        'one',
        'two',
        'three',
        'four',
        'five',
        'six',
        'seven',
        'eight',
        'nine',
        'ten',
        'eleven',
        'twelve',
        'thirteen',
        'fourteen',
        'fifteen',
        'sixteen',
        'seventeen',
        'eighteen',
        'nineteen',
        'twenty',
        'twenty one',
        'twenty two',
        'twenty three',
        'twenty four',
        'twenty five',
        'twenty six',
        'twenty seven',
        'twenty eight',
        'twenty nine'
    ];

    if (m == 0) return nums[h] + " o' clock ";
    else if (m == 1) return 'one minute past ' + nums[h];
    else if (m == 59) return 'one minute to ' + nums[h % 12 + 1];
    else if (m == 15) return 'quarter past ' + nums[h];
    else if (m == 30) return 'half past ' + nums[h];
    else if (m == 45) return 'quarter to ' + nums[h % 12 + 1];
    else if (m <= 30) return nums[m] + ' minutes past ' + nums[h];
    else if (m > 30) return nums[60 - m] + ' minutes to ' + nums[h % 12 + 1];
}

module.exports = timeWord;