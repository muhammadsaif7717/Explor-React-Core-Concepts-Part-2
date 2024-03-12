import { useEffect, useState } from "react";
import('./Friends.css')
import Friend from "./Friend";

export default function Friends() {
    const [friends, setFriends] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch('https://jsonplaceholder.typicode.com/users');
            const data = await res.json();
            setFriends(data);
        };

        fetchData();
    }, []);

    return (
        <div className="friends-div">
            <h1>Friends: {friends.length}</h1>

            {friends.map(friend => 
                <Friend key={friend.id} friend={friend} />
            )}
        </div>
    );
}