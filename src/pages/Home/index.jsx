// import Card from '../../components/card';
import Container from '../../components/layout/container/Container';
import './home.css';
import Hero from '../../components/section/hero';
import AboutMe from '../../components/section/aboutMe';
import Skills from '../../components/section/skills';
import Projets from '../../components/section/projets';
import Contact from '../../components/section/contact';

const Home = () => {
  //   const projets = [
  //     {
  //       id: 1,
  //       title: 'titre 1',
  //       img: 'projet1.jpg',
  //       description: 'description 1',
  //     },
  //     {
  //       id: 2,
  //       title: 'titre 2',
  //       img: 'projet2.jpg',
  //       description: 'description 2',
  //     },
  //   ];
  //   return <div>{projets && projets.map((projet) => <Card key={projet.id} projet={projet} />)}</div>;
  //

  return (
    <Container>
      <Hero />
      <AboutMe />
      <Skills />
      <Projets />
      <Contact />
    </Container>
  );
};
export default Home;
