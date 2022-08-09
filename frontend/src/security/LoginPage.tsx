import {useState} from "react";
import {Link} from "react-router-dom";


export default function LoginPage() {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    function login() {}


    return (
        <div>
            <form onSubmit={login}>
                <div>
                    <input value={username} onChange={ev => setUsername(ev.target.value)}/>
                </div>
                <div>
                    <input type={"password"} value={password} onChange={ev => setPassword(ev.target.value)}/>
                </div>
                <button type={"submit"}>Login</button>
            </form>
            <Link to={"/register"}>Create an account</Link>
        </div>
    )
}