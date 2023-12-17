import { useEffect, useState } from "react";
import Banner from "../Banner";
import Form from "../Form";
import CollaboratorsContainer from "../CollaboratorsContainer/Index";
import BannerFooter from "../BannerFooter/Index";

function Index() {
  const [collaborators, setCollaborators] = useState([]);

  useEffect(() => {
    // setCollaborators([
    //   {
    //     name: "Lucas Carlos da Silva",
    //     position: "Desenvolvedor Front-end",
    //     image: "https://www.github.com/lusques.png",
    //     team: "Programação",
    //   },
    //   {
    //     name: "Lucas Carlos da Silva",
    //     position: "Desenvolvedor Front-end",
    //     image: "https://www.github.com/lusques.png",
    //     team: "Programação",
    //   },
    //   {
    //     name: "Lucas Carlos da Silva",
    //     position: "Desenvolvedor Front-end",
    //     image: "https://www.github.com/lusques.png",
    //     team: "Programação",
    //   },
    //   {
    //     name: "Lucas Carlos da Silva",
    //     position: "Desenvolvedor Front-end",
    //     image: "https://www.github.com/lusques.png",
    //     team: "Front-End",
    //   },
    //   {
    //     name: "Lucas Carlos da Silva",
    //     position: "Desenvolvedor Front-end",
    //     image: "https://www.github.com/lusques.png",
    //     team: "Front-End",
    //   },
    //   {
    //     name: "Lucas Carlos da Silva",
    //     position: "Desenvolvedor Front-end",
    //     image: "https://www.github.com/lusques.png",
    //     team: "Front-End",
    //   },
    //   {
    //     name: "Lucas Carlos da Silva",
    //     position: "Desenvolvedor Front-end",
    //     image: "https://www.github.com/lusques.png",
    //     team: "Data Science",
    //   },
    //   {
    //     name: "Lucas Carlos da Silva",
    //     position: "Desenvolvedor Front-end",
    //     image: "https://www.github.com/lusques.png",
    //     team: "Data Science",
    //   },
    //   {
    //     name: "Lucas Carlos da Silva",
    //     position: "Desenvolvedor Front-end",
    //     image: "https://www.github.com/lusques.png",
    //     team: "Data Science",
    //   },
    //   {
    //     name: "Lucas Carlos da Silva",
    //     position: "Desenvolvedor Front-end",
    //     image: "https://www.github.com/lusques.png",
    //     team: "Devops",
    //   },
    //   {
    //     name: "Lucas Carlos da Silva",
    //     position: "Desenvolvedor Front-end",
    //     image: "https://www.github.com/lusques.png",
    //     team: "Devops",
    //   },
    //   {
    //     name: "Lucas Carlos da Silva",
    //     position: "Desenvolvedor Front-end",
    //     image: "https://www.github.com/lusques.png",
    //     team: "Devops",
    //   },
    //   {
    //     name: "Lucas Carlos da Silva",
    //     position: "Desenvolvedor Front-end",
    //     image: "https://www.github.com/lusques.png",
    //     team: "Ux e Design",
    //   },
    //   {
    //     name: "Lucas Carlos da Silva",
    //     position: "Desenvolvedor Front-end",
    //     image: "https://www.github.com/lusques.png",
    //     team: "Ux e Design",
    //   },
    //   {
    //     name: "Lucas Carlos da Silva",
    //     position: "Desenvolvedor Front-end",
    //     image: "https://www.github.com/lusques.png",
    //     team: "Ux e Design",
    //   },
    //   {
    //     name: "Lucas Carlos da Silva",
    //     position: "Desenvolvedor Front-end",
    //     image: "https://www.github.com/lusques.png",
    //     team: "Mobile",
    //   },
    //   {
    //     name: "Lucas Carlos da Silva",
    //     position: "Desenvolvedor Front-end",
    //     image: "https://www.github.com/lusques.png",
    //     team: "Mobile",
    //   },
    //   {
    //     name: "Lucas Carlos da Silva",
    //     position: "Desenvolvedor Front-end",
    //     image: "https://www.github.com/lusques.png",
    //     team: "Mobile",
    //   },
    //   {
    //     name: "Lucas Carlos da Silva",
    //     position: "Desenvolvedor Front-end",
    //     image: "https://www.github.com/lusques.png",
    //     team: "Inovação e Gestão",
    //   },
    //   {
    //     name: "Lucas Carlos da Silva",
    //     position: "Desenvolvedor Front-end",
    //     image: "https://www.github.com/lusques.png",
    //     team: "Inovação e Gestão",
    //   },
    //   {
    //     name: "Lucas Carlos da Silva",
    //     position: "Desenvolvedor Front-end",
    //     image: "https://www.github.com/lusques.png",
    //     team: "Inovação e Gestão",
    //   },
    // ]);
    
    setCollaborators([
      { name: "Iago Silva", position: "Programador", image: "https://www.github.com/iago.png", team: "Programação" },
      { name: "João Oliveira", position: "Programador", image: "https://www.github.com/joao.png", team: "Programação" },
      { name: "Maria Souza", position: "Programador", image: "https://www.github.com/maria.png", team: "Programação" },
      { name: "Lucas Silva", position: "Programador Front-end", image: "https://www.github.com/lusques.png", team: "Front-End" },
      { name: "Ana Silva", position: "Programador Front-end", image: "https://www.github.com/ana.png", team: "Front-End" },
      { name: "Pedro Pereira", position: "Programador Front-end", image: "https://www.github.com/pedro.png", team: "Front-End" },
      { name: "Larissa Oliveira", position: "Cientista de Dados", image: "https://www.github.com/larissa.png", team: "Data Science" },
      { name: "Mariana Lima", position: "Cientista de Dados", image: "https://www.github.com/mariana.png", team: "Data Science" },
      { name: "Rafael Costa", position: "Cientista de Dados", image: "https://www.github.com/rafael.png", team: "Data Science" },
      { name: "Gustavo Oliveira", position: "Engenheiro DevOps", image: "https://www.github.com/gustavo.png", team: "Devops" },
      { name: "Fernanda Santos", position: "Engenheiro DevOps", image: "https://www.github.com/fernanda.png", team: "Devops" },
      { name: "Lucas Mendes", position: "Engenheiro DevOps", image: "https://www.github.com/lucas.png", team: "Devops" },
      { name: "Gabriel Lima", position: "Designer", image: "https://www.github.com/gabriel.png", team: "Ux e Design" },
      { name: "Juliana Costa", position: "Designer", image: "https://www.github.com/juliana.png", team: "Ux e Design" },
      { name: "André Silva", position: "Designer", image: "https://www.github.com/andre.png", team: "Ux e Design" },
      { name: "Luciana Oliveira", position: "Programador Mobile", image: "https://www.github.com/luciana.png", team: "Mobile" },
      { name: "Rodrigo Santos", position: "Programador Mobile", image: "https://www.github.com/rodrigo.png", team: "Mobile" },
      { name: "Camila Lima", position: "Programador Mobile", image: "https://www.github.com/camila.png", team: "Mobile" },
      { name: "Marcelo Oliveira", position: "Gestor em Inovação", image: "https://www.github.com/marcelo.png", team: "Inovação e Gestão" },
      { name: "Isabela Costa", position: "Gestor em Inovação", image: "https://www.github.com/isabela.png", team: "Inovação e Gestão" },
      { name: "Diego Silva", position: "Gestor em Inovação", image: "https://www.github.com/diego.png", team: "Inovação e Gestão" },
    ]);
    
  }, []);

  const teamsAndColors = [
    {
      team: "Programação",
      colorPrimary: "#D9F7E9",
      colorSecondary: "#57C278",
    },
    {
      team: "Front-End",
      colorPrimary: "#E8F8FF",
      colorSecondary: "#82CFFA",
    },
    {
      team: "Data Science",
      colorPrimary: "#F0F8E2",
      colorSecondary: "#A6D157",
    },
    {
      team: "Devops",
      colorPrimary: "#FDE7E8",
      colorSecondary: "#E06B69",
    },
    {
      team: "Ux e Design",
      colorPrimary: "#FAE9F5",
      colorSecondary: "#DB6EBF",
    },
    {
      team: "Mobile",
      colorPrimary: "#FFF5D9",
      colorSecondary: "#FFBA05",
    },
    {
      team: "Inovação e Gestão",
      colorPrimary: "#FFEEDF",
      colorSecondary: "#FF8A29",
    },
  ];

  const updateCollaboratorsArray = (collaborator) => {
    setCollaborators([...collaborators, collaborator]);
  };

  return (
    <>
      <header>
        <Banner />
      </header>
      <main>
        <Form
          addNewCollaborator={(e) => updateCollaboratorsArray(e)}
          teams={teamsAndColors.map((teams) => teams.team)}
        />
        {teamsAndColors.map((teams) => (
          <CollaboratorsContainer
            collaborators={collaborators.filter(
              (collaborator) => collaborator.team === teams.team
            )}
            colorPrimary={teams.colorPrimary}
            colorSecondary={teams.colorSecondary}
            key={teams.team}
            team={teams.team}
          />
        ))}
      </main>
      <footer>
        <BannerFooter />
      </footer>
    </>
  );
}
export default Index;
