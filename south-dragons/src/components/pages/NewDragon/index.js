import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import { Button } from 'react-materialize';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './styles.css';
import dragonLogo from '../../../assets/dragon-logo.jpg';
 
import CreateNewDragon from '../../../services/NewDragonService/CreateNewDragon';

function NewDragon() {
    const history = useHistory();
    const [dragonName, setDragonName] = useState('');
    const [dragonType, setDragonType] = useState('');

    const notify = () => toast('Dragão cadastrado com sucesso!', {
        type: 'success',
        onClose: () => history.push('/list')
    });

    const handleNewDragon = async (event) => {
        event.preventDefault();

        const newDragon = {
            name: dragonName,
            type: dragonType,
        };

        const response = await CreateNewDragon(newDragon);
        if (response.data !== null) {
            notify();
        }



    };

    return (
        <div className="newdragon-container">
            <div className="content">
                <section>
                    <img src={dragonLogo} alt="South Dragons" />

                    <h1>Cadastrar novo Dragão</h1>
                    <p>"Os dragões não conhecem o paraíso, onde tudo acontece perfeito e nada dói nem cintila ou ofega,
                         numa eterna monotonia de pacífica falsidade. Seu paraíso é o conflito, nunca a harmonia.“ </p>

                    <Link className="back-link" to="/list">
                        <FiArrowLeft size={16} color="#e02041" />
                       Voltar para pagina principal
                    </Link>
                </section>

                <form >
                    <input
                        placeholder="Nome do dragão"
                        value={dragonName}
                        onChange={event => setDragonName(event.target.value)}
                    />
                    <input
                        placeholder="Tipo do dragão"
                        value={dragonType}
                        onChange={event => setDragonType(event.target.value)}
                    />
                    <Button onClick={handleNewDragon}>Cadastrar</Button>



                </form>
            </div>
        </div>
    );
}

export default NewDragon;