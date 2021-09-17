import React from 'react';

import { Title, Form, Repositories } from './styles';

import logoImg from '../../assets/logo.svg';

const Dashboard: React.FC = () => (
  <>
    <img src={logoImg} alt="GitHub Explorer" />
    <Title>Explore Github Repositories</Title>
    <Form>
      <input type="text" placeholder="Type the repository name" />
      <button type="submit">SEARCH</button>
    </Form>
    <Repositories>
      <a href="teste">
        <img
          src="https://avatars.githubusercontent.com/u/18223265?v=4"
          alt="Perfil"
        />
        <div>
          <strong>/repository/test</strong>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
        </div>
      </a>
    </Repositories>
  </>
);
export default Dashboard;
