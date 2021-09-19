const button = document.getElementById("fetch-btn");
button.addEventListener("click", function() {
    // AJAX запрос с XMLHttpRequest
    const request = new XMLHttpRequest();
    request.open("GET", "/api/users/");
    request.onload = function() {
        const jsonResponse = JSON.parse(this.response);
        buildList(jsonResponse);
    };
    request.send();
});
function buildList(data) {
    console.log(data);
}