import React, { useState, useEffect } from 'react';

import api from '../../services/api';

import './styles.css';

interface IAnswer {
  id: number;
  question: string;
  answer: string;
}

interface ITestAnswer {
  name: string;
  email: string;
  answers: Array<IAnswer>;
}

const Dashboard: React.FC = () => {
  const [testAnswers, setTestAnswers] = useState([]);

  useEffect(() => {
    async function loadData(): Promise<void> {
      const response = await api.get('/test_answers');
      setTestAnswers(response.data);
    }

    loadData();
  }, []);

  return (
    <div className="container">
      <div className="block first-block">
        <header>
          <h1>Respostas dos alunos</h1>
        </header>
      </div>

      <section>
        {testAnswers.map((testAnswer: ITestAnswer) => {
          return (
            <div className="block">
              <h4>
                Aluno: {testAnswer.name} ({testAnswer.email})
              </h4>

              <div className="answers">
                <h4 className="remove-margin">Respostas:</h4>
                {testAnswer.answers.map((answer: IAnswer) => {
                  return (
                    <ul key={answer.id}>
                      <li>
                        {answer.question} - <span>{answer.answer}</span>
                      </li>
                    </ul>
                  );
                })}
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default Dashboard;
