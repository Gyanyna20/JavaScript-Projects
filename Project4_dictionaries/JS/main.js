function my_Dictionary() {
    var Duck = {
        Color:"White",
        Age:2,
        Sound:"Quack!",
        Breed:"Chinese"
    };
    document.getElementById("Dictionary").innerHTML = Duck.Sound;
    delete Duck.Age; //deleting, the output is undefined
    document.getElementById("Dictionary").innerHTML = Duck.Age;
}