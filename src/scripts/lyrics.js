class Lyrics {
  constructor() {
    // ...
    this.getNewLyrics();
  }
  
  cleanup() {
    const innerDiv2 = document.querySelector(".inner-div2");
    innerDiv2.innerHTML = "";
  }
  
  getNewLyrics() {
    // Fetch data and modify lyrics here...
    // This code should be the same as the code inside the last .then() block of the current fetch call
    const apikey = 'c335682791d58fcd23f5d30abbc72d34';
    const chartUrl =`https://proxy-92z3.onrender.com/?url=https%3A%2F%2Fapi.musixmatch.com%2Fws%2F1.1%2Ftrack.search%3Fq_artist%3DBruno%2BMars%26page_size%3D10%26s_track_rating%3Ddesc%26apikey%3D${apikey}`;
    fetch(chartUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Failed to retrieve top tracks: ${response.status} ${response.statusText}`);
        }
        return response.json();
      })
      .then(data => {
        const tracks = data.message.body.track_list;
        const randomIndex = Math.floor(Math.random() * tracks.length);
        const track_id = tracks[randomIndex].track.track_id;
        const artistName = tracks[randomIndex].track.artist_name;
        const trackName = tracks[randomIndex].track.track_name;
        document.getElementById("artist-name").innerHTML = artistName;
        document.getElementById("song-name").innerHTML = trackName;
    
        console.log(`Artist: ${artistName}`);
        console.log(`Track: ${trackName}`);
    
        const lyricsUrl = `https://proxy-92z3.onrender.com/?url=https%3A%2F%2Fapi.musixmatch.com%2Fws%2F1.1%2Ftrack.lyrics.get%3Ftrack_id%3D${track_id}%26apikey%3D${apikey}`;
    
        return fetch(lyricsUrl);
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to retrieve lyrics');
        }
        return response.json();
      })
      .then(data => {
        // Extract lyrics and remove unnecessary lines
        const lyrics = data.message.body.lyrics.lyrics_body;
        const lines = lyrics.split("\n").filter(line => line.trim() !== "");
        const filteredLines = lines.filter(line => !line.includes("This Lyrics is NOT for Commercial use") && !line.endsWith("..."));
        
        // Select a random line and modify it
        const randomIndex = Math.floor(Math.random() * (filteredLines.length - 2)); 
        const randomLineIndex = randomIndex + 1;
        const randomLine = filteredLines[randomLineIndex];
        const wordsToReplace = 3; 
        const words = randomLine.split(' '); 
        const answerWords = [];
        
        // Replace some words with blanks
        for (let i = 0; i < wordsToReplace; i++) {
          const randomWordIndex = Math.floor(Math.random() * words.length); 
          answerWords.push({word: words[randomWordIndex], index: randomWordIndex}); 
          words.splice(randomWordIndex, 1, "____");
        }
        const sortedAnswerWords = answerWords.sort((a, b) => a.index - b.index); 
        const answer = sortedAnswerWords.map(obj => obj.word).filter(word => !word.includes("_")).join(' , '); 
        const modifiedLine = words.join(' '); 
        const lyricsText = `${lines[randomIndex]}<br>${modifiedLine}<br>${lines[randomIndex + 2]}`;
        
        // Display modified line and set up answer options
        document.getElementById("lyrics").innerHTML = lyricsText;
        const buttons = [document.getElementById("button1"), document.getElementById("button2"), document.getElementById("button3"), document.getElementById("button4")];
        const answerButtonIndex = Math.floor(Math.random() * 4); 
        buttons[answerButtonIndex].textContent = answer;
        buttons[answerButtonIndex].setAttribute("data-answer", "correct");
        buttons.filter((button, index) => index !== answerButtonIndex).forEach(button => {
          button.textContent = "incorrect";
          button.setAttribute("data-answer", "incorrect");
        })
      })
      .catch(error => {
        console.error('Error:', error);
      });
    }
  }
 


