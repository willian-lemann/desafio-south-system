import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { orderBy } from 'lodash';

import './styles.css';
import dragonLogo from '../../../assets/dragon-logo.jpg';

import DragonItems from '../../DragonItems/index';
import { Button } from 'react-materialize';

import LoadDragons from '../../../services/DragonListService/LoadDragons';
import DeleteDragon from '../../../services/DragonListService/DeleteDragon';

function DragonList() {
    const history = useHistory();

    const [dragons, setDragons] = useState([]);

    const loadData = async () => {
        const DragonsList = await LoadDragons();
        setDragons(DragonsList);
    };

    const handleDeleteDragon = async (id) => {
        await DeleteDragon(id);

        setDragons(dragons.filter(dragon => dragon.id !== id))
    };

    useEffect(() => {
        loadData()
    }, [dragons]);


    const handleRegister = () => {
        history.push('/register')
    };

    const handleToProfile = (id) => {
        history.push(`/profile/${id}`)
    };

    let orderedDragonsList = orderBy(dragons, [dragon => dragon.name.toLowerCase()], ['asc']);

    return (
        <div className="dragonlist-container">
            <div className="content">
                <header className="header-content">
                    <img src={dragonLogo} alt="South Dragons" />
                </header>
                <hr className="header-division" />
                <Button className="addNewDragon" onClick={handleRegister}>
                    Cadastrar novo dragão
                </Button>
                <section className="dragonlist-content">
                    <ul>
                        {orderedDragonsList.map(dragon => (
                            <DragonItems key={dragon.id} data={dragon} handleDeleteDragon={handleDeleteDragon} handleToProfile={handleToProfile} />
                        ))}
                    </ul>
                </section>
            </div>
        </div>
    );
}

export default DragonList;