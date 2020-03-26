function displayCopyWright(elementId){
    let d = new Date();
    let presentYear = d.getFullYear();
    document.getElementById(elementId).textContent = presentYear+"-"+(presentYear+1);
}
setTimeout( () => {displayCopyWright("copyPeriod")}, 500);