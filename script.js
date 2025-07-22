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
            <div class="ins-api-users"></div>

      `);
      
      
      
      
       let users = JSON.parse(localStorage.getItem("users"));
    // const expiresDate = new Date().getTime() + 1000 * 60 * 60 * 24;
    const expiresDate = new Date().setHours(new Date().getHours() + 24);
    const nowDate = new Date().getTime();
    console.log("date", new Date(expiresDate));
    console.log("expires", expiresDate);

    getData();

    function getData() {
      if (users) {
        if (nowDate < users.expiresDate) {
          console.log("users bylundu", users.data);
        } else {
          console.log("suresi dolmuş userların");
          fetchUsers();
        }
      } else {
        console.log("users bulunamadı");
        fetchUsers();
      }
    }

    async function fetchUsers() {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await res.json();
        if (res.status === 404) {
          throw new Error("404 Not Found");
        } else if (res.status === 500) {
          throw new Error("500 Internal Server Error");
        } else {
          console.log("data", data);
          localStorage.setItem(
            "users",
            JSON.stringify({
              data,
              expiresDate,
            })
          );
        }
      } catch (error) {
        console.log("error");
      }
    }
      
      
      
      
      
      
      
      
  } catch (err) {
    console.log("err", err);
  }
})();
