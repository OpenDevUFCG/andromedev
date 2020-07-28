const categories = require('../enums/orgCategory');

const orgs = [
  {
    name: "Open Knowledge Brasil",
    slug: "open-knowledge",
    description:
      "A Open Knowledge Brasil (OKBR), também chamada de Rede pelo Conhecimento Livre, é o capítulo da Open Knowledge Internacional no Brasil. Nós utilizamos e desenvolvemos ferramentas cívicas, projetos, análises de políticas públicas, jornalismo de dados e promovemos o conhecimento livre nos diversos campos da sociedade. Na esfera política, buscamos tornar a relação entre governo e sociedade mais próxima e transparente.",
    category: categories.STARS,
    github: "https://github.com/okfn-brasil",
    logo: "https://www.ok.org.br/wp-content/themes/okbr/assets/images/logo.svg",
  },
  {
    name: "VTEX / SPLab",
    slug: 'vtex',
    description:
      "A VTEX é uma empresa global de tecnologia focada em produtos para e-commerce que impacta diariamente o trabalho de milhares de pessoas ao redor do mundo. Através dos seus produtos e serviços, oferece aos lojistas uma plataforma coesa para executar todo o seu negócio e proporcionar aos seus clientes sempre a melhor experiência de compra. No contexto da Universidade Federal de Campina Grande (UFCG), a VTEX e o SPLab firmaram parceria para o desenvolvimento de componentes e soluções da plataforma.",
    category: categories.LAB,
    github: "https://github.com/vtex",
    logo: "https://i.imgur.com/4Xu1F2m.png",
  },
  {
    name: "Call Us What You Want",
    slug: "calluswhatyouwant",
    description:
      "Call Us What You Want foi criada por José Renan e Robson Junior em 2018 a partir do desejo de desenvolver projetos relacionados com música e de aprender novas tecnologias. O projeto inicial, chamado Musicritic, consiste em uma espécie de avaliador musical. Com o seu desenvolvimento, surgiu um repositório de propósito mais geral: o spotify-web-sdk, trazendo a ideia de facilitar o acesso a dados da API Web do Spotify.",
    category: categories.PARTNER,
    github: "https://github.com/calluswhatyouwant",
    logo: "https://i.imgur.com/b35mKLg.png",
  },
  {
    name: "CAESI - Centro Acadêmico de Ciência da Computação UFCG",
    slug: "caesi",
    description:
      "O CAESI (Centro Acadêmico dos Estudantes de Informática) é o Centro Acadêmico de Ciência da Computação na UFCG, atua na representação do corpo discente do curso e trabalha para melhorar a experiência do estudante durante a graduação.",
    category: categories.PARTNER,
    github: "https://github.com/caesiufcg",
    logo: "https://raw.githubusercontent.com/caesiufcg/caesi-documentos/master/imagens/logo-vazado.png",
  },
  {
    name: "Laboratório de Sistemas Distribuídos",
    slug: "lsd",
    description:
      "O LSD é um dos Laboratórios de Pesquisa e Desenvolvimento (P&D) da Unidade Acadêmica de Sistemas e Computação da UFCG e realiza ativividades de P&D nas áreas de Computação em Nuvem, Mineração de dados, Computação Social, Big Data e Aplicações.",
    category: categories.LAB,
    github: "https://github.com/ufcg-lsd",
    logo: "https://i.imgur.com/oadrDYr.png"
  },
  {
    name: "Coordenação de Graduação da UASC",
    slug: "uasc",
    description:
      "A Coordenação de Graduação da UASC é responsável pela gestão das atividades acadêmicas do Curso de Ciência da Computação da UFCG. Nesse contexto, apoia diversas iniciativas de software aberto, incluindo algumas voltadas para melhorar a gestão do curso.",
    category: categories.PARTNER,
    github: "http://www.computacao.ufcg.edu.br/",
    logo: "https://i.imgur.com/zlNkrUk.png",
  },
];

function getOrg(slug) {
  return orgs.find(org => org.slug === slug)
}

module.exports = {
  orgs,
  getOrg,
}
