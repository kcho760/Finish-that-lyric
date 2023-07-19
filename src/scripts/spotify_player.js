
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
      })
      
  
      // Not Ready
      this.player.addListener('not_ready', ({ device_id }) => {
      });
  
      this.player.addListener('initialization_error', ({ message }) => {
        console.error(message);
      });
      
      // Connect to the player!
      this.player.connect();
      
      this.player.connect().then(success => {
        if (success) {
        }
      })
      
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