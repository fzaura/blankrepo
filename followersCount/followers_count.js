let count = 0;

function increaseCount() {
    count++;

    displayCount();
    checkCountValue();
}

function resetCount() {
    count = 0;

    document.getElementById("countDisplay").innerHTML=count;
    alert("Follower count has been reset");
}

function displayCount() {
    document.getElementById('countDisplay').innerHTML=count;
}

function checkCountValue() {
    if (count === 10) {
        alert("Your Instagram post gained 10 followers! Congratulations!");
    } else if (count === 20) {
        alert("Your Instagram post gained 20 followers! Congratulations!");
    }
}