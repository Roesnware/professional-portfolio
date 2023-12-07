// import stylesheet
import './ContactMe.css'

// contact component
const ContactMe = () => {

    const handleFormSubmit = async () => {

        const emailHook = document.getElementById('email');
        const messageHook = document.getElementById('message');

        const email = emailHook.value.trim();
        const message = messageHook.value.trim();

        const submitBtn = document.getElementById('submitBtn');

        const res = await console.log(email, message);
        submitBtn.innerText = "Submitted!";
        submitBtn.style.backgroundColor = 'red';

        emailHook.value = '';
        messageHook.value = '';
    }

    // return 
    return (
        <div className='formCont'>
            <div className='blur blur6'></div>
            <div className='blur blur7'></div>
            <div className='blur blur8'></div>
            <div className='formInput'>
                <p>Email: </p>
                <input type="text" name='email' id='email' placeholder='eg. traeroy@email.com' />
                <br />
                <p>Message: </p>
                <input type="text" name='message' id='message' placeholder='eg. type your message here' />
                <br />
                <button id="submitBtn" onClick={() => { handleFormSubmit() }}>Submit</button>
            </div>
        </div>
    );
}

// export component
export default ContactMe;