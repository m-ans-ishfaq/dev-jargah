"use client";
import { useEffect, useState } from "react";

interface TimeRemainingInterface {
    weeks: number,
    days: number,
    hours: number,
    minutes: number,
    seconds: number
}

function getTimeRemaining(targetDate: Date): TimeRemainingInterface {
    const now = new Date();
    const dubaiTimezoneOffset = 4 * 60; // Dubai's timezone offset in minutes (UTC+4)
    const timeRemaining = targetDate.getTime() - now.getTime() + (dubaiTimezoneOffset * 60 * 1000);
  
    if (timeRemaining <= 0) {
        return {
            weeks: 0,
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0
        };
    }
  
    const weeks = Math.floor(timeRemaining / (1000 * 60 * 60 * 24 * 7));
    const days = Math.floor((timeRemaining % (1000 * 60 * 60 * 24 * 7)) / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
  
    return {
        weeks,
        days,
        hours,
        minutes,
        seconds
    };
}

const CountCard = ({ number, label }: { number: number; label: string; }) => {
    return (
        <div className="sm:max-w-28 w-full bg-gradient-to-b from-red-600 to-red-800 rounded-lg sm:py-8 flex sm:flex-col items-center border border-red-400">
            <span className="text-white font-press-start text-2xl md:text-4xl">{number < 10 ? '0' + number : number}</span>
            <span className="text-neutral-200">{label}</span>
        </div>
    );
}

const TimeCounter = ({ targetDate }: { targetDate: Date }) => {
    const [timeLeft, setTimeLeft] = useState<TimeRemainingInterface>(getTimeRemaining(targetDate));

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTimeLeft(getTimeRemaining(targetDate));
        }, 1000);

        // Clear interval on component unmount
        return () => clearInterval(intervalId);
    }, [targetDate]); // Add targetDate as a dependency

    return (
        <div className="w-full justify-center items-center flex flex-col sm:flex-row gap-4">
            <CountCard label="weeks" number={timeLeft?.weeks ?? 0} />
            <CountCard label="days" number={timeLeft?.days ?? 0} />
            <CountCard label="hours" number={timeLeft?.hours ?? 0} />
            <CountCard label="minutes" number={timeLeft?.minutes ?? 0} />
            <CountCard label="seconds" number={timeLeft?.seconds ?? 0} />
        </div>
    )
}

export function Timer() {

    const [targetDate, setTargetDate] = useState<Date|undefined>(undefined);

    useEffect(() => {
        let tgDate = new Date('2024-10-12T09:00:00');
        tgDate.setUTCHours(0, 0, 0, 0);
        tgDate.setMinutes(tgDate.getMinutes() - tgDate.getTimezoneOffset() + 4 * 60);

        setTargetDate(tgDate);
    }, []);

    if (!targetDate) return "Loading...";

    return (
        <div className="bg-black px-8 bg-opacity-60 backdrop-blur-sm w-full rounded-md py-8 text-white flex flex-col items-center gap-4 text-center">
            <h3 className="text-xl tracking-wider">
                TIME REMAINING IN NEXT BIG EVENT
            </h3>
            <TimeCounter targetDate={targetDate!} />
        </div>
    )
}
