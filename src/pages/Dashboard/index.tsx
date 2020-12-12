import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" type="text" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars3.githubusercontent.com/u/31122067?s=460&u=317a5b068fec5548665b44e4a9d00138d2d737df&v=4"
            alt="Senhor Biscoito"
          />
          <div>
            <strong>Jean Miranda</strong>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et,
              magnam?
            </p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars3.githubusercontent.com/u/31122067?s=460&u=317a5b068fec5548665b44e4a9d00138d2d737df&v=4"
            alt="Senhor Biscoito"
          />
          <div>
            <strong>Jean Miranda</strong>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et,
              magnam?
            </p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars3.githubusercontent.com/u/31122067?s=460&u=317a5b068fec5548665b44e4a9d00138d2d737df&v=4"
            alt="Senhor Biscoito"
          />
          <div>
            <strong>Jean Miranda</strong>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et,
              magnam?
            </p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
