import "./contact.css"
import TextField from '@mui/material/TextField';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';

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
            <Input className="email" type="email" placeholder="Email Adress" color="primary" />
            {/* <input type="email" className="email" placeholder="Email Adress"/> */}
            <TextField
                className="message"
                color="primary"
                id="filled-multiline-static"
                label="Message"
                multiline
                rows={4}
                placeholder="Your message"
                variant="outlined"
            />
            <Button variant="contained" color="primary">Send</Button>
        </form>
    </div>
    </>
}

export default Contact