(async function () {

  function loadScript(src) {
    return new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = resolve;
      script.onerror = reject;
      document.head.appendChild(script);
    });
  }

  try {
    if (typeof jQuery === "undefined") {
      await loadScript("https://code.jquery.com/jquery-3.7.1.min.js");
    }
    await loadScript(
      "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/js/all.min.js"
    );

    $("head").append(`
      <style>

      </style>
    `);

    $("body").html(`


      `);
  } catch (err) {
    console.log("err", err);
  }
})();
