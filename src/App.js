import React from 'react';
import './App.css';
import Table from './components/Table';
import StarWarsProvider from './context/StarWarsProvider';
import InputBox from './components/InputBox';
import NumericFilter from './components/NumericFilter';
import Sort from './components/Sort';
import Footer from './components/Footer';

function App() {
  return (
    <StarWarsProvider>
      <div>
        <h1>StarWars Planets Search!</h1>
        <InputBox />
        <div>
          <NumericFilter />
        </div>
        <div>
          <Sort />
        </div>
        <Table />
        <div>
          <Footer />
        </div>
      </div>
    </StarWarsProvider>
  );
}

export default App;
// Agradecimentos a:
// Rogério Lambert, por toda a força que me deu nesse projeto, no recipes, dentro e fora da trybe e por me dar apoio em um moento muito difícil. Um abraço, velho <3!
// Anderson Silva (Andy), pelas ótimas conversas, pelo estímulo e força demonstrada e transferida um pouco pra mim em toda a jornada do módulo. Um guerreiro, obrigadão, Andy!
// Renzo Sevilha, sempre disposto a ajudar, muito atencioso, paciente, didático e companheiro! Um anjo! Obrigadão, Renzão, TMJ!
// Aníbal Figueiredo - T11, por conversar e me mostrar outras perspectivas! Muito obrigado por compartilhar seu tempo comigo, Aníbal!
// Silvinha - Por todas as conversas e momentos de 1:1, por sempre me trazer clareza e ensinamentos!
