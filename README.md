## Finish That Lyric
Finish That Lyric is a web application built with Javascript that was built during my time at App Academy. Users are presented with the first half of the phrase and has to guess the remaining words.

## How to play:
1) Clone the repository
2) Go to the directory in terminal and type "npm run watch"
3) Open index.html with Live Server.
4) Settings can be adjusted from either the main screen or during gameplay with the volume slider.
5) You can see more detailed instructions through the "How to Play" button, or start a new game with the "Begin" button.
6) A timer will countdown from 5 seconds and partially completed lyrics will appear on screen. An audio clip of the song will play and will stop on the blanks.
7) There are 4 choices to choose from. Clicking on any of them marks them as your selection. Once you are satisfied with your choice, click next and the game will determine if you were correct.
8) Keep playing until the game ends to see your final score.

## Functionality and MVPs
In Finish That Lyric, users will be able to:
-Play a fun trivia game
-Discover new songs and artists
-Use "life-lines" such as 50/50 and second guess
-Be able to mute sounds
-Change background colors
-Players can restart on Game Over(Finish or Lose)

## Technologies, Libraries, APIs:
-HTML-Canvas API
-Javascript
-CSS
-Spotify API
-Musicxmatch API

## Wireframe:
https://imgur.com/a/uuas1Kd

## Implementation Timeline:
Friday:Outline basic html structure, lifelines, rules, page transitions, links to github and linkedIn
Saturday:Work on pull requests from Spotify and Musicxmatch APIs to retrieve lyrics and song/artist info
Sunday: Program buttons to display proper choices, point system, timers, mute buttons
Monday: CSS styling for buttons, page, background, lobby music, settings volume slider,
Tuesday: polish and attempt MediaRecorder API
Wednesday:Final polish
Thursday: Morning will be reserved for deploying project to github pages. Afternoon presentation

## Bonus Features
As there is a limited time for this project, there were a few features I would've prefered but would need more time for research and trials.

-recording audio clips as player input, parsing them into text form, and comparing against the answer.

-more spotify functionality. Adding songs you enjoyed to a list. Choosing genres.