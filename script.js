document.addEventListener(
  "DOMContentLoaded",
  function () {
    document.getElementById("timer").innerHTML = "5";
    setTimeout(function () {
      document.getElementById("timer").innerHTML = "4";
      setTimeout(function () {
        document.getElementById("timer").innerHTML = "3";
        setTimeout(function () {
          document.getElementById("timer").innerHTML = "2";
          setTimeout(function () {
            document.getElementById("timer").innerHTML = "1";
            setTimeout(function () {
              document.getElementById("timer").innerHTML =
                "Happy Independence Day ";
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  },
  1000
);
