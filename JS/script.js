export function addLabel() {
    $(document).ready(function() {
    const titleBars = document.querySelectorAll(".title-bar");
    const dropdowns = document.querySelectorAll(".dropdown");
    const svgs = document.querySelectorAll("svg");
    const totalLength = titleBars.length;

    // Remove all existing event listners
    for (let i = 0; i < totalLength; i++) {
        $(titleBars[i]).off("click");
        $(dropdowns[i]).off("click");
    }

    // Adding unique id to each title bar and dropdown
    for (let i = 0; i < totalLength; i++) {
        titleBars[i].setAttribute("id", `title-bar-${i}`);
        dropdowns[i].setAttribute("id", `dropdown-${i}`);
        svgs[i].setAttribute("id", `svg-${i}`);
    }

    // Adding new event listners
    for (let i = 0; i < totalLength; i++) {
        $(`#title-bar-${i}`).click(function() {
            let svg = $(`#svg-${i}`);
            svg.toggleClass("expended");
            if (svg.hasClass("expended")) {
                $(`#svg-${i}`).animate({rotate: '90deg'}, 'fast');
            } else {
                $(`#svg-${i}`).animate({rotate: '0deg'}, 'fast');
            }
            $(`#dropdown-${i}`).slideToggle();
        });
    }
    });
}

export function createPieChart({labels, data, backgroundColor}) {
    var ctx = document.getElementById('percentPieChart').getContext('2d');
    var myPieChart;
    $(document).ready(function() {
        myPieChart = new Chart(ctx, {
          type: 'pie',
          data: {
            labels: labels,
            datasets: [{
              data: data,
              backgroundColor: backgroundColor,
            }]
          },
          options: {
            // Change the background color here
            plugins: {
              legend: {
                display: true,
                position: 'top',
                labels: {
                  fontColor: 'rgb(255,255,255)',
                }
              }
            },
            layout: {
              padding: {
                left: 0,
                right: 0,
                top: 0,
                bottom: 0
              }
            },
            maintainAspectRatio: true,
            responsive: true,
            elements: {
              arc: {
                borderWidth: 0
              }
            }
          }
        });
    });
    return myPieChart;
}

export function generateDescription(topicTitle, titles, texts) {
    const start = `<div id="inner-description">`;
    const topic = `<h1 id="topic">${topicTitle}</h1>`;
    const end = `</div>`;
    let outputHTML = start + topic;
    for (let i=0; i<titles.length; i++) {
        let section = `
            <div class="item">
                <div class="title-bar">
                    <h2 class="title">${titles[i]}</h2>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                      <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                    </svg>
                </div>
                <div class="dropdown">
                    <p class="text-content">${texts[i]}</p>
                </div>
            </div>
        `;
        outputHTML += section;
    }
    outputHTML += end;
    return outputHTML;
}

export function insertCanvas(insertAt) {
    const canvasHTML = `<canvas id="percentPieChart" width="300" height="300"></canvas>`;
    const items = $("div.item");
    for (let i=0; i<items.length; i++) {
        if (i === insertAt) {
            $(items[i]).find("div.dropdown").append(canvasHTML);
        }
    }
}