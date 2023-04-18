import {
  BusinessFeatures,
  CategoryCard,
  ExploreMarketplace,
  Features,
  Hero,
  ProjectCard,
  Slide,
  TrustedBy,
} from "../components";

import { cards, projects } from "../data/data";

const Home = () => {
  return (
    <main>
      <Hero />
      <TrustedBy />
      <Slide slidesToShow={6} arrowsScroll={5}>
        {cards.map((catCard) => (
          <CategoryCard
            image={catCard.img}
            key={catCard.id}
            title={catCard.title}
            desc={catCard.desc}
          />
        ))}
      </Slide>
      <Features />
      <ExploreMarketplace />
      <BusinessFeatures />
      <Slide slidesToShow={4} arrowsScroll={4}>
        {projects.map((projCard) => (
          <ProjectCard
            key={projCard.id}
            cardImage={projCard.img}
            profilePic={projCard.pp}
            category={projCard.cat}
            username={projCard.username}
          />
        ))}
      </Slide>
    </main>
  );
};

export default Home;
