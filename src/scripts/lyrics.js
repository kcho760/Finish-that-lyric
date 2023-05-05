class Lyrics {

    
}

//https://proxy-92z3.onrender.com/?url=https://api.musixmatch.com/ws/1.1/chart.tracks.get?apikey=c335682791d58fcd23f5d30abbc72d34
const apikey = 'c335682791d58fcd23f5d30abbc72d34';
const apiurl =`https://proxy-92z3.onrender.com/?url=https://api.musixmatch.com/ws/1.1/chart.tracks.get?apikey=${apikey}`;
fetch(apiurl)
    .then(response => response.json())
    .then(data => {
        const tracks = data.message.body.track_list;
        const randomIndex = Math.floor(Math.random() * tracks.length);
        const track = tracks[randomIndex].track;

        const lyricsUrl = `https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${track.track_id}&apikey=${apikey}`;
        return fetch(lyricsUrl);
    })
    .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Failed to retrieve lyrics');
        }
      })
        .then(data => {
            const lyrics = data.message.body.lyrics.lyrics_body;
            console.log(lyrics);
        })

        .catch(error => console.error(error));
export default Lyrics;