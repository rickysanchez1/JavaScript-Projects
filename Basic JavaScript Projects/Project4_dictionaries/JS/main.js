function myDictionary() {
    let Brandon = { // Creating Key
        career:"Glazier", // These are all values
        age:"43", // These are all values
        height:"5'11", // These are all values
        hair:"short", // These are all values
        children:"3" // These are all values
    };
    let Sydney = { // Created another key for the dictionary with its values below
        career:"Doctor",
        age:"35",
        height:"5'10",
        hair:"long",
        children:"2"
    };
    let Karla = {
        career:"Student",
        age:"15",
        height:"5'6",
        hair:"medium",
        children:"0"
    };
    delete Brandon.career;
    document.getElementById("Dictionary").innerHTML = Brandon.career;
}

let dog = "bow wow"
document.write(typeof dog); // typeof will return the data type of specified variable

document.write(typeof 15);