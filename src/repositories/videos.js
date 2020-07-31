import configs from '../config';

const URL_VIDEOS = `${configs.URL_BACKEND}/videos`;

function create(videoObject) {
  return fetch(`${URL_VIDEOS}?_embed=videos`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(videoObject),
  })
    .then(async (response) => {
      if (response.ok) {
        const results = await response.json();
        return results;
      }

      throw new Error('Data not found!');
    });
}

export default {
  create,
};
