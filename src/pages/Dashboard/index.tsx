import React, { useState, FormEvent } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import api from '../../services/api';

import { Title, Form, Repositories } from './styles';

import logoImg from '../../assets/logo.svg';

interface Repository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;

  }
}

const Dashboard: React.FC = () => {
  const [inputRepository, setInputRepository] = useState('');
  const [repositories, setRepositories] = useState<Repository[]>([]);

  async function handleAddRepository(event: FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault();

    const response = await api.get<Repository>(`/repos/${inputRepository}`);

    const repository = response.data;

    setRepositories([...repositories, repository]);

    setInputRepository('');
  }

  return (
    <>
      <img src={logoImg} alt="GitHub Explorer" />
      <Title>Explore Github Repositories</Title>
      <Form onSubmit={handleAddRepository}>
        <input
          value={inputRepository}
          onChange={(e) => setInputRepository(e.target.value)}
          type="text"
          placeholder="Type the repository name"
        />
        <button type="submit">SEARCH</button>
      </Form>
      <Repositories>
        {repositories.map((repository) => (
          <a key={repository.full_name} href="teste">
            <img
              src={repository.owner.avatar_url}
              alt={repository.full_name}
            />
            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>

            <FiChevronRight size={20} />
          </a>

        ))}
      </Repositories>
    </>
  );
};

export default Dashboard;
