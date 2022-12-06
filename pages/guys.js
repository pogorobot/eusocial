import Meeple from '../components/meeple';
import prisma from '../lib/prisma';

import { GetStaticProps } from "next";
import React, { useState } from "react";
import Router from 'next/router';

export const getStaticProps = async () => {
  const guys = await prisma.meeple.findMany();
  return {
    props: { guys },
    revalidate: 10,
  };
};


export default function Guys(props) {
  const [name, setName] = useState('');

  const submitData = async (e) => {
    e.preventDefault();
    try {
      const body = { name, hunger: 50, thirst: 50 };
      await fetch('/api/meeples', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      await Router.push('/guys');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Li'l Guys</h1>
      <Meeple name="Sven" hunger={25} thirst={60} />
      <Meeple name="Bartholomew" hunger={80} thirst={17} />
      {props.guys.map((guy) => 
        <Meeple key={guy.id} name={guy.name} hunger={guy.hunger} thirst={guy.thirst} />
      )}
      <div>
        <form onSubmit={submitData}>
          <h1>New Guy</h1>
          <input
            autoFocus
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            type="text"
            value={name}
          />
          <input disabled={!name} type="submit" value="Create" />
        </form>
      </div>
    </div>
  )
}