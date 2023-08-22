
const axios = window.axios;




const getLeaderboard = async () => {
  const leaderboard = await axios.get("https://api.chess.com/pub/leaderboards");
  const topPlayers = leaderboard.data.live_blitz.slice(0, 50);
  const leaderboardHTML = topPlayers
    .map(
      player =>
        `<div class="player-info">
          <p>Rank #${player.rank} : ${player.username}</p>
          <button onclick="getPlayerInfo('${player.username}')">More Info</button>
        </div>`
    )
    .join("");
  document.getElementById("leaderboard").innerHTML = leaderboardHTML;
};

const getPlayerInfo = async username => {
  const playerInfo = await axios.get(
    `https://api.chess.com/pub/player/${username}`
  );
  const playerDetailsHTML = `
       <h2>${username}</h2>
      <p>Full Name: ${playerInfo.data.name}</p>
       <p>Title: ${playerInfo.data.title}</p>
       <p>Followers: ${playerInfo.data.followers}</p>
       <p>Joined: ${playerInfo.data.joined}</p>
       <p>Location: ${playerInfo.data.location}</p>
     `;
  document.getElementById("player-info").innerHTML = (playerDetailsHTML);
  document.getElementById("player-modal").classList.add("show");
};

document.getElementById("player-modal").addEventListener("click", function() {
  this.classList.remove("show");
});

getLeaderboard()


