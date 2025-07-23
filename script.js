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
          /* Reset and Box Sizing */
*,
::after,
::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Root Font Size */
html {
  font-size: 16px;
}

/* CSS Variables */
:root {
  /* Grey Colors */
  --grey-50: #f8fafc;
  --grey-100: #f1f5f9;
  --grey-200: #e2e8f0;
  --grey-300: #cbd5e1;
  --grey-400: #94a3b8;
  --grey-500: #64748b;
  --grey-600: #475569;
  --grey-700: #334155;

  /* Primary Colors */
  --primary-50: #a29dff;
  --primary-100: #645cff;
  --primary-200: #4f39f6;

  /* Green Colors*/
  --green-50: #00d492;
  --green-100: #00bc7d;
  --green-200: rgba(48, 209, 88, 0.24);
  --green-300: rgba(42, 173, 75, 0.2);
  --green-400: #30d158; /* DÜZELTİLDİ */

  /* Red Colors*/
  --red-50: #ff637e;
  --red-100: #ff2056;
  --red-200: rgba(255, 59, 48, 0.2);
  --red-300: #ff3b30;

  /* Base Colors */
  --black: #222;
  --white: #ffffff;

  /* Layout */
  --backgroundColor: var(--grey-50);
  --borderRadius-50: 0.6rem;
  --borderRadius-100: 1rem;
  --letterSpacing: 1px;
  --transition: 0.3s ease-in-out all;
  --max-width: 1120px;
  --fixed-width: 1120px;
  --view-width: 90vw;

  /* Shadows */
  --shadow-1: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06);
  --shadow-2: 0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06);
  --shadow-3: 0 10px 15px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.05);
  --shadow-4: 0 20px 25px rgba(0, 0, 0, 0.1), 0 10px 10px rgba(0, 0, 0, 0.04);
}

/* Base Body */
body {
  background: var(--backgroundColor);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-weight: 400;
  color: var(--textColor, var(--grey-700));
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
}

/* Typography */
p {
  margin: 0;
}

h1,
h2,
h3,
h4,
h5 {
  margin: 0;
  font-weight: 400;
  line-height: 1;
  text-transform: capitalize;
  letter-spacing: var(--letterSpacing);
}

h1 {
  font-weight: 600;
  font-size: 3rem;
  padding: 1rem;
  color: var(--grey-600);
  text-align: center;
  margin-top: 2rem;
}

ul {
  list-style: none;
}
.ins-api-users {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 5rem auto;
  max-width: var(--fixed-width);
  width: var(--view-width);
}
.ins-user-container {
  display: grid;
  width: 100%;
  gap: 1rem;
}

.ins-user-card {
  background-color: white;
  border-radius: var(--borderRadius-50);
  box-shadow: var(--shadow-2);
}

@media screen and (min-width: 768px) {
  .ins-user-container {
    grid-template-columns: repeat(2, 1fr);
  }
 
}

@media screen and (min-width: 992px) {
  .container h1 {
    font-size: 3rem;
  }

  .ins-user-container {
    grid-template-columns: repeat(3, 1fr);
  }
}

      </style>
    `);

    $("body").html(`
            <div class="ins-api-users"></div>

      `);

    //  let users = JSON.parse(localStorage.getItem("users"));
    // const expiresDate = new Date().getTime() + 1000 * 60 * 60 * 24;
    const $insApiUsers = $(".ins-api-users");
    const expiresDate = new Date().setHours(new Date().getHours() + 24);
    const nowDate = new Date().getTime();
    console.log("date", new Date(expiresDate));
    console.log("expires", expiresDate);

    getData();

    function getData() {
      let users = JSON.parse(localStorage.getItem("users") || []);

      if (users) {
        if (nowDate < users.expiresDate) {
          console.log("users bylundu", users.data);
          addUserToList(users?.data);
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

          addUserToList(data);
        }
      } catch (error) {
        console.log("error");
      }
    }

    function addUserToList(data) {
      let $insUserContainer = $("<div class='ins-user-container'></div>");
      let html = "";
      data.forEach(function (user) {
        html += ` <div class="user-card" data-id=${user.id}>
                    <p> ${user.name}</p>
                    <button class="delete-user" data-id=${user.id}>Sil</button>
                  </div>`;
      });
      $insUserContainer.append(html);
      $insApiUsers.append($insUserContainer);
    }

    $(document).on("click", ".delete-user", function () {
      let users = JSON.parse(localStorage.getItem("users") || []);
      const userId = $(this).data("id");

      const updateUser = users?.data.filter((user) => user?.id !== userId);
      console.log("updateUser", updateUser);
      localStorage.setItem(
        "users",
        JSON.stringify({ data: updateUser, expiresDate: users?.expiresDate })
      );

      $(this)
        .closest(".user-card")
        .fadeOut(200, function () {
          $(this).remove();
          console.log("users silindi");
        });
    });
  } catch (err) {
    console.log("err", err);
  }
})();
