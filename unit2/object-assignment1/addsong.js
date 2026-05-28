/*/Example playlist
let playlist = {
    title: 'My jams',
    duration: 7,
    songs: [
        {
            title: 'Of Dust and Nations',
            artist: 'Thrice',
            duration: 4
        },
        {
            title: 'Living Together',
            artist: 'Circa Survive',
            duration: 3
        }
    ]
};

let newSong = {
    title: 'Old Friends',
    artist: 'Pinegrove',
    duration: 3
};

addSong(playlist, song);
{
    title: 'My jams',
    duration: 10,
    songs: [
        {
            title: 'Of Dust and Nations',
            artist: 'Thrice',
            duration: 4
        },
        {
            title: 'Living Together',
            artist: 'Circa Survive',
            duration: 3
        }
        {
            title: 'Old Friends',
            artist: 'Pinegrove',
            duration: 3
        }
    ]
}
*/
function addSong(playlist, song) {
    //updates the duration
    playlist.duration += song.duration;
    //add the song to the playlist
    playlist.songs.push(song);
    //return the playlist
    return playlist;
}


const result = addSong(playlist, newSong);

console.log(result.duration);     

console.log(result.songs.length); 