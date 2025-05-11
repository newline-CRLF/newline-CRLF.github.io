document.addEventListener("DOMContentLoaded", function () {
    const greetingElement = document.getElementById("greeting");
    const now = new Date();
    const hour = now.getHours();
    let greetingText = "";

    if (hour >= 5 && hour < 11) {
        greetingText = "おはようございます!!";
    } else if (hour >= 11 && hour < 18) {
        greetingText = "こんにちは～";
    } else if (hour >= 18 && hour < 23) {
        greetingText = "こんばんは～";
    } else {
        greetingText = "もう夜遅いよ～早く寝たほうがいいよ～おやすみ～";
    }

      greetingElement.textContent = greetingText;
});