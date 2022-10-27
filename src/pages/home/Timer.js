import React, { useState, useEffect } from "react";
import "./Timer.css";

const Timer = () => {
    const createTimer = () => {
        var cfgDate = new Date("10/22/2022");
        cfgDate.setHours(cfgDate.getHours() + 8);
        let dif = +cfgDate - +new Date();
        let timeRemaining = {
            days: Math.floor(dif / (1000 * 60 * 60 * 24)),
            hours: Math.floor((dif / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((dif / (1000 * 60)) % 60),
            seconds: Math.floor((dif / 1000) % 60),
        };

        return timeRemaining;
    };

    const [timeLeft, setTimeLeft] = useState(createTimer());

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(createTimer());
        }, 1000);

        return () => {
            clearTimeout(timer);
        };
    }, [timeLeft]);

    const timerComponents = [];

    Object.keys(timeLeft).forEach((interval) => {
        if (!timeLeft[interval]) {
            return;
        }

        timerComponents.push(
            <span>
                {timeLeft[interval]} {interval}{" "}
            </span>
        );
    });

    return (
        <div className="timer">
            Code for Good 2023
            {/* - October 22-23 */}
            <br />
            {/* {timerComponents.length ? (
                timerComponents
            ) : (
                <span>0 days 0 hours 0 minutes 0 seconds</span>
            )} */}
            <div className="join">Coming Soon!</div>
        </div>
    );
};

export default Timer;
