function animation1(){
    anime({
        targets: '.fill_space #test',
        borderRadius: ['0em', '6em'],
        easing: 'easeInOutQuad'
    });
}
function animation2(){
    anime({
        targets: '.fill_space #corigenta',
        borderRadius: ['0em', '4em'],
        easing: 'easeInOutQuad'
    });
}
function animation3(){
    anime({
        targets: '.corner_box #button_dev',
        borderRadius: ['0em', '4em'],
        easing: 'easeInOutQuad'
    });
}
function grade(){
    window.location.href = "../grademe/grades/index.php";
}
function examination(){
    window.location.href = "../grademe/corigenta/index.php";

}
function development(){
    window.location.href = "../grademe/development/index.php";
}