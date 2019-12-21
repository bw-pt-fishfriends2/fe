const TweetStory = id => {
    const url = 'https://twitter.com/intent/tweet';
    const storyElem = document.getElementById(`${this.StaticRange.selectedStory}`);
    const story = storyElem ? storyElem.textContent : "I just made a cool story with dev-libs!"
}