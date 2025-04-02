import { useEffect, useState } from "react";
// import axios from "axios";
import * as client from "./client";
// const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;
export default function HttpClient() {      
    const [welcomeOnClick, setWelcomeOnClick] = useState("");
    const [welcomeOnLoad, setWelcomeOnLoad] = useState("");
    const fectWelcomeOnClick = async () => {
        // const response = await axios.get(`${REMOTE_SERVER}/lab5/welcome`);
        // setWelcomeOnClick(response.data);
        const message = await client.fetchWelcomeMessage();
        setWelcomeOnClick(message);
    };
    const fetchWelcomeOnload = async () => {
        const welcome = await client.fetchWelcomeMessage();
        setWelcomeOnLoad(welcome);
    };
    useEffect(() => {
        fetchWelcomeOnload();
    }, []);
    return (
        <div>
            <h3>HTTP Client</h3>
            <h4>Requeston on Click</h4>
            <button className="btn btn-primary" onClick={fectWelcomeOnClick}>
                Fetch Welcome
            </button><br />
            Response from server:<b>{welcomeOnClick}</b>

            <h4>Requesting on Load</h4>
            Response from server: <b>{welcomeOnLoad}</b>
            <hr />
        </div>

    );}