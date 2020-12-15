const MusicDetails = ({music}) => {
    if(!music) return null;

    return (
        <>
            <h3>{music.name}</h3>
            <h3>{music.artist}</h3>
        </>
    )
}

export default MusicDetails;