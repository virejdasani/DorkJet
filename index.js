let generatedAnswer = document.getElementById("generatedAnswer").innerHTML;
let answer;
let availableFieldIDs = ["exact", "intext", "filetype", "website", "website2"];

document.getElementById("generateButton").addEventListener("click", () => {
  for (let i = 0; i < availableFieldIDs.length; i++) {
    answer += document.getElementById(availableFieldIDs[i]).value;
  }
});
