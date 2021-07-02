(() => {
  "use strict";

  $("#random").on("click", () => {});

  let threads = GmailApp.search("Kindle");
  threads.filter((mail) => {
    mail.moveToTrash();
  });

  let app = new Vue({
    el: "#app",
  });
})();
