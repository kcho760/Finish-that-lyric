//snippet version
class Lyrics {
  constructor() {
  }
//key1: c335682791d58fcd23f5d30abbc72d34
//key2: ebd7f9988730ec4067168ec23e60f3e7
//key3: eca0bf1d91cfe339d5cf01290bca48db

  async getNewLyrics() {
    const apikey = 'c335682791d58fcd23f5d30abbc72d34';
    const artistName = document.getElementById('api-input').value;
    const artistUrl = encodeURIComponent(artistName);
    const chartUrl = `https://proxy-92z3.onrender.com/?url=https%3A%2F%2Fapi.musixmatch.com%2Fws%2F1.1%2Ftrack.search%3Fq_artist%3D${artistName}%26page_size%3D15%26s_track_rating%3Ddesc%26apikey%3D${apikey}`;
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
        this.artistName = tracks[randomIndex].track.artist_name;
        this.trackName = tracks[randomIndex].track.track_name;
        document.getElementById("artist-name").textContent = `Artist: ${this.artistName}`;
        document.getElementById("track-name").textContent = `Track: ${this.trackName}`;
        const snippetsUrl = `https://proxy-92z3.onrender.com/?url=https%3A%2F%2Fapi.musixmatch.com%2Fws%2F1.1%2Ftrack.snippet.get%3Ftrack_id%3D${track_id}%26apikey%3D${apikey}`;
        return fetch(snippetsUrl);
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to retrieve snippets');
        }
        return response.json();
      })
      .then(data => {
        const snippets = data.message.body.snippet.snippet_body.split("\n");
        const filteredSnippets = snippets.filter(snippet => !snippet.includes("This Lyrics is NOT for Commercial use") && !snippet.endsWith("..."));
        const randomIndex = Math.floor(Math.random() * filteredSnippets.length);
        const wordsToReplace = 1;
        const answerWords = [];
        const randomWordIndex = () => Math.floor(Math.random() * words.length);
        const words = filteredSnippets[randomIndex].split(' ');
        const commonWords = ["I","what", "a", "an", "the",
         "and", "that", "in", "you", "me", "is",
          "do", "can", "just", "of", "to", "for",
           "on", "with", "at", "by", "from", "up",
            "down", "out", "about", "my", "I'm"
          ,"oh","ooh","oooh","ooooh","oooooh","ooooooh"];

        for (let i = 0; i < wordsToReplace; i++) {
          let selectedWord, randomWordIndex;
          while (true) {
            randomWordIndex = Math.floor(Math.random() * words.length);
            selectedWord = words[randomWordIndex];
            if (!commonWords.includes(selectedWord) && selectedWord.length >= 4) {
              break;
            }
          }
          answerWords.push({ word: selectedWord, index: randomWordIndex });
          words[randomWordIndex] = "____";
        }

        const question = words.join(' ');
        const lyricsText = `${question}`;

        

      // Display modified line and set up answer options
      document.getElementById("lyrics").innerHTML = lyricsText;
      const buttons = [document.getElementById("button1"), document.getElementById("button2"), document.getElementById("button3"), document.getElementById("button4")];
      const answerButtonIndex = Math.floor(Math.random() * 4); 
      const answerWordsText = answerWords.map(wordObj => wordObj.word).join(', ');
      buttons[answerButtonIndex].textContent = answerWordsText.toLowerCase();
      buttons[answerButtonIndex].setAttribute("data-answer", "correct");
      // Initialize an array to store the already selected incorrect answers
      const usedWords = [];

      // Loop through each wrong button
      buttons.filter((button, index) => index !== answerButtonIndex).forEach(button => {
      // Make a request to the Datamuse API
      fetch(`https://api.datamuse.com/words?ml=${answerWords[0].word}&max=10&min=4`)
      .then(response => response.json())
      .then(words => {
        // Filter out any words that have already been used as incorrect answers
        const availableWords = words.filter(word => !usedWords.includes(word.word));

        // If there are no available words, reset the usedWords array and try again
        if (availableWords.length === 0) {
          usedWords.length = 0;
          return;
        }

        // Select a random incorrect answer option from the list of available words
        const randomWord = availableWords[Math.floor(Math.random() * availableWords.length)];
        button.textContent = randomWord.word;
        button.setAttribute("data-answer", "incorrect");

        // Add the selected word to the usedWords array
        usedWords.push(randomWord.word);
      })
        .catch(error => {
          console.error('Error:', error);
        });
      });
    })
    
  }
}

export default Lyrics;