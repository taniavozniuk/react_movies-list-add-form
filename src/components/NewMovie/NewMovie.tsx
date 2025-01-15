import React, { useState } from 'react';
import { TextField } from '../TextField';

export const NewMovie = () => {
  const [count] = useState(0);
  const [title, setTitle] = useState('');
  const [hasTitleError, setHasTitleError] = useState(false);

  const handleTitleChange = (newValue: string) => {
    setTitle(newValue);
    setHasTitleError(false);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (!title) {
      setHasTitleError(true);

      return;
    }
  };

  return (
    <form className="NewMovie" key={count} onSubmit={handleSubmit}>
      <h2 className="title">Add a movie</h2>

      <TextField
        name="title"
        label="Title"
        value=""
        onChange={handleTitleChange}
        required
      />

      <TextField name="description" label="Description" value="" />

      <TextField name="imgUrl" label="Image URL" value="" />

      <TextField name="imdbUrl" label="Imdb URL" value="" />

      <TextField name="imdbId" label="Imdb ID" value="" />

      <div className="field is-grouped">
        <div className="control">
          <button
            type="submit"
            data-cy="submit-button"
            className="button is-link"
          >
            Add
          </button>
        </div>
      </div>
    </form>
  );
};
