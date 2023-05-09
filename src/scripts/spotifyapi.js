class Spotifyapi {
    constructor(trackName) {
        this.lyrics = lyrics;
        this.accessToken = '';
        this.songName = trackName;
        this.headers = {
            'Authorization': `Bearer ${this.accessToken}`,
            'Content-Type': 'application/x-www-form-urlencoded'
        };
        this.callapi();
        this.trackId = this.getSongByName();
    }

    callapi() {        
        const clientId = '1613d5b3c59a4ae08549631d6b2f581e';
        const clientSecret = '15b3132ef0a549c8980218cb9b8d6560';
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: `grant_type=client_credentials&client_id=${clientId}&client_secret=${clientSecret}`
        };
        
        fetch('https://accounts.spotify.com/api/token', requestOptions)
            .then(response => response.json())
            .then(data => {
                this.accessToken = data.access_token;
                console.log(this.accessToken)
            })
            .catch(error => console.error(error));
    }
    
    getSongByName() {
        const searchUrl = `https://proxy-92z3.onrender.com/?url=https://api.spotify.com/v1/search?q=${this.songName}&type=track`;
        return fetch(searchUrl, this.headers)
            .then(response => response.json())
            .then(data => {
                if (data.tracks.items.length > 0) {
                    const trackId = data.tracks.items[0].id;
                    console.log(`Track ID for ${this.songName}: ${trackId}`);
                    return trackId;
                } else {
                    throw new Error(`No tracks found for ${this.songName}`);
                }
            })
            .catch(error => {
                console.error(error);
                throw error;
            });
    }
    
    
      
    getTrack() {
        this.setHeaders();
        const uri = `https://proxy-92z3.onrender.com/?url=https://api.spotify.com/v1/tracks/${this.trackId}`;

        const requestOptions = {
            method: 'GET',
            headers: this.headers
        };

        fetch(uri, requestOptions)
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error(error));
    }
}

export default Spotifyapi;
