function getComputerChoice  () {
   return Math.floor(Math.random() * 3);
}

if (getComputerChoice() === 0) {
    console.log("rock");
}
else if (getComputerChoice() === 1) {
    console.log("paper");
}
else {
    console.log("scissors")
}