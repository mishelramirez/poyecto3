import TextsmsIcon from '@mui/icons-material/Textsms';
import style from "./header.css"

export default function Header() {
    return (
        <div className='header'>
            <TextsmsIcon className='img' />
            <p className="headerLogo">Huddle</p>
        </div>
    )
}