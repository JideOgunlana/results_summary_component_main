// import data from "../data.json" assert {type: ".json"};



let setScores = () => {

    const reaction = document.getElementById("reaction");
    const memory = document.getElementById("memory");
    const verbal = document.getElementById("verbal");
    const visual = document.getElementById("visual");
    const userScore = document.getElementById("user-score");
    let result = 0;

    fetch("../data.json")
    .then(
        (response) => {
            if (response)
                return response.json();
            else
                throw new Error("No such file");
        }
    )
    .then(
        (json) => {
            json.forEach(data => {
                switch(data.category.toLowerCase()) {
                    case "reaction":
                        reaction.innerText = data.score;
                        result += data.score;
                    break;
                    case "memory":
                        memory.innerText = data.score;
                        result += data.score;
                    break;
                    case "verbal":
                        verbal.innerText = data.score;
                        result += data.score;
                    break;
                    case "visual":
                        visual.innerText = data.score;
                        result += data.score;
                    break;
                }
                userScore.innerText = Math.floor(result / 4);
            })
        }
    );
}

setScores();