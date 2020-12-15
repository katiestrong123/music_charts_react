import {useState, useEffect} from 'react';
import MusicSelector from "../components/MusicSelector"
import MusicDetails from "../components/MusicDetails"

const MusicContainer = () => {

    const [music, setMusic] = useState(null);

    const getMusic = () => {

        console.log("This weeks top TWENTY ARE....!");

        fetch(`https://itunes.apple.com/gb/rss/topsongs/limit=20/json`)
        .then((res)=> {
            return res.json()
            .then((data) => {
                setMusic(data);
            });
        })
    };

    useEffect(() => {
        getMusic();
    }, [])

    return (
        <>
            <h1>The UK's top 20 Hits</h1>
            <h5>Top songs from 2020 that we know you won't want to miss.</h5>
            <MusicContainer/>
            <MusicDetails music={music}/>
        </> 
    )
}

export default MusicContainer;