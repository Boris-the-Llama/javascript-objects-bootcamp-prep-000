var playlist = { 'Rihanna': 'Whats my name?' };

function updatePlaylist(object, artist, song) {
  Object.assign({}, object, {[artist]: song});
}

function removeFromPlaylist(object, artist) {
  delete object.artist;
}