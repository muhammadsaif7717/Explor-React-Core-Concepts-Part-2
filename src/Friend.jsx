export default function Friend({ friend }) {
    const { name, email } = friend;
    return (
        <div>
            <h1>Name: {name}</h1>
            <h2>Email: {email}</h2>
        </div>
    );
}



