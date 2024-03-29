class Lyrics {
  constructor() {
  }

  async getNewLyrics() {
    const apikey = 'c335682791d58fcd23f5d30abbc72d34';
    const artistName = document.getElementById('api-input').value;
    const artistUrl = encodeURIComponent(artistName);
    const chartUrl = `https://proxy-92z3.onrender.com/?url=https%3A%2F%2Fapi.musixmatch.com%2Fws%2F1.1%2Ftrack.search%3Fq_artist%3D${artistName}%26page_size%3D15%26s_track_rating%3Ddesc%26apikey%3D${apikey}`;

    const timeoutPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        reject(new Error('Loading timed out'));
      }, 5000);
    });

    Promise.race([fetch(chartUrl), timeoutPromise])
      .then(response => {
        if (!response.ok) {
          throw new Error(`Failed to retrieve top tracks: ${response.status} ${response.statusText}`);
        }
        // Returns top tracks
        return response.json();
      })
      //selects a random track and gets the track id and lyrics snippet
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
      .then(async data => {
        const snippets = data.message.body.snippet.snippet_body.split("\n");
        const filteredSnippets = snippets.filter(snippet => !snippet.includes("This Lyrics is NOT for Commercial use") && !snippet.endsWith("..."));
        const randomIndex = Math.floor(Math.random() * filteredSnippets.length);
        const wordsToReplace = 1;
        const answerWords = [];
        const words = filteredSnippets[randomIndex].split(' ');
        const commonWords = ["I","what", "a", "an", "the",
         "and", "that", "in", "you", "me", "is",
          "do", "can", "just", "of", "to", "for",
           "on", "with", "at", "by", "from", "up",
            "down", "out", "about", "my", "I'm"
          ,"oh","ooh","oooh","ooooh","oooooh","ooooooh", "(skate)", "ooh-ooh"];

        for (let i = 0; i < wordsToReplace; i++) {
          let selectedWord;
          let randomWordIndex;
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

        document.getElementById("lyrics").innerHTML = lyricsText;
        const buttons = [document.getElementById("button1"), document.getElementById("button2"), document.getElementById("button3"), document.getElementById("button4")];
        const answerButtonIndex = Math.floor(Math.random() * 4); 
        const answerWordsText = answerWords.map(wordObj => wordObj.word).join(', ');
        buttons[answerButtonIndex].textContent = answerWordsText.toLowerCase();
        buttons[answerButtonIndex].setAttribute("data-answer", "correct");
        const usedWords = [];

        const incorrectButtons = buttons.filter((button, index) => index !== answerButtonIndex);
        const startTime = new Date();
        const relatedWordsResponse = await fetch(`https://api.datamuse.com/words?ml=${answerWords[0].word}&max=3&min=3`);
        const relatedWords = await relatedWordsResponse.json();

        if (!relatedWords || relatedWords.length === 0) {
          console.error(`No related words found for "${answerWords[0].word}".`);
          return;
        }

        let wordsCounter = 0;
        incorrectButtons.forEach(button => {
          while (true) {
            if (wordsCounter >= relatedWords.length) {
              wordsCounter = 0;  // Reset the counter if we've used all available words.
            }
        
            const proposedWordObj = relatedWords[wordsCounter];
        
            if (!proposedWordObj) {
              console.error(`Related word object is undefined at index ${wordsCounter}.`);
              wordsCounter++;
              continue;  // Skip this iteration and try the next word.
            }
        
            const proposedWord = proposedWordObj.word;
        
            if (usedWords.includes(proposedWord)) {
              wordsCounter++;
              continue;  // Skip this iteration and try the next word.
            }
        
            button.textContent = proposedWord;
            button.setAttribute("data-answer", "incorrect");
            usedWords.push(proposedWord);
            wordsCounter++;
            break;
          }
        });
        
        const endTime = new Date();
        const timeDifference = endTime - startTime;

      })
      .catch(err => {
        console.error('Failed to fetch lyrics', err);
        // Set a default question and answer options
        const defaultQuestion = "Oh, ____ to me, baby";
        const defaultAnswerOptions = ["Slide", "Glide", "Race", "Skate"];
      
        document.getElementById("lyrics").innerHTML = defaultQuestion;
        const buttons = [document.getElementById("button1"), document.getElementById("button2"), document.getElementById("button3"), document.getElementById("button4")];
        const answerButtonIndex = Math.floor(Math.random() * 4);
        buttons[answerButtonIndex].textContent = defaultAnswerOptions[3].toLowerCase();
        buttons[answerButtonIndex].setAttribute("data-answer", "correct");
        const incorrectButtons = buttons.filter((button, index) => index !== answerButtonIndex);
        incorrectButtons.forEach((button, index) => {
          button.textContent = defaultAnswerOptions[index].toLowerCase();
          button.setAttribute("data-answer", "incorrect");
        });
      
        this.lyricsLoaded = true;
        this.answersLoaded = true;
      });          
  }
}

export default Lyrics;
