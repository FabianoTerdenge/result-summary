//add data.json to html
let summary = document.getElementById("summary");
console.log("Summary:", summary);
fetch('data.json')
    .then((response) => response.json())
    .then((json) => {
        json.forEach(summaryItem => {
            //create element 
            let left = document.createElement("div");
            left.style.display ="flex";
            left.className = "left";
            let right = document.createElement("div");
            right.className = "right"
            let element = document.createElement("div");
            element.className = "summaryItem";
            element.style.backgroundColor = summaryItem.backgroundColor;
            let name = document.createElement("span");
            name.innerHTML = summaryItem.category;
            name.style.color = summaryItem.color;
            let score = document.createElement("span");
            score.innerHTML = summaryItem.score;
            let scoreOf = document.createElement("span");
            scoreOf.innerHTML = " / 100";
            let img = document.createElement("img");
            img.src = summaryItem.icon;
            img.alt = summaryItem.icon.split("/").splice(-1)[0];

            left.appendChild(img);
            left.appendChild(name);
            right.appendChild(score);
            right.appendChild(scoreOf);
            element.appendChild(left);
            element.appendChild(right);
            summary.appendChild(element);
        });
    }
    );

