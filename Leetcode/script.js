document.addEventListener("DOMContentLoaded", function () {
    const searchButton = document.getElementById('search-btn');
    const usernameInput = document.getElementById('user-input');
    const easyProgressCircle = document.querySelector('.easy-progress');
    const mediumProgressCircle = document.querySelector('.medium-progress');
    const hardProgressCircle = document.querySelector('.hard-progress');
    const easyLabel = document.getElementById('easy-label');
    const mediumLabel = document.getElementById('medium-label');
    const hardLabel = document.getElementById('hard-label');
    const cardsStatsContainer = document.querySelector('.stats-cards');

    function validateUsername(username) {
        if (username.trim() === "") {
            alert("Username should not be empty");
            return false;
        }
        const regex = /^[a-zA-Z0-9_-]{1,15}$/;
        if (!regex.test(username)) {
            alert("Invalid username");
            return false;
        }
        return true;
    }

    async function fetchUserDetails(username) {
        try {
            searchButton.textContent = "Searching...";
            searchButton.disabled = true;

            const response = await fetch('http://localhost:3000/fetch-leetcode-data', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username }),
            });

            if (!response.ok) {
                throw new Error('Failed to fetch user details from server');
            }

            const data = await response.json();
            displayUserData(data);
        } catch (error) {
            cardsStatsContainer.innerHTML = `<p>${error.message}</p>`;
        } finally {
            searchButton.textContent = "Search";
            searchButton.disabled = false;
        }
    }

    function updateProgress(solved, total, label, circle) {
        const progressDegree = (solved / total) * 100;
        circle.style.setProperty("--progress-degree", `${progressDegree}%`);
        label.textContent = `${solved}/${total}`;
    }

    function displayUserData(passedData) {
        const solvedEasyQues = passedData.data.matchedUser.submitStats.acSubmissionNum[1]?.count || 0;
        const solvedMediumQues = passedData.data.matchedUser.submitStats.acSubmissionNum[2]?.count || 0;
        const solvedHardQues = passedData.data.matchedUser.submitStats.acSubmissionNum[3]?.count || 0;

        updateProgress(solvedEasyQues, 500, easyLabel, easyProgressCircle);
        updateProgress(solvedMediumQues, 1000, mediumLabel, mediumProgressCircle);
        updateProgress(solvedHardQues, 1500, hardLabel, hardProgressCircle);

        const cardData = [
            { label: "Overall Easy Submissions", value: solvedEasyQues },
            { label: "Overall Medium Submissions", value: solvedMediumQues },
            { label: "Overall Hard Submissions", value: solvedHardQues },
        ];

        cardsStatsContainer.innerHTML = cardData.map(
            data => `<div class="card"><h4>${data.label}</h4><p>${data.value}</p></div>`
        ).join("");
    }

    searchButton.addEventListener('click', function () {
        const username = usernameInput.value;
        if (validateUsername(username)) {
            fetchUserDetails(username);
        }
    });
});
