import configs from '../config';

const URL_CATEGORIES = `${configs.URL_BACKEND}/categories`;

function getAll() {
  return fetch(`${URL_CATEGORIES}`)
    .then(async (response) => {
      if (response.ok) {
        const results = await response.json();
        return results;
      }

      throw new Error('Data not found!');
    });
}

function getAllWithVideos() {
  return fetch(`${URL_CATEGORIES}?_embed=videos`)
    .then(async (response) => {
      if (response.ok) {
        const results = await response.json();
        return results;
      }

      throw new Error('Data not found!');
    });
}

export default {
  getAllWithVideos,
  getAll,
};
