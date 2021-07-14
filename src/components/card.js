import React from "react";
import '../styles/components/card.css';

function Card(props) {
    return (
        <div className="card event-card">
            <div class="card-body">
                <h5 class="card-title">{props.eventTitle}</h5>
                <h6 class="card-subtitle mb-2">{props.eventLocation}</h6>
                <p class="card-text">{props.eventTime}</p>
            </div>
        </div>
    );
}

export default Card;