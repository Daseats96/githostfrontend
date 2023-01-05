import "./login-large.css"
import GitHost from "../images/GitHost.png"
import {useNavigate} from "react-router-dom"

/**
 * This component represents the banner of the login
 * application.
 * @returns {JSX.Element}
 * @constructor no constructors.
 */
export function Banner(){
    let redirect = useNavigate();
    return (<div class={"Banner"} onClick={()=> redirect("/login")}>
        <h1 class={"BannerFont"}> GitHost </h1>
        <img src={GitHost} className={"GitHostIconBanner"} alt={"GitHostIcon"}/>
    </div>)
}

function LoginBox(){
    //used to redirect to other pages.
    let redirect = useNavigate();
    return (<div class={"LoginBox"}>
        <img src={GitHost} className={"LoginGitHostIcon"} alt={"GitHostIconLogin"}/>
        <form class={"LoginForm"} action={"https://localhost:8080/login"}>
            <div class={"LoginInputBox"}><input class={"LoginInputBoxCSS"} type="email" id="username" name="username" placeholder={"Email"} required={true}/> <br/></div>
            <div class={"LoginInputBox"}><input class={"LoginInputBoxCSS"} type="password" id="password" name="password" placeholder={"Password"} required={true}/><br/></div>
            <a href={"/forgotPassword"} class={"forgotPassword_RegisterFont"}>Forgot password?</a><br/>
            <a href={"/signup"} className={"forgotPassword_RegisterFont"}>Don't have an account?</a><br/>
            <div class={"SubmitLoginFormDIV"}><input class={"SubmitLoginForm"} type={"submit"} value={"Submit"} onClick={()=> redirect("/homepage")}/></div>
        </form>
    </div>)
}
export function SignUp(){
    return(
        <div class={"LoginPageContainer"}>
            <Banner/>
        </div>
    )
}
export function ForgotPassword(){
    return (
        <div class={"LoginPageContainer"}>
            <Banner/>
        </div>
    )
}
export function Login(){
    return (
        <div class={"LoginPageContainer"}>
            <Banner/>
            <LoginBox/>
        </div>)
}