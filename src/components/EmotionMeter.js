let emotion = "HAPPY"

function EmotionMeter() {
    return (
        <i className={emotion === "HAPPY" ? "far fa-smile-beam" : "far fa-sad-tear"}></i>
    )


}


export default EmotionMeter



// smile: far fa-smile-beam"

// sad: far fa-sad-tear