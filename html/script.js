$(document).ready(function() {
  const tabs = $(".tab-link");
  const content = $("#content");

  tabs.click(function(event) {
    event.preventDefault();
    const url = $(this).attr("href");
    loadTabContent(url);
  });

  function loadTabContent(url) {
    $.ajax({
      url: url,
      type: "GET",
      success: function(response) {
        content.html(response);
      },
      error: function(xhr, status, error) {
        console.log(error);
      }
    });
  }

  // Początkowe załadowanie pierwszej zakładki
  const firstTab = tabs.first();
  const firstTabUrl = firstTab.attr("href");
  loadTabContent(firstTabUrl);
});