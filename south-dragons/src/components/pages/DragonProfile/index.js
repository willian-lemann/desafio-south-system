import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import { format, parseISO } from 'date-fns';
import { isEmpty } from 'lodash';

import './styles.css';
import dragonLogo from '../../../assets/dragon-logo.jpg'
import LoadSpecificDragon from '../../../services/DragonProfile/LoadDragon';


function DragonProfile() {
    let { id } = useParams();
    const [dragon, setDragon] = useState({});

    useEffect(() => {
        loadSpecificDragon(id)
    }, [id]);

    const loadSpecificDragon = async (id) => {
        const specificDragon = await LoadSpecificDragon(id);
        setDragon(specificDragon);
    }

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
                <p>{!isEmpty(dragon) &&
                    format(parseISO(dragon.createdAt), `dd-MM-yyyy hh:mm:ss`)}
                </p>
            </section>
            <Link to="/list">
                <button>
                    <FiArrowLeft size={28} color="#fe6e00" />
                </button>
            </Link>
        </div>
    );
}

export default DragonProfile;