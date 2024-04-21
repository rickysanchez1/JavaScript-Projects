function sub1Function() {
    document.getElementById("Nested_Function").innerHTML = Reduce();
    function Reduce() {
        let initial = 42;
        function Sub_one() {initial -= 1;}
        Sub_one();
        return initial;
    }
}