// https://proxy-92z3.onrender.com/?url=https://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page=1&page_size=10&country=us&f_has_lyrics=1&apikey=c335682791d58fcd23f5d30abbc72d34&format=json
// const apikey = 'c335682791d58fcd23f5d30abbc72d34';
// const apiurl =`https://proxy-92z3.onrender.com/?url=https://api.musixmatch.com/ws/1.1/chart.tracks.get?apikey=${apikey}`;













// fetch(chartUrl)
//   .then(response => {
//     if (!response.ok) {
//       throw new Error(`Failed to retrieve top tracks: ${response.status} ${response.statusText}`);
//     }
//     return response.json();
//   })
//   .then(data => {
//     const tracks = data.message.body.track_list;
//     const randomIndex = Math.floor(Math.random() * tracks.length);
//     const track_id = tracks[randomIndex].track.track_id;
//     const artistName = tracks[randomIndex].track.artist_name;
//     const trackName = tracks[randomIndex].track.track_name;
//     document.getElementById("artist-name").innerHTML = artistName;
//     document.getElementById("song-name").innerHTML = trackName;

//     console.log(`Artist: ${artistName}`);
//     console.log(`Track: ${trackName}`);

//     const lyricsUrl = `https://proxy-92z3.onrender.com/?url=https%3A%2F%2Fapi.musixmatch.com%2Fws%2F1.1%2Ftrack.lyrics.get%3Ftrack_id%3D${track_id}%26apikey%3D${apikey}`;

//     return fetch(lyricsUrl);
//   })
//   .then(response => {
//     if (!response.ok) {
//       throw new Error('Failed to retrieve lyrics');
//     }
//     return response.json();
//   })
//   .then(data => {
//     // Extract lyrics and remove unnecessary lines
//     const lyrics = data.message.body.lyrics.lyrics_body;
//     const lines = lyrics.split("\n").filter(line => line.trim() !== "");
//     const filteredLines = lines.filter(line => !line.includes("This Lyrics is NOT for Commercial use") && !line.endsWith("..."));
    
//     // Select a random line and modify it
//     const randomIndex = Math.floor(Math.random() * (filteredLines.length - 2)); 
//     const randomLineIndex = randomIndex + 1;
//     const randomLine = filteredLines[randomLineIndex];
//     const wordsToReplace = 3; 
//     const words = randomLine.split(' '); 
//     const answerWords = [];
    
//     // Replace some words with blanks
//     for (let i = 0; i < wordsToReplace; i++) {
//       const randomWordIndex = Math.floor(Math.random() * words.length); 
//       answerWords.push({word: words[randomWordIndex], index: randomWordIndex}); 
//       words.splice(randomWordIndex, 1, "____");
//     }
//     const sortedAnswerWords = answerWords.sort((a, b) => a.index - b.index); 
//     const answer = sortedAnswerWords.map(obj => obj.word).filter(word => !word.includes("_")).join(' , '); 
//     const modifiedLine = words.join(' '); 
//     const lyricsText = `${lines[randomIndex]}<br>${modifiedLine}<br>${lines[randomIndex + 2]}`;
    
//     // Display modified line and set up answer options
//     document.getElementById("lyrics").innerHTML = lyricsText;
//     const buttons = [document.getElementById("button1"), document.getElementById("button2"), document.getElementById("button3"), document.getElementById("button4")];
//     const answerButtonIndex = Math.floor(Math.random() * 4); 
//     buttons[answerButtonIndex].textContent = answer;
//     buttons[answerButtonIndex].setAttribute("data-answer", "correct");
//     buttons.filter((button, index) => index !== answerButtonIndex).forEach(button => {
//       button.textContent = "incorrect";
//       button.setAttribute("data-answer", "incorrect");
//     })
//     console.log(sortedAnswerWords)
//     })
    
//   .catch(error => console.error(error));


  
export default Lyrics;
