import logo from '../../img/logo.jpeg';

export default function ApplicationLogo({width}) {
    return (
        <div className="div-logo">
            <img src={logo} alt="Kaio Barber" title='Home' width={width} height={width}  />
        </div>
    );
}
