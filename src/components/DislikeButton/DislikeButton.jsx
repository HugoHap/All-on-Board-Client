import { useState } from 'react'

function DislikeButton() {

    const [disLikeValue, setDislikeValue] = useState(0)

    return (
        <div>
            <div className="DislikeButton">
                <button onClick={() => setDislikeValue(prevLikeVal => ++prevLikeVal)} > {disLikeValue} DISLIKE </button>
            </div>
        </div>
    );
}

export default DislikeButton;