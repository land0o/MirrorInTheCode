
let messageField = document.getElementById("message")

let outputId = document.getElementById("article-1")

let outputId1 = document.getElementById("article-2")

messageField.addEventListener("keyup", function (event) {
    outputId.textContent = event.target.value
    outputId1.textContent = event.target.value
});