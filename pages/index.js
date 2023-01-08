import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState } from "react";
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from "react-icons/ai";
import Image from 'next/image'

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Breno Alberto- Portofolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/logo.png" />
      </Head>

      <main className=" bg-slate-200 px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-slate-200">
            <h1 className="font-burtons text-xl">
              {" "}
              Javascript | Typescript | React.js | Next.js{" "}
            </h1>

            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-2xl"
                />
              </li>
            </ul>
          </nav>

          <div className="text-center p-10 py-10">
            <h2 className="text-6xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
              Breno Alberto
            </h2>

            <h3 className="text-3xl py-2 dark:text-slate-200 md:text-3xl">
              Desenvolver Front-end
            </h3>

            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
              <a href="https://github.com/BrenoAlb">
                <AiFillGithub />
              </a>
              <a href="https://www.linkedin.com/in/brenoalberto/">
                <AiFillLinkedin />
              </a>
              <a href="mailto:breno.alberto.de.almeida@gmail.com?subject=ContatopeloPortifólio&body=Olá Breno, vi seu portifólio e estou entrando em contato para falar sobre...">
                <AiOutlineMail />
              </a>
            </div>

            <div className="mx-auto bg-gradient-to-t from-cyan-600 to-transparent rounded-none w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96"></div>

            <h3 className="text-teal-600 text-4xl pb-4 pt-9 dark:text-teal-500 md:text-4xl">
              Minha breve história
            </h3>

            <p className="text-md py-5 leading-8 text-gray-800 dark:text-slate-200 max-w-xl mx-auto md:text-xl">
              Meu primeiro contato com a programação WEB foi por acaso, tendo
              que atualizar um site antigo de última hora para um simpósio, que
              por sinal, acabei sendo o coordenador de marketing desse evento
              também por acaso e no meio da preparação. Foi um desespero que
              acabou abrindo portas na minha vida, com bastante pesquisa e ajuda
              de pessoas incríveis pude ver um caminho ali.
            </p>

            <p className="text-md py-5 leading-8 text-gray-800 dark:text-slate-200 max-w-xl mx-auto md:text-xl">
              Após ter que parar minha faculdade devido a minha saúde (sem
              muitos detalhes mas algumas glândulas pararam de funcionar direito
              e gerou algumas complicações), ficava pensando o que faria, já que
              queria uma graduação.
            </p>

            <p className="text-md py-5 leading-8 text-gray-800 dark:text-slate-200 max-w-xl mx-auto md:text-xl">
              Logo após o tratamento e após me recuperar comecei a estudar
              programação, lembrando do desafio de anos atrás, comecei um curso
              livre e durante 6 meses estudei e aprendi bastante, fiz muitos
              projetos e voltei a ter um ritmo de estudos e aprendizado como o
              de tempos atrás.
            </p>

            <p className="text-md py-5 leading-8 text-gray-800 dark:text-slate-200 max-w-xl mx-auto md:text-xl">
              Hoje recuperei minha aprendizagem, que sempre foi meu ponto forte,
              e estou buscando trabalho na área de front-end para continuar a
              aprender com pessoas com conhecimentos diferentes do meu ou mais
              aprofundados e contribuir para facilitar a vida das pessoas com a
              programação.
            </p>

            <p className="text-md py-5 leading-8 text-gray-800 dark:text-slate-200 max-w-xl mx-auto md:text-xl">
              Pretendo ainda fazer uma graduação, agora focado em software,
              assim que estiver trabalhando na área. Gosto de aprender e
              naturalmente gosto de feedbacks e dicas, escutar pra mim é muito
              importante, por isso estou sempre aberto a quem interessar o
              contato.
            </p>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-teal-600 text-4xl py-2 dark:text-teal-500 md:text-4xl text-center ">
              Conhecimentos
            </h3>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-5  my-10  dark:bg-slate-200 flex-1">
              <h3 className="text-2xl pt-0,5 pb-6 text-teal-600">Linguagens</h3>
              <p className="text-gray-800 py-1">HTML</p>
              <p className="text-gray-800 py-1">CSS3</p>
              <p className="text-gray-800 py-1">Javascript</p>
              <p className="text-gray-800 py-1">Typescript</p>
            </div>
            <div className="text-center shadow-lg p-5  my-10 dark:bg-slate-200 flex-1">
              <h3 className="text-2xl pt-0,5 pb-6 text-teal-600 ">
                Frameworks e Bibliotecas
              </h3>
              <p className="text-gray-800 py-1">React.js</p>
              <p className="text-gray-800 py-1">Next.js</p>
              <p className="text-gray-800 py-1">TailwindCss</p>
              <p className="text-gray-800 py-1">jQuery</p>
            </div>
            <div className="text-center shadow-lg p-5  my-10 dark:bg-slate-200 flex-1">
              <h3 className="text-2xl pt-0,5 pb-6 text-teal-600">Idiomas</h3>
              <p className="text-gray-800 py-1">Português</p>
              <p className="text-gray-800 py-1">Inglês </p>
              <p className="text-gray-800 py-1">Espanhol</p>
              <p className="text-gray-800 py-1">Pensando no próximo...</p>
            </div>
          </div>
        </section>
        <section className="py-10">
          <div>
            <h3 className="text-teal-600 text-4xl py-2 dark:text-teal-500 md:text-4xl text-center ">
              Portifólio
            </h3>

            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
              Ao longo do último ano fiz diversos projetos para praticar meu
              conhecimento em desenvolvimento WEB. Aqui teremos desde os
              projetos básicos do começo de meus estudos sem nenhum uso de
              frameworks, até os mais avançados que fiz até o momento.
            </p>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
              Fique a vontade para vê-los e pode me procurar caso queira falar
              sobre algum deles, inclusive sugestões de melhoria!
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1 ">
            <a href="https://jubilant-journey-21eccdef.pages.github.io/" target="_blank" rel="noreferrer">
              <div className=" text-gray-800 dark:bg-slate-200 max-w-sm rounded-x1 overflow-hidden shadow-lg hover:scale-110 transition duration-300 ease-in-out">
                <img 
                  className="w-full"
                  src="/E-commerce.png"
                  alt="E-commerce"
                ></img> 
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">
                    Narumi Inoue E-commerce
                  </div>
                  <p className="text-gray-700 text-base">
                    Site de E-commerce básico feito no começo do meu aprendizado com Javascript
                  </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                  <span className="inline-block bg-gray-600 rounded-full px-3 py-1 text-sm font-semibold text-gray-200 mr-2 mb-2">
                    HTLM5
                  </span>
                  <span className="inline-block bg-gray-600 rounded-full px-3 py-1 text-sm font-semibold text-gray-200 mr-2 mb-2">
                    CSS3
                  </span>
                  <span className="inline-block bg-gray-600 rounded-full px-3 py-1 text-sm font-semibold text-gray-200 mr-2 mb-2">
                    Javascript Vanilla
                  </span>
                </div>
              </div>
              </a>
            </div>
            <div className="basis-1/3 flex-1">
            <a href="https://animated-fortnight-d612eca8.pages.github.io/" target="_blank" rel="noreferrer">
              <div className=" text-gray-800 dark:bg-slate-200 max-w-sm rounded-x1 overflow-hidden shadow-lg hover:scale-110 transition duration-300 ease-in-out">
                <img
                  className="w-full"
                  src="/MiniMarket.png"
                  alt="MiniMarket"
                ></img>
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">
                    Mercado
                  </div>
                  <p className="text-gray-700 text-base">
                    Mercado básico feito em Javascript Vanilla
                  </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                  <span className="inline-block bg-gray-600 rounded-full px-3 py-1 text-sm font-semibold text-gray-200 mr-2 mb-2">
                    HTLM5
                  </span>
                  <span className="inline-block bg-gray-600 rounded-full px-3 py-1 text-sm font-semibold text-gray-200 mr-2 mb-2">
                    CSS3
                  </span>
                  <span className="inline-block bg-gray-600 rounded-full px-3 py-1 text-sm font-semibold text-gray-200 mr-2 mb-2">
                    Javascript Vanilla
                  </span>
                </div>
              </div>
              </a>
            </div>
            <div className="basis-1/3 flex-1">
              <a href="https://brenoalb.github.io/LoginPage/" target="_blank"  rel="noreferrer">
              <div className=" text-gray-800 dark:bg-slate-200 max-w-sm rounded-x1 overflow-hidden shadow-lg hover:scale-110 transition duration-300 ease-in-out">
                <img
                  className="w-full"
                  src="/loginPageTartaruga.png"
                  alt="loginPageTartaruga"
                ></img>
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">
                  Login Page
                  </div>
                  <p className="text-gray-700 text-base">
                    Feito para praticar criação de páginas de login 
                  </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                  <span className="inline-block bg-gray-600 rounded-full px-3 py-1 text-sm font-semibold text-gray-200 mr-2 mb-2">
                    HTLM5
                  </span>
                  <span className="inline-block bg-gray-600 rounded-full px-3 py-1 text-sm font-semibold text-gray-200 mr-2 mb-2">
                    CSS3
                  </span>
                  <span className="inline-block bg-gray-600 rounded-full px-3 py-1 text-sm font-semibold text-gray-200 mr-2 mb-2">
                    Javascript Vanilla
                  </span>
                </div>  
              </div>
              </a>
            </div>
            <div className="basis-1/3 flex-1">
              <a href="https://brenoalb.github.io/TechPosters-social-network/" target="_blank"  rel="noreferrer">
              <div className=" text-gray-800 dark:bg-slate-200 max-w-sm rounded-x1 overflow-hidden shadow-lg hover:scale-110 transition duration-300 ease-in-out">
                <img
                  className="w-full"
                  src="/SocialNetwork.png"
                  alt="SocialNetwork"
                ></img>
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">
                  Social Network
                  </div>
                  <p className="text-gray-700 text-base">
                    Feita para praticar consumo de API's 
                  </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                  <span className="inline-block bg-gray-600 rounded-full px-3 py-1 text-sm font-semibold text-gray-200 mr-2 mb-2">
                    HTLM5
                  </span>
                  <span className="inline-block bg-gray-600 rounded-full px-3 py-1 text-sm font-semibold text-gray-200 mr-2 mb-2">
                    CSS3
                  </span>
                  <span className="inline-block bg-gray-600 rounded-full px-3 py-1 text-sm font-semibold text-gray-200 mr-2 mb-2">
                    Javascript Vanilla
                  </span>
                </div>  
              </div>
              </a>
            </div>
            <div className="basis-1/3 flex-1">
            <a href="https://brenoalb.github.io/anagrams/" target="_blank"  rel="noreferrer">
              <div className=" text-gray-800 dark:bg-slate-200 max-w-sm rounded-x1 overflow-hidden shadow-lg hover:scale-110 transition duration-300 ease-in-out">
                <img
                  className="w-full"
                  src="/anagrama.png"
                  alt="anagrama"
                ></img>
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">
                    Gerador de Anagramas
                  </div>
                  <p className="text-gray-700 text-base">
                    Feito para praticar utilização de arrays
                  </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                  <span className="inline-block bg-gray-600 rounded-full px-3 py-1 text-sm font-semibold text-gray-200 mr-2 mb-2">
                    HTLM5
                  </span>
                  <span className="inline-block bg-gray-600 rounded-full px-3 py-1 text-sm font-semibold text-gray-200 mr-2 mb-2">
                    CSS3
                  </span>
                  <span className="inline-block bg-gray-600 rounded-full px-3 py-1 text-sm font-semibold text-gray-200 mr-2 mb-2">
                    Javascript Vanilla
                  </span>
                </div>
              </div>
              </a>
            </div>
            <div className="basis-1/3 flex-1 ">
            <a href="https://brenoalb.github.io/RollDices/" target="_blank"  rel="noreferrer">
              <div className=" text-gray-800 dark:bg-slate-200 max-w-sm rounded-x1 overflow-hidden shadow-lg hover:scale-110 transition duration-300 ease-in-out">
                <img
                  className="w-full"
                  src="/RollDices.png"
                  alt="RollDices"
                ></img>
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">
                    Rolando os dados
                  </div>
                  <p className="text-gray-700 text-base">
                    Treino de lógica: Calcula quantas vezes a soma de dois dados jogados simultaneamente resulta em cada resultado possível após 100 tentativas aleatórias. 
                  </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                  <span className="inline-block bg-gray-600 rounded-full px-3 py-1 text-sm font-semibold text-gray-200 mr-2 mb-2">
                    HTLM5
                  </span>
                  <span className="inline-block bg-gray-600 rounded-full px-3 py-1 text-sm font-semibold text-gray-200 mr-2 mb-2">
                    CSS3
                  </span>
                  <span className="inline-block bg-gray-600 rounded-full px-3 py-1 text-sm font-semibold text-gray-200 mr-2 mb-2">
                    Javascript Vanilla
                  </span>
                </div>
              </div>
              </a>
            </div>   
          </div>
        </section>
      </main>
    </div>
  );
}
