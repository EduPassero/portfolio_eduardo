import { useState } from 'react';
import { useEffect } from 'react';
import close from './assets/icons/close.svg';
import sandwich from './assets/icons/sandwich.svg';
import projects from './assets/records/projects.json';
import video from './assets/videos/gestao_central_geral.mp4';
import Card from './components/Card';
import './App.css';

function App() {
  const [navbar, setNavbar] = useState(false);
  const [navMobile, setNavMobile] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', changeNavbar);

    return() => {
      window.removeEventListener('scroll', changeNavbar);
    };
  }, [window.scrollY])
  
  function changeNavbar(){
    window.scrollY >= 80 ? setNavbar(true) : setNavbar(false);
  };

  function hideNavMobile(){
    setNavMobile(false);
  }

  function showNavMobile(){
    setNavMobile(true);
  }

  return (
    <div className="App">
      <nav className={navbar ? 'nav_active' : ''}>
        <h2>E</h2>
        <ul className='nav_links'>
          <li><a href='#about'>Sobre</a></li>
          <li><a href='#experiences'>Experiências</a></li>
          <li><a href='#projects'>Projetos</a></li>
        </ul>
        <button className='nav_mobile_button' onClick={showNavMobile}>
          <img src={sandwich} alt="sandwich"/>
        </button>
      </nav>

      <div className={navMobile ? 'nav_mobile nav_mobile_active' : 'nav_mobile'}>
        <div>
          <button className={navMobile ? 'nav_mobile_button nav_close' : 'nav_close_hidden'} onClick={hideNavMobile}>
            <img src={close} alt="close"/>
          </button>
        </div>
        <ul className='nav_mobile_links'>
          <li><a href='#about'>Sobre</a></li>
          <li><a href='#experiences'>Experiências</a></li>
          <li><a href='#projects'>Projetos</a></li>
        </ul>
      </div>
      
      <div className='container'>
        <div className='cover'>

          <div className='big_titles'>
            <h1>Eduardo Passero</h1>
            <h2>desenvolvedor web</h2>
          </div>
          
            <button className='social_button'>LinkedIn</button>
            <button className='social_button'>Github</button>
            <button className='social_button'>Whatsapp</button>
          
        </div>
      </div>
      <div className='container' id='about'>
        <div className='padding'>
        <p>
          Sou um desenvolvedor web formado em Análise e Desenvolvimento de Sistemas, atuo como
          suporte ao usuário e desenvolvedor há três anos.
          Atualmente estou desenvolvendo a versão web de um ERP (front-end e back-end) utilizando C#,
          Blazor, Linq, Syncfusion, CSS, HTML e Bootstrap. Tenho mais facilidade com o front-end,
          mas meu objetivo é me tornar um desenvolvedor full stack.
          Moro em Jaraguá do Sul, sou casado e tenho 28 anos
        </p>
        </div>
      </div>
      <div className='container' id="experiencias">
        <div className='padding'>
          <p>
            Trabalho há 4 anos na Consensu Soluções em Sistemas. Aprendi quase tudo o que sei trabalhando lá, e abaixo está uma pequena demonstração 
            do meu principal projeto na empresa: o Gestão Central Web. A versão web do ERP da Consensu, que estou desenvolvendo sozinho!
            Trabalho tanto no front-end quanto no back-end para concluir minhas tarefas. Sempre surgem dúvidas e nessas
            horas peço ajuda aos meus gestores, ou vasculho a internet em busca de soluções. Sempre dou um jeito!
          </p>
          <br/>
          <video width='400' src={video} controls autoPlay loop muted />
            
          
          <br/>
          <p>
            Trabalho como suporte ao cliente e como desenvolvedor. Então minhas atividades são variadas: tiro dúvidas relacionadas
            a notas fiscais, funções do sistema, crio logos, artes para divulgação, configuração de e-mails, mas meu foco profissional é ser desenvolvedor.
            E ao longo desses anos é a função que venho ocupando por mais tempo na empresa. Abaixo estão as tecnologias com as quais estou mais familiarizado:
          </p>
          <br/>
          <div className='lists'>
            <ul className='tech_list'>
              <li>C#</li>
              <li>Blazor</li>
              <li>Linq</li>
              <li>Requisições Http</li>
            </ul>
            <ul className='tech_list'>
                <li>SQL</li>
                <li>CSS</li>
                <li>Bootstrap</li>
                <li>JavaScript</li>
              </ul>
          </div>
          
        </div>
      </div>
      <div className='container' id='projects'>
        <div className='padding'>
          <div className='cards'>
            {projects.map(project => {
              return (
                <Card 
                  key={project.id} 
                  Name={project.nome} 
                  Description={project.descricao}
                />
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
