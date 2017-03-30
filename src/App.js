import React, {Component} from 'react';
import logo from './logo.png';
import 'font-awesome/css/font-awesome.css';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <div className="warning">
                        <i className="fa fa-exclamation-triangle" aria-hidden="true"></i>
                        Site em construção
                    </div>
                </div>
                <h1 className="App-intro">
                    Em breve teremos novidades,<br/>
                    Siga-nos nas redes sociais!
                </h1>
                <div className="social">
                    <a href="https://www.facebook.com/quintaldavarjota/" target="_blank" title="facebook"
                       style={{backgroundColor: 'rgb(59, 89, 153)'}}>
                        <i className="fa fa-facebook" aria-hidden="true"></i>
                        Facebook
                    </a>
                    <a href="https://www.instagram.com/quintaldavarjota/" target="_blank" title="facebook"
                       style={{backgroundColor: 'rgb(228, 64, 95)'}}>
                        <i className="fa fa-instagram" aria-hidden="true"></i>
                        Instagram
                    </a>
                </div>
                <div className="address">
                    <h2>Endereço</h2>
                    <p>AV. ANTÔNIO JUSTA, 3525, MEIRELES, FORTALEZA/CE</p>
                </div>
                <div className="social phone">
                    <a href="mailto:comercial@quintaldavarjota.com.br">
                        <i className="fa fa-envelope" aria-hidden="true" />
                        <span className="label">comercial@quintaldavarjota.com.br</span>
                    </a>
                    <a href="tel:(85) 3109.3333">
                        <i className="fa fa-phone" aria-hidden="true" />
                        <span className="label">(85) 3109.3333</span>
                    </a>
                </div>
            </div>
        );
    }
}

export default App;
