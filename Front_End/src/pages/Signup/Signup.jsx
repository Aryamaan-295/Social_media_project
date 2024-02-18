import { useRecoilState } from 'recoil';
import Card from '../../components/Card/Card';
import SignupForm from '../../components/SignupForm/SignupForm';
import DarkModeSwitch from '../../components/DarkModeSwitch/DarkModeSwitch';
import { useNavigate } from 'react-router-dom';
import { validAtom } from '../../store/validAtom';

function Signup() {
    const navigate = useNavigate();
    const [valid, setValid] = useRecoilState(validAtom)

    function handleSubmit(e) {
        const pass = document.getElementsByName('password')[0].value;
        const confirm = document.getElementsByName('confirm')[0].value;
        
        e.preventDefault();

        if (pass == confirm) {
            const formData = new FormData(e.target);

            const data = {
                username: formData.get('username'),
                password: formData.get('password'),
                roll: formData.get('roll'),
            }

            fetch("http://127.0.0.1:8000/signup", {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(data),
            })
                .then(async function(res) {
                    const status = res.status;
                    const json = await res.json();

                    if (status == 200) {
                        navigate('/profile');
                        setValid({
                            username: true,
                            roll: true
                        })
                    } else if(status == 409) {
                        if (json.data == "username") {
                            setValid({
                                username: false,
                                roll: true
                            })
                        } else if (json.data == "roll") {
                            setValid({
                                username: true,
                                roll: false
                            })
                        }
                    }
                })
        }
    }

    return (
        <div className='main'>
            <Card id='signup-card'>
                <SignupForm handleSubmit={ handleSubmit }></SignupForm>
            </Card>

            <DarkModeSwitch></DarkModeSwitch>
        </div>
    )
}

export default Signup;