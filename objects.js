var playlist = { 'Rihanna': 'Whats my name?' };

function updatePlaylist(object, artist, song) {
  Object.assign({}, object, {[artist]: song});
}

