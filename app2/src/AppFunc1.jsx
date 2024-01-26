import { useEffect, useState } from "react";

// custom hook - you need a "use" as a prefix
export function useOs() {
    const [online, setOnline] = useState(true);

    function on() {
        setOnline(true);
    }

    function off() {
        setOnline(false);
    }

    useEffect(()=>{
        window.addEventListener("online", on);
        window.addEventListener("offline", off);

        return () => {
            window.removeEventListener("online", on);
            window.removeEventListener("offline", off);
        }
    },[]) 

    return online;
}

export function Comp1() {

    const isOnline = useOs();

    return (
        <div className="d-flex justify-content-center align-items-center mt-5 pt-5">
            <button className="mx-auto btn btn-dark" disabled={!isOnline}>{isOnline ? 'Save' : 'Reconnecting...'}</button>

        </div>
    )
    

}

export function Comp2() {

    const isOnline = useOs();

    return (
        <div className="w-100 pt-1">
            <h1 className="text-center text-secondary" disabled={!isOnline}>{isOnline ? 'Save' : 'Reconnecting...'}</h1>
        </div>
    )
    

}