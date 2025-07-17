import "./contact.css"
import TextField from '@mui/material/TextField';

const Contact = ()=> {
    return <>
    <div className="contact">
        <h1>Contact us</h1>
        <div>
            <p>Contact us and we will get back to you</p>
            <p>Lunexa Innovations</p>
            <p>+123 456 789</p>
            <p>Lunexa@exa.com</p>
        </div>
        <form>
            <h3 >Contact</h3>
            <input type="email" className="email" placeholder="Email Adress"/>
             <TextField
                id="standard-search"
                label="Search field"
                type="search"
                variant="standard"
                />
        </form>
    </div>
    </>
}

export default Contact