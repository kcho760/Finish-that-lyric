class Spotifyapi {
    constructor(trackName) {
      this.lyrics = lyrics;
      this.accessToken = '';
      this.trackName = trackName;
      this.headers = {
        'Authorization': `Bearer ${this.accessToken}`,
        'Content-Type': 'application/x-www-form-urlencoded'
      };
      this.trackId = null;
    }
  
    async authenticate() {
      const clientId = '1613d5b3c59a4ae08549631d6b2f581e';
      const clientSecret = '15b3132ef0a549c8980218cb9b8d6560';
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: `grant_type=client_credentials&client_id=${clientId}&client_secret=${clientSecret}`
      };
  
      const response = await fetch('https://accounts.spotify.com/api/token', requestOptions);
      const data = await response.json();
  
      this.accessToken = data.access_token;
      console.log(this.accessToken);
  
      this.setHeaders(); // add this line to set headers with updated access token
  
      this.trackId = await this.getSongByName();
      return this.trackId;
    }
  
    setHeaders() {
      this.headers = {
        'Authorization': `Bearer ${this.accessToken}`,
        'Content-Type': 'application/json'
      };
    }
  
    async getSongByName() {
      const searchUrl = `https://proxy-92z3.onrender.com/?url=https://api.spotify.com/v1/search?q=${this.songName}&type=track`;
      const response = await fetch(searchUrl, this.headers);
      const data = await response.json();
  
      if (data.tracks.items.length > 0) {
        const trackId = data.tracks.items[0].id;
        console.log(`Track ID for ${this.songName}: ${trackId}`);
        return trackId;
      } else {
        throw new Error(`No tracks found for ${this.songName}`);
      }
    }
  
    async getTrack() {
      if (!this.trackId) {
        await this.authenticate();
      }
      this.setHeaders();
      const uri = `https://proxy-92z3.onrender.com/?url=https://api.spotify.com/v1/tracks/${this.trackId}`;
  
      const requestOptions = {
        method: 'GET',
        headers: this.headers
      };
  
      try {
        const response = await fetch(uri, requestOptions);
        const data = await response.json();
        console.log(data);
        return data;
      } catch (error) {
        console.error(error);
        throw error;
      }
    }
  }
  
  export default Spotifyapi;
  