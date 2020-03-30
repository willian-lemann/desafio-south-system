import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { parseISO, format } from 'date-fns';

import './styles.css';
import dragonLogo from '../../../assets/dragon-logo.jpg'
import LoadSpecificDragon from '../../../services/DragonProfile/LoadDragon';

 
function DragonProfile() {
    let { id } = useParams();
    const [dragon, setDragon] = useState({});
    const [newDate, setNewDate] = useState('');

    useEffect(() => {
        loadSpecificDragon(id)
    }, [id]);

    const loadSpecificDragon = async (id) => {
        const specificDragon = await LoadSpecificDragon(id);
        setDragon(specificDragon);
    }

    let teste = format(parseISO(dragon.createdAt), 'dd-mm-yyyy')

    return (
        <div className="profile-container">
            <section className="image-container">
                <img src={dragonLogo} alt="South Dragons" />
            </section>
            <section className="section-container">
                <strong>Nome do dragão:</strong>
                <p>{dragon.name}</p>

                <strong>Tipo do dragão:</strong>
                <p>{dragon.type}</p>

                <strong>Data de criação:</strong>
                <p>{teste}</p>
            </section>
        </div>
    );
}

export default DragonProfile;