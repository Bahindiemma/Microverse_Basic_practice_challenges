function reverseString(string) {
    let array = [];

    array = string.split('');

    array.reverse('');

    string = array.join('');

    return string;
}

console.log(reverseString("Bahindi"));