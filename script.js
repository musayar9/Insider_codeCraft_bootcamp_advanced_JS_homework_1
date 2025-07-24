(async function () {
  function loadCSS(href) {
    return new Promise((resolve, reject) => {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = href;
      link.onload = resolve;
      link.onerror = reject;
      document.head.appendChild(link);
    });
  }
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
    // await loadScript(
    //   "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/js/all.min.js"
    // );

    await loadCSS(
      "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css"
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
  --fixed-width: 1200px;
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
  padding: 0.675rem 1rem;
   transition: var(--transition);
   cursor: pointer;
     position: relative;
}
.ins-user-card:hover {
  transform: translateY(-4px);
  border: 1px solid var(--green-100);
  background-color: var(--green-200);
}

.ins-user-card:hover .ins-name-initials{
transform: scale(1.05);
border-color: var(--white);
color: var(--green-100);
box-shadow: var(--shadow-3);

}

.ins-card-content {
  display: flex;
  align-items: center;
  gap: 1rem;
   padding: 0.8rem;
 
}

.ins-name-initials {
  width: 4rem;
  height: 4rem;
  border-radius: 100%;
  border: 1px solid var(--grey-300);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: var(--shadow-1);
  color: var(--grey-600);
  font-weight: bold;
}


.ins-card-info {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}

.ins-user-name {
  font-size: 1.05rem;
  font-weight: 600;
  color: var(--grey-600);
}

.ins-user-email,
.ins-user-phone {
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--grey-500);
}

.fa-phone,
.fa-envelope {
  color: var(--green-100);
  padding-right: 0.3rem;
}

.ins-user-detail{
display: flex;
align-items: center;
justify-content: space-around;
margin: 1.4rem 0;
gap: 1rem;
}


.ins-user-detail-active {
  color: var(--green-100);
}
.ins-user-detail-content {
  text-align: center;
  color: var(--green-100);
  font-weight: bold;
  padding-bottom: 1rem;
}

.ins-user-company,
.ins-user-website {
  display: none;
}



.ins-delete-user {
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  background-color: white;
  border: 1px solid var(--grey-300);
  transition: var(--transition);
  cursor: pointer;
}

.ins-user-card:hover .ins-delete-user {
  background-color: #ffe4e6;
  transform: scale(1.05);
  border-color: var(--white);
  box-shadow: var(--shadow-2);
}

.ins-delete-user:hover .fa-trash {
  transform: translateY(-4px);
}

.ins-delete-user .fa-trash {
  color: var(--red-100);
  transition: var(--transition);
}

.message {
  position: absolute;
  top: 5rem;
  right: 2rem;
  padding: 0.625rem 2rem;
  font-weight: 500;
  font-size: 1rem;
  border-radius: var(--borderRadius-50);
  box-shadow: var(--shadow-2);
  z-index: 1;
}

.success-message {
  background-color: #e0e7ff;
  color: var(--primary-200);
  border: 2px solid var(--primary-100);
}

.fa-check{
    padding-right: 0.4rem;
}
.ins-error-content {
  margin: 4rem auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
}

.ins-error-message{
    font-size: 4rem;
    color: var(--red-300);
    font-weight: 600;
}

.ins-error-image {
  height: 24rem;
}
.ins-not-user {
  background-color: var(--white);
  width: var(--view-width);
  max-width: 500px;
  border-radius: var(--borderRadius-50);
  box-shadow: var(--shadow-1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  padding: 0.675rem 1rem;
}

.fa-circle-exclamation {
  font-size: 5rem;
  color: var(--red-100);
}

.ins-not-user-message {
  font-size: 1.2rem;
  color: var(--grey-500);
  font-weight: 500;
}

.ins-not-user-button {
  background-color: var(--primary-25);
  border: 1px solid var(--primary-100);
  padding: 0.675rem 1rem;
  border-radius: var(--borderRadius-50);
  width: 50%;
  font-size: 1rem;
  color: var(--primary-200);
  transition: var(--transition);
  cursor: pointer;
  box-shadow: var(--shadow-1);
}

.fa-arrow-rotate-left{
  padding-right: 0.5rem;

  
}


.ins-not-user-button:hover{
transform: translateY(-4px);
  background-color: var(--primary-50);
  color: var(--white);
  box-shadow: var(--shadow-2);
}
@media screen and (min-width: 768px) {
  .ins-user-container {
    grid-template-columns: repeat(2, 1fr);
  }
 
}

/* Loading Spinner */
.loading-spinner {
  display: none;
  color: var(--green-100);
  font-size: 1rem;
  margin: 40px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.spinner-animation {
  border: 5px solid var(--grey-100);
  border-top: 5px solid var(--green-100);
  width: 50px;
  height: 50px;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

.loading-spinner p {
  font-size: 1.2rem;
  font-weight: 600;
  padding: 1rem 0;
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

    const $insApiUsers = $(".ins-api-users");
    const expiresDate = new Date().setHours(new Date().getHours() + 24);
    const nowDate = new Date().getTime();
    let isLoading = false;

    // Page Title Created
    $("<h1>User List - Fetch API</h1>")
      .addClass("ins-page-title")
      .insertBefore($insApiUsers);

    getData();

    // "We are checking and fetching data from LocalStorage on page load."
    function getData() {
      let users = JSON.parse(localStorage.getItem("users"));

      if (users?.data.length > 0) {
        if (nowDate < users.expiresDate) {
          addUserToList(users?.data);
        } else {
          fetchUsers();
        }
      } else {
        fetchUsers();
      }
    }

    // Fetching users from API, saving to localStorage and list
    async function fetchUsers() {
      try {
        isLoading = true;
        loading();
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await res.json();
        if (res.status === 404) {
          throw new Error("404 Not Found");
        } else if (res.status === 500) {
          throw new Error("500 Internal Server Error");
        } else {
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
        errorMessage(error);
      } finally {
        isLoading = false;
        loading();
      }
    }

    function loading() {
      if (isLoading) {
        let loadingSpin = ` <div class="loading-spinner" id="loading">
          <div class="spinner-animation"></div>
          <p>Loading...</p>
      </div>`;
        $("body").append(loadingSpin);
      } else {
        $("#loading").remove();
      }
    }

    //Adding data fetched from the API to the UI
    function addUserToList(data) {
      let $insUserContainer = $("<div class='ins-user-container'></div>");
      let html = "";
      data.forEach(function (user) {
        html += `<div class="ins-user-card" data-id=${user.id}>
                    <div class="ins-card-content">
                       <p class="ins-name-initials">${getUserName(
                         user?.name
                       )}</p>
                       <div class="ins-card-info">
                            <p class="ins-user-name">${user?.name}</p>
                            <p class="ins-user-email"><i class="fa-solid fa-envelope"></i> <span>${
                              user.email
                            }</span></p>
                            <p class="ins-user-phone"><i class="fa-solid fa-phone"></i><span>${
                              user.phone
                            }</span></p>
                       </div>
                            <button class="ins-delete-user" data-id=${
                              user.id
                            }><i class="fa-solid fa-trash"></i></button>
                    </div>
                     <div class="ins-user-detail">
                          <i class="fa-solid fa-location-dot ins-user-detail-active"></i>
                          <i class="fa-solid fa-building"></i>
                          <i class="fa-solid fa-globe"></i>
                       </div>
                       <div class="ins-user-detail-content">
                             <p class="ins-user-address">${
                               user.address.city
                             } / ${user.address.street}</p>
                             <p class="ins-user-company"><span>${
                               user.company.name
                             } </span><br><span>${
          user.company.catchPhrase
        }</span></p>
                             <p class="ins-user-website">${user.website}</p>
                       </div>
                  </div>`;
      });
      $insUserContainer.append(html);
      $insApiUsers.append($insUserContainer);
    }

    // Displaying information based on icons
    $(document).on("mouseover", ".ins-user-detail i", function () {
      const $icon = $(this);
      const $cardItem = $icon.closest(".ins-user-card");
      const detailContent = $cardItem.find(".ins-user-detail-content");
      detailContent.find("p").slideUp();

      if ($icon.hasClass("fa-location-dot")) {
        $cardItem.find(".ins-user-address").stop(true, true).slideDown();
      } else if ($icon.hasClass("fa-building")) {
        $cardItem.find(".ins-user-company").stop(true, true).slideDown();
      } else if ($icon.hasClass("fa-globe")) {
        $cardItem.find(".ins-user-website").stop(true, true).slideDown();
      }

      $cardItem
        .find(".ins-user-detail i")
        .removeClass("ins-user-detail-active");
      $icon.addClass("ins-user-detail-active");
    });

    // Deleting a user from the list
    $(document).on("click", ".ins-delete-user", function () {
      let users = JSON.parse(localStorage.getItem("users") || []);
      const userId = $(this).data("id");
      const findUser = users?.data.find((user) => user?.id === userId);
      const updateUser = users?.data.filter((user) => user?.id !== userId);
      localStorage.setItem(
        "users",
        JSON.stringify({ data: updateUser, expiresDate: users?.expiresDate })
      );

      $(this)
        .closest(".ins-user-card")
        .fadeOut(200, function () {
          $(this).remove();
        });

      successMessageToastify(
        `${findUser?.name} was removed from the user list.`
      );
      deletedAllUser(updateUser);
    });

    // Notification message displayed on the screen when all users are deleted
    function deletedAllUser(updateUser) {
      if (updateUser?.length === 0) {
        const div = $("<div></div>").addClass("ins-not-user");
        const i = $("<i></i>").addClass("fa-solid fa-circle-exclamation");
        const p = $("<p></p>")
          .text("All users were removed from the list")
          .addClass("ins-not-user-message");
        const button = $("<button></button>")
          .addClass("ins-not-user-button")
          .append($("<i class='fa-solid fa-arrow-rotate-left'></i>"))
          .append($("<span>Refresh</span>"));

        div.append(i, p, button).slideUp(200).slideDown(200);
        $("body").append(div);

        button.click(function () {
          div.remove();
          fetchUsers();
        });
      }
    }
    // Create icon according to user's  first name, and last name
    function getUserName(username) {
      const value =
        username.split(" ")[0].charAt().toUpperCase() +
        username.split(" ")[1].charAt().toUpperCase();
      return value;
    }
    // Success Messagge Toastify
    function successMessageToastify(message) {
      $(".message").remove();
      const div = $("<div></div>");
      const icons = $("<i></i>").addClass("fa-solid fa-check");
      div
        .addClass("message success-message")
        .hide()
        .text(message)
        .prependTo($insApiUsers)
        .fadeIn(500);

      icons.prependTo(".success-message");
      setTimeout(function () {
        $(".success-message").fadeOut(500, function () {
          $(this).remove();
        });
      }, 5000);
    }
    // Error message displayed on the screen in case of an error
    function errorMessage(message) {
      const div = $("<div></div>").addClass("ins-error-content");
      const p = $("<p></p>").text(message).addClass("ins-error-message");
      const img = $("<img/>")
        .addClass("ins-error-image")
        .attr(
          "src",
          "https://media.istockphoto.com/id/1095047472/vector/error-page-dead-emoji-illustration.jpg?s=612x612&w=0&k=20&c=mEAErA572V--tYXvGYaNcclA17boFY8S8UwIgOgCZek="
        )
        .attr("alt", "error-image");

      div.append(p);
      p.before(img);
      $(".ins-page-title").remove();
      $insApiUsers.remove();
      $("body").append(div).css("backgroundColor", "white");
    }
  } catch (err) {
    console.log("err", err);
    alert(error);
  }
})();
