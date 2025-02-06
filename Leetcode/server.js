const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.post('/fetch-leetcode-data', async (req, res) => {
  const { username } = req.body;

  const graphqlQuery = {
    query: `
      query getUserProfile($username: String!) {
        matchedUser(username: $username) {
          username
          submitStats {
            acSubmissionNum {
              difficulty
              count
            }
          }
        }
      }
    `,
    variables: { username }
  };

  try {
    const response = await fetch('https://leetcode.com/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Include your LeetCode session cookie for authenticated requests if necessary
        'Cookie': 'YOUR_SESSION_COOKIE_HERE',
      },
      body: JSON.stringify(graphqlQuery),
    });

    if (!response.ok) {
      throw new Error('Failed to fetch data from LeetCode');
    }

    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
