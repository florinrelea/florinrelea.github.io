/* IE doesn't support:
let variables,
promises,
forEach loops
*/
load_document();
function load_document() {
      loading.create_loader();
      // Display the loading screen for at least 1s
      setTimeout(function () {
            // Trigger error after 5 seconds
            var error_trigger = setTimeout(function () {
                  clearInterval(checker);
                  document.body.innerHTML = "Sorry but a loading error occured! Please reload..."
            }, 5000)
            var checker = setInterval(function () {
                  if (document.readyState == 'complete') {
                        clearTimeout(error_trigger);
                        clearInterval(checker);
                        console.log("The document has been loaded!");
                        loading.finish();
                        console.log("Scroll the document to top");
                        document.documentElement.scrollTop = 0;
                        var lazyComponents = {
                              "base_id": "lazy_div",
                              "load_index": 1,
                              "count": 6
                        };
                        function onscrollLoader() { 
                              // if document scrolled at elementview - display height then load div
                              if (document.documentElement.scrollTop >= document.getElementById(lazyComponents.base_id + "_" + lazyComponents.load_index).offsetTop - window.innerHeight) {
                                    console.log("Loading: " + lazyComponents.base_id, lazyComponents.load_index);
                                    const containerImages = document.querySelectorAll("#" +
                                          lazyComponents.base_id + "_" + lazyComponents.load_index + " img");
                                    for (var x = 0; x < containerImages.length; x++) {
                                          console.log("Loading: ", lazyComponents.base_id, lazyComponents.load_index, " -> img ", x);
                                          containerImages[x].src = containerImages[x].name;
                                    }
                                    lazyComponents.load_index++;
                                    if (lazyComponents.load_index > lazyComponents.count) { 
                                          window.removeEventListener("scroll", onscrollLoader);
                                    }
                              }
                        }
                        window.addEventListener("scroll", onscrollLoader);
                  }
            }, 50)
      }, 1000)
}
var load_check = setInterval(function () {
      if (loading.state === false) {
            clearInterval(load_check);
            document.querySelector(".h-box .profile-pic").classList.add("left_slider");
            document.querySelector(".h-box .text").classList.add("bottom_slider");
            document.querySelector(".center-container .description").classList.add("bottom_slider");
            // Lazy loading components
      }
}, 100)