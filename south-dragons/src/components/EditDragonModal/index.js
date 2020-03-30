import React, { useState } from 'react';
import Modal from 'react-responsive-modal';

import './styles.css';
 

import EditDragon from '../../services/EditDragonModal/EditDragon';

function EditDragonModal({ modalState, data }) {
    const [dragonName, setDragonName] = useState(data.name);
    const [dragonType, setDragonType] = useState(data.type);
    const [isOpen, setIsOpen] = useState(false);

    const editDragon = async (id) => {
        const newDragon = {
            name: dragonName,
            type: dragonType,
        }

        const dragonEdited = await EditDragon(id, newDragon);

        if (dragonEdited !== null)
            setIsOpen(false);
    };

    return (
        <Modal
            className="modal-container"
            open={modalState || isOpen}
            onClose={() => editDragon(data.id)}
            showCloseIcon={false}
        >
            <div className="content">
                <form onSubmit={() => editDragon(data.id)}>
                    <input
                        required
                        value={dragonName}
                        onChange={event => setDragonName(event.target.value)}
                    />
                    <input
                        required
                        value={dragonType}
                        onChange={event => setDragonType(event.target.value)}
                    />
                    <button className="button">Editar dragão</button>
                </form>
            </div>
        </Modal>
    );
}

export default EditDragonModal;