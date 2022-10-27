const canvasEffect = () => {
  var c = document.getElementById("canv");
  var $ = c.getContext("2d");

  var col = function (x, y, r, g, b) {
    // $.fillStyle = "rgb(" + (r - 10) + "," + g + "," + b + ")";
    $.fillStyle = "rgb(" + 245 + "," + g + "," + b + ")";
    $.fillRect(x, y, 1, 1);
  };

  var R = function (x, y, t) {
    return Math.floor(192 + 64 * Math.sin((x * x - y * y) / 300 + t));
  };

  var G = function (x, y, t) {
    return Math.floor(
      192 +
        64 * Math.sin((x * x * Math.cos(t / 4) + y * y * Math.sin(t / 3)) / 300)
    );
  };

  var B = function (x, y, t) {
    return Math.floor(
      192 +
        64 *
          Math.sin(
            5 * Math.sin(t / 20) +
              ((x - 100) * (x - 100) + (y - 100) * (y - 100)) / 1100
          )
    );
  };

  var t = 0;

  var run = function () {
    for (var x = 0; x <= 35; x++) {
      for (var y = 0; y <= 35; y++) {
        col(x, y, R(x, y, t), G(x, y, t), B(x, y, t));
        // col(x, y, R(x, y, t), G(255, 255, 0), B(255, 255, 0));
      }
    }
    t = t + 0.03;
    window.requestAnimationFrame(run);
  };
  run();
};

export default canvasEffect;
