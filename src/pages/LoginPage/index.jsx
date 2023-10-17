import 'bootstrap/dist/css/bootstrap.min.css';
const LoginPage=()=>{
    return(
        <div className="Login">
            <div class="login-container">
    <form>
        <h1 id="header_18" class="form-header" data-component="header">Log in</h1>
        <div id="subHeader_18" class="form-subHeader">Welcome back! Log in to your MindMenders account and continue your journey to mental well-being</div><br/>
        <div class="form-group">
        <label for="email">E-mail</label>
        <input type="email" class="form-control" id="email" name="email" placeholder="Enter your E-mail"/>
        </div>
        <div class="form-group">
        <label for="password">Password</label>
        <input type="password" class="form-control" id="password" name="password" placeholder="Enter your Password"/>
        </div>
        <br/>
        <button type="submit" class="btn btn-primary">Login</button>
        </form>

            </div>
            </div>
    )
}
export default LoginPage;