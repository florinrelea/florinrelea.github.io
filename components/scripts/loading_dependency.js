var loading = {
      "state": true,
      "displayer": null,
      "create_loader": function () {
            console.log("Creating loading animation...");
            var settings = { 
                  "canvas": {
                        "width": 200,
                        "height": 200,
                        "refresh_rate": 1000/30
                  },
                  "circle": {
                        "radius": 50,
                        "line_width": 30
                  }
            }
            var myCanvas = document.getElementById("dynamic");
            myCanvas.width = settings.canvas.width;
            myCanvas.height = settings.canvas.height;
            var pen = myCanvas.getContext("2d");
            function clear_canvas() { 
                  pen.fillStyle = "white";
                  pen.fillRect(0, 0, settings.canvas.width, settings.canvas.height);
            }
            // Start animation
            pen.lineWidth = settings.circle.line_width;
            var animation = {
                  "state": 0,
                  "start": -0.2,
                  "end": 6,
                  "speed": 0.2,
                  "color_set": ["#EA4335", "#4285F4"],
                  "color_set_2": ["#ffffff","#FBBC05"]
            }
            this.displayer = setInterval(function () {
                  clear_canvas();
                  animation.state += animation.speed;

                  // Inner core 1
                  pen.beginPath();
                  pen.strokeStyle = animation.color_set[1];
                  pen.arc(settings.canvas.width / 2, settings.canvas.height / 2, settings.circle.radius - settings.circle.line_width, animation.state, 2 * Math.PI, true);
                  pen.stroke();
                  pen.closePath();

                  // Inner core 2
                  pen.beginPath();
                  pen.strokeStyle = animation.color_set[0];
                  pen.arc(settings.canvas.width / 2, settings.canvas.height / 2, settings.circle.radius - settings.circle.line_width, animation.state, 2 * Math.PI, false);
                  pen.stroke();
                  pen.closePath();

                  //Stroke 1
                  pen.beginPath();
                  pen.strokeStyle = animation.color_set_2[0];
                  pen.lineWidth = settings.circle.line_width/2;
                  pen.arc(settings.canvas.width / 2, settings.canvas.height / 2, settings.circle.radius, animation.state, 2 * Math.PI, true);
                  pen.stroke();
                  pen.closePath();
                  pen.lineWidth = settings.circle.line_width;

                  //Stroke 2
                  pen.beginPath();
                  pen.strokeStyle = animation.color_set_2[1];
                  pen.strokeStyle = animation.color_set_2[1];
                  pen.lineWidth = settings.circle.line_width/2;
                  pen.arc(settings.canvas.width / 2, settings.canvas.height / 2, settings.circle.radius, animation.state, 2 * Math.PI, false);
                  pen.stroke();
                  pen.closePath();
                  pen.lineWidth = settings.circle.line_width;

                  // Stroke 3
                  pen.beginPath();
                  pen.strokeStyle = animation.color_set[0];
                  pen.arc(settings.canvas.width / 2, settings.canvas.height / 2, settings.circle.radius + settings.circle.line_width, animation.state, 2 * Math.PI,true);
                  pen.stroke();
                  pen.closePath();

                  //Stroke 4
                  pen.beginPath();
                  pen.strokeStyle = animation.color_set[1];
                  pen.arc(settings.canvas.width / 2, settings.canvas.height / 2, settings.circle.radius + settings.circle.line_width, animation.state, 2 * Math.PI,false);
                  pen.stroke();
                  pen.closePath();

                  if (animation.state >= animation.end) {
                        var old_color_sets = [[animation.color_set[0], animation.color_set[1]], [animation.color_set_2[0], animation.color_set_2[1]]];
                        animation.color_set[0] = old_color_sets[0][1];
                        animation.color_set[1] = old_color_sets[0][0];
                        animation.color_set_2[0] = old_color_sets[1][1];
                        animation.color_set_2[1] = old_color_sets[1][0];
                        animation.state = animation.start;
                  } else if (animation.state <= animation.start) { 
                        var old_color_sets = [[animation.color_set[0], animation.color_set[1]], [animation.color_set_2[0], animation.color_set_2[1]]];
                        animation.color_set[0] = old_color_sets[0][1];
                        animation.color_set[1] = old_color_sets[0][0];
                        animation.color_set_2[0] = old_color_sets[1][1];
                        animation.color_set_2[1] = old_color_sets[1][0];
                  }
            }, settings.canvas.refresh_rate);
      },
      "finish": function () {
            console.log("Loading -> finished!");
            this.state = false;
            clearInterval(this.displayer);
            var loadingScreen = document.getElementById("loading_screen");
            loadingScreen.parentElement.removeChild(loadingScreen);
      }
}