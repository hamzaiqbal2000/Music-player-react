import React from 'react';

const LibrarySong = ({ song, songs, setCurrentSong, id, isPlaying }) => {
    //add event handler
    const songSelectHandler = ({audioRef}) => {
         const selectSong = songs.filter((state) => state.id === id);
         setCurrentSong(selectSong[0]);
        //setCurrentSong(song);
        //audioRef.current.play();
        if(isPlaying){
            const playPromise = audioRef.current.play();
            if(playPromise !== undefined ){
                playPromise.then((audio) => {
                    audioRef.current.play();
                });
            }
        }
    }


    return(
        <div onClick={songSelectHandler} className="library-song">
            <img alt={song.name} src={song.cover}></img>
            <div className="song-description">
                <h3>{song.name}</h3>
                <h4>{song.artist}</h4>
            </div>
        </div>
    );
}

export default LibrarySong;