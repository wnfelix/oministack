import React,{useState} from 'react';
import {Link, useHistory} from 'react-router-dom'
import {FiArrowLeft} from 'react-icons/fi'
import './style.css';

import api from '../../services/api';
import logoImg from '../../assets/logo.svg'

export default function Register(){
    const history = useHistory();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [city, setCity] = useState('');
    const [uf, setUF] = useState('');

    async function handleRegister(e){
        e.preventDefault();

        const data = {name,
            email,
            whatsapp,
            city,
            uf
        };
        try{
            const response = await api.post('ongs', data);
    
            alert(`seu id de acesso: ${response.data.id}`);
            history.push('/');

        }catch(err){
            alert('erro no cadastro tente novamente');
        }
        
    }
    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="be the hero" />
                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro, entre na platafomr e ajude pessoas a encontrarem os cados de sua ONG.</p>
                    <Link className="back-link" to="/">
                        <FiArrowLeft size={16} color="#e02041" />
                        Não tenho cadastro
                    </Link>
                </section>
                <form onSubmit={handleRegister}>
                    <input placeholder="nome da ong"
                        value = {name}
                        onChange={e=>setName(e.target.value)}
                    />
                    <input type="email"
                        placeholder="e-mail"
                        value={email}
                        onChange={e=>setEmail(e.target.value)}
                    />
                    <input placeholder="whatsapp"
                        value={whatsapp}
                        onChange={e=>setWhatsapp(e.target.value)}
                    />

                    <div className="input-group">
                        <input placeholder="Cidade"
                            value={city}
                            onChange={e=>setCity(e.target.value)}
                        />
                        <input placeholder="UF"
                            style={{width: 80}}
                            value={uf}
                            onChange={e=>setUF(e.target.value)}
                        />
                    </div>
                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    )
}
