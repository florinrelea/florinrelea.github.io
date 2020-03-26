const randomChars = ["!","@","#","$","%","^","&","*","+","-"]; // 0-9
function clickedButton(object){
    object.addEventListener('click', function(){
    window.location.assign("../product/cHJvZHVjdA==.html"+"#"+varUrlTransported(this.className));   
    });
}
function varUrlTransported(package){
    package = package.split('');
    var encoded = '';
    for(var i=0;i<=package.length-1;i++){
        //if there is any white space than -> space = '_'
        if(package[i] == ' '){package[i] = '_'}
        encoded += package[i];
        var randomized = Math.floor(10*Math.random()/2);
        for(var z=0;z<=randomized-1;z++){
            var randomizedChar = Math.floor(Math.random() * 10);
            encoded += randomChars[randomizedChar];
        }
    }
    return encoded
}