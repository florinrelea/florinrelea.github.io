let loader = setInterval(() => { 
    if (document.readyState === 'complete') { 
        let loadingInterface = document.getElementById("loader");
        loadingInterface.parentElement.removeChild(loadingInterface);
        clearInterval(loader);
    }
}, 10);