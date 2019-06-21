one = () =>{
    document.getElementById('labels').value += '1';
}
two = () =>{
    document.getElementById('labels').value += '2';
}
three = () =>{
    document.getElementById('labels').value += '3';
}
four = () =>{
    document.getElementById('labels').value += '4';
}
five = () =>{
    document.getElementById('labels').value += '5';
}
six = () =>{
    document.getElementById('labels').value += '6';
}
seven = () =>{
    document.getElementById('labels').value += '7';
}
eight = () =>{
    document.getElementById('labels').value += '8';
}
nine = () =>{
    document.getElementById('labels').value += '9';
}
zero = () =>{
    document.getElementById('labels').value += '0';
}
dot = () =>{
    document.getElementById('labels').value += '.';
}
plus = () =>{
    document.getElementById('labels').value += '+';
}
minus = () =>{
    document.getElementById('labels').value += '-';
}
divide = () =>{
    document.getElementById('labels').value += '/';
}
mult = () =>{
    document.getElementById('labels').value += '*';
}
equal = () =>{
    let result = document.getElementById('labels');
    let answer = eval(result.value) 
    if(document.getElementById('labels').value == ""){
        document.getElementById('ans').value = "";
    }else
     document.getElementById('ans').value = answer;
}
del = () =>{
    let  values = document.getElementById('labels');
   values.value = values.value.substr(0, values.value.length - 1);
}