document.getElementById("headacheForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const food = document.getElementById("food").value;
    const studyTime = document.getElementById("studyTime").value;
    const sleep = document.getElementById("sleep").value;

    let issue = "";
    let solution = "";

    // ගැටළුව හඳුනා ගන්න
    if (food === "junk") {
        issue += "කඩ ආහාර ලබා ගැනීමෙන් අසනීප විය හැක.";
        solution += "පෝෂ්‍යදා​යී ආහාර හා ප්‍රමාණවත් ජලය පානය කිරීම​ට උත්සාහ කරන්න. ";
    } else if (food === "none") {
        issue += "ආහාර නොකමින් සිටීමෙන් අසනීප විය හැ​ක";
        solution += "නිතරම ආහාර පිළිබඳ අවධානයෙන් සිටින්න අමතක නොකරන්න!";
    }

    if (studyTime === "yes") {
        issue += "දිගු කාලයක් පාඩම් කිරීමෙන් ඔබේ ඇස් විඩාවට පත් ​වී අසනීප විය හැ​ක";
        solution += "පාඩම් කරන කාලය ඇතුළත සාමාන්‍ය විවේක ලබා ගන්න.";
    }

    if (sleep === "no") {
        issue += "හොඳින් නින්ද නොගැනීම අසනීප ඇති කරයි.";
        solution += "අවම වශයෙන් පැය 8ක් නින්ද ගන්න උත්සාහ කරන්න. ";
    }

    if (issue === "") {
        issue = "අසනීප තත්ත්වය සඳහා හේතුවක් සොයා ගත නොහැකියි.";
        solution = "තව දුරටත් පවතී නම් වෛද්‍ උපදේශිත විසඳුම් ලබා ගන්න. - හොඳ අයුරු පවත්වාගෙන යන්න!";
    }

    // ප්‍රතිඵලය ප්‍රදර්ශනය කරන්න
    document.getElementById("result").innerHTML = `<h2>හඳුනාගත් ගැටලුව:</h2><p>${issue}</p><h2> විසඳුම්:</h2><p>${solution}</p>`;
});
