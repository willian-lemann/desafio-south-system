import React, { useState } from 'react';

import { Button } from 'react-materialize';
import { MdDelete, MdEdit } from 'react-icons/md';

import EditDragonModal from '../../components/EditDragonModal/index';

function DragonItems({ data, handleDeleteDragon, handleToProfile }) {

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <li key={data.id}>
      <div onClick={() => handleToProfile(data.id)}>
        <span>{data.name}</span>
      </div>
      <section className="actionButtons">
        <Button onClick={() => setIsModalOpen(true)}>
          <MdEdit />
          <EditDragonModal modalState={isModalOpen} data={data} />
        </Button>
        <Button className="deleteButton" onClick={() => handleDeleteDragon(data.id)}>
          <MdDelete size={22} />
        </Button>
      </section>
    </li>
  );
}

export default DragonItems;