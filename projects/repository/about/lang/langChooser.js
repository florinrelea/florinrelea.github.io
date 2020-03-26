var imported = document.createElement('script');
if(navigator.language == "ro-RO"){
imported.src = 'lang/ro-RO.js';
document.body.appendChild(imported);
}else if(navigator.language != "ro-RO"){
imported.src = 'lang/en-US.js';
document.body.appendChild(imported);
        }