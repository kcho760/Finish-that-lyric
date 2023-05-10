
class SpotifyPlayer {
    constructor(trackId, accessToken) {
      this.trackId = trackId;
      this.accessToken = accessToken;
      this.player = null;
    }
  
    init() {
      this.player = new Spotify.Player({
        name: 'My Player',
        getOAuthToken: cb => {
          cb(this.accessToken);
        }
      });
  
      // Ready
      this.player.addListener('ready', ({ device_id }) => {
        console.log('Ready with Device ID', device_id);
        this.play();
      });
  
      // Not Ready
      this.player.addListener('not_ready', ({ device_id }) => {
        console.log('Device ID has gone offline', device_id);
      });
  
      // Connect to the player!
      this.player.connect();
    }
  
    play() {
      const playPayload = {
        uris: [`spotify:track:${this.trackId}`],
      };
      this.player._options.getOAuthToken(access_token => {
        fetch(`https://api.spotify.com/v1/me/player/play?device_id=${this.player._options.id}`, {
          method: 'PUT',
          body: JSON.stringify(playPayload),
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${access_token}`
          },
        });
      });
    }
  }
  
  export default SpotifyPlayer