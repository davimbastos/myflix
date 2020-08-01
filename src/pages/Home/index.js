import React, { useState, useEffect } from 'react';
import PageDefault from '../../components/PageDefault';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import categoriesRepository from '../../repositories/categories';

function Home() {
  const [initialData, setInitialData] = useState([]);

  useEffect(() => {
    categoriesRepository.getAllWithVideos()
      .then((categoriesWithVideos) => {
        setInitialData(categoriesWithVideos);
      });
  }, []);

  return (
    <PageDefault paddingAll={0}>

      {initialData.length === 0 && (<div>Loading...</div>)}

      {initialData.map((category, index) => {
        if (index === 0) {
          return (
            <div key={category.id}>
              <BannerMain
                videoTitle={initialData[5].videos[5].title}
                url={initialData[5].videos[5].url}
                videoDescription="Três programadores conversam sobre maturidade na profissão. Vamos entender de uma vez por todas a diferença entre os níveis e o que realmente faz você um júnior, pleno ou sênior. A gente passa a maior parte do tempo escrevendo código. Agora chegou o momento de falar sobre isso."
              />
              <Carousel
                ignoreFirstVideo
                category={initialData[0]}
              />
            </div>
          );
        }

        return (
          <Carousel
            key={category.id}
            category={category}
          />
        );
      })}

    </PageDefault>
  );
}

export default Home;
