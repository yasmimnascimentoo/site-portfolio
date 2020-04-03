import React from 'react';
import {Link} from 'react-router-dom';
import './styles.css';
import {FaGithub, FaLinkedinIn, FaPencilAlt, FaCode, FaHeart,FaShareAlt, FaEye} from 'react-icons/fa';


import Logotag from '../../assets/logo-tag-topo.png';
import Logoroda from '../../assets/logo-roda2.png';




export default function Home() {
    return(
        <div className="container">
                <img style={{margin: 30}}  src={Logotag} alt="Logo Tag Topo" />

                < a style={{margin: 13}} className="Github"  href="https://github.com/Yasmimnascimentoo">
                    <FaGithub className="github" size={16} color= "#FFF"/>
                </a>

                < a style={{margin: 13}} className="Linke"  href="https://www.linkedin.com/in/yasmim-nascimento-42a1b718a/">
                    <FaLinkedinIn className="linked" size={16} color= "#FFF"/>
                </a>

                <Link style={{margin: 30, textAlign: "right"}} className="Contact" to="/contact">
                    Contato
                </Link> 

                <Link style={{margin: 30}} className="Portfolio" to="/portfolio">
                    Portfólio
                </Link> 

                <Link style={{margin: 30}} className="Aboutme" to="/aboutme">
                    Sobre mim
                </Link> 

                <Link style={{margin: 30}} className="Home" to="/home">
                    Início
                </Link> 

                <h1><strong>Yasmim</strong> S. <strong>Nascimento</strong></h1>

                <p className="pp" style={{fontSize: 15}}>CODE // SHARE // RELOAD</p>

                <div className="faixa"></div>

                <div className="itens">

                    <div style={{display: 'flex', alignItems: "center", flexDirection: "row", flexWrap: "wrap", justifyContent: "center"}} className="simbolos">
                    
                        <div style={{marginTop: '2em', marginRight: 20}} className="lapis">
                            <FaPencilAlt className="pencil"  color= "#FFF"/>
                        </div>

                        <div style={{marginTop: '2em', marginRight: 20}} className="codigo">
                            <FaCode className="code"  color= "#FFF"/>
                        </div>

                        <div className="imagem">
                            <img className="fotoy" src="https://avatars3.githubusercontent.com/u/60080305?s=460&u=d8fd8ad589901088c6932681963d77a86e6d7810&v=4" alt="Foto Tag Yasmim"/>
                        </div>

                        <div style={{marginTop: '2em', marginLeft: 20}} className="coracao">
                            <FaHeart className="heart" color="#FFF" />
                        </div>

                        <div style={{marginTop: '2em', marginLeft: 20}} className="compartilhar">
                            <FaShareAlt className="share" color= "#FFF"/>
                        </div>
                    </div>

                    <div className="textos1">
                        <p>Vocês estão vendo esse site todo bonitinho agora,</p>
                        <p>não imaginam o sufoco que passei com Css.</p>
                        <p>Odeio Css. Se vocês quiserem saber mais sobre eu</p>
                        <p>aperta nesse botãozinho bb, namoralzinha poooo</p>
                    </div>

                    <div className="textos2">
                        <Link style={{marginTop: '3em'}} to="/aboutme" className="botao">
                            <FaEye style={{marginRight: 3}} className="eye"size={16} color="808080"/>
                            Continue Lendo
                        </Link>
                    </div>

                    <div className="logorodape">
                        <Link to="/home">
                            <img className="logoroda" src={Logoroda} alt="Logo rodape" />
                        </Link>

                        <p>2020 Todos os Direitos Reservados</p>
                    </div>

                </div>
        </div>
    );
}