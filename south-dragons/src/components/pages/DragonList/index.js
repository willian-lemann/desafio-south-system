import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { orderBy } from 'lodash';

import './styles.css';

import DragonItems from '../../DragonItems/index';
import { Button } from 'react-materialize';

import LoadDragons from '../../../services/DragonListService/LoadDragons';
import DeleteDragon from '../../../services/DragonListService/DeleteDragon';

function DragonList() {
    const history = useHistory();
    const loggedUser = localStorage.getItem('user');

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


    return (
        <div className="dragonlist-container">
            <div className="content">
                <header className="header-content">
                    <h3>DRAGÕES</h3>
                </header>
                <hr className="header-division" />
                <section className="dragonlist-content">
                    <ul>
                        {dragons.map(dragon => (
                            <DragonItems data={dragon} handleDeleteDragon={handleDeleteDragon} handleToProfile={handleToProfile} />
                        ))}
                    </ul>
                    <Button className="addNewDragon" onClick={handleRegister}>
                        Cadastrar novo dragão
                    </Button>
                </section>
            </div>
        </div>
    );
}

export default DragonList;