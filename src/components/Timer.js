import React from 'react';

export default function Timer(props) {
    return (
        <div className="timer">
            <span className="digits">
                {('0' + Math.floor(props.time / 3600)).slice(-2)}:
            </span>
            <span className="digits">
                {('0' + Math.floor((props.time / 60) % 60)).slice(-2)}:
            </span>
            <span className="digits">
                {('0' + Math.floor((props.time / 1) % 60)).slice(-2)}
            </span>
        </div>
    );
}
