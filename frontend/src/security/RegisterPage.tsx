import {FormEvent, useState} from "react";
import {useNavigate} from "react-router-dom";
import {registerUser} from "../Services/apiServices";



export default function RegisterPage() {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const nav = useNavigate()

    function register(e:FormEvent) {
        e.preventDefault()
        registerUser(username, password).then(() => nav("/")).catch()
    }


    return (
        <div>
            <form onSubmit={register}>
                <div>
                    <input value={username} onChange={ev => setUsername(ev.target.value)}/>
                </div>
                <div>
                    <input type={"password"} value={password} onChange={ev => setPassword(ev.target.value)}/>
                </div>
                <button type={"submit"}>Register</button>
            </form>
        </div>
    )
}