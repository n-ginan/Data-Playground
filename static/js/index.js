document.addEventListener("DOMContentLoaded", () => {
    const ctx = document.getElementById("chart").getContext("2d");
    const dataset = [
        {
            label: "Read",
            data: [14],
            backgroundColor: "red"
        },
        {
            label: "Dog",
            data: [14],
            backgroundColor: "blue"
        }
    ]
    new Chart(ctx, {
        type: "bar",
        data: {
            labels: ["Red", "Orange", "Blue"],
            datasets: dataset
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});
