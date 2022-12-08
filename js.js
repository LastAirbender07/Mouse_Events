function enlarge()
{
    var y = document.getElementById("demo1");
    y.style.fontSize = "35px";
}
function replace()
{
    var input = document.getElementById("input").value;
    var search = document.getElementById("search").value;
    var replace = document.getElementById("replace").value;
    var regex = new RegExp(search, "g");
    var result = input.replace(regex, replace);
    document.getElementById("demo2").innerHTML = result;
}

