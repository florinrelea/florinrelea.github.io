let loading = setInterval(() => {
    if(document.readyState == 'complete'){
      let loadScreen = document.getElementById("loading");
      loadScreen.parentNode.removeChild(loadScreen);
      clearInterval(loading);
    };
},50);