import boton from "./footer.css"
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';


export default function Footer() {
    return (
        <div className="footer">
            <FacebookIcon className="botonfooter" />
            <TwitterIcon className="botonfooter" />
            <InstagramIcon className="botonfooter" />
        </div>
    )
}