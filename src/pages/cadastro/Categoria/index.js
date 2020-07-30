import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

function CadastroCategoria() {
  const initialValues = {
    name: '',
    description: '',
    color: '',
  };

  const [categories, setCategories] = useState([]);
  const [values, setValues] = useState(initialValues);

  function setValue(key, value) {
    setValues({
      ...values,
      [key]: value,
    });
  }

  function handleChange(e) {
    // const {getAttribute, value} = e.target;
    setValue(
      e.target.getAttribute('name'),
      e.target.value,
    );
  }

  useEffect(() => {
    const URL = window.location.hostname.includes('localhost')
      ? 'http://localhost:8080/categories'
      : 'https://myflix-react-project.herokuapp.com/categories';
    fetch(URL)
      .then(async (response) => {
        const results = await response.json();
        setCategories([
          ...results,
        ]);
      });
  }, []);

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:
        {values.name}
      </h1>

      <form onSubmit={(event) => {
        event.preventDefault();
        setCategories([
          ...categories,
          values,
        ]);
        setValues(initialValues);
      }}
      >

        <FormField
          label="Nome da Categoria: "
          type="text"
          name="name"
          value={values.name}
          onChange={handleChange}
        />

        <FormField
          label="Descrição: "
          type="textarea"
          name="description"
          value={values.description}
          onChange={handleChange}
        />

        <FormField
          label="Cor: "
          type="color"
          name="color"
          value={values.color}
          onChange={handleChange}
        />

        {/* <div>
          <label>
              Nome da Categoria:
              <input
                  type="text"
                  name="name"
                  value={values.name}
                  onChange={handleChange}

              />
          </label>
        </div>

        <div>
          <label>
            Descrição:
            <textarea
                type="text"
                name="description"
                value={values.description}
                onChange={handleChange}
            />
          </label>
        </div>

        <div>
          <label>
            Cor:
            <input
                type="color"
                name="color"
                value={values.color}
                onChange={handleChange}
            />
          </label>
        </div>  */}

        <Button>
          Cadastrar
        </Button>

        {categories.length === 0 && (
          <div>
            Loading...
          </div>
        )}

      </form>

      <ul>
        { categories.map((category) => (
          <li key={`${category.name}`}>
            {category.name}
          </li>
        ))}
      </ul>

      <Link to="/">
        Ir para Home
      </Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
