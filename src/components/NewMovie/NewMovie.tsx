import React, { useState } from 'react';
import { TextField } from '../TextField';

export const NewMovie = () => {
  const [count] = useState(0);
  const [title, setTitle] = useState('');
  const [hasTitleError, setHasTitleError] = useState(false);

  const [desctiption, setDesctiption] = useState('');
  const [hasdesctiptionError, setHasDesctiptionError] = useState(false);

  const [imageUrl, setImageUrl] = useState('');
  const [hasimageUrlError, setHasImageUrlError] = useState(false);

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
    setHasTitleError(false);
  };

  const handleDesctiptionChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setDesctiption(event.target.value);
    setHasDesctiptionError(false);
  };

  const handleImageUrlChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setImageUrl(event.target.value);
    setHasImageUrlError(false);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (!title) {
      setHasTitleError(true);

      return;
    }

    if (!desctiption) {
      setHasDesctiptionError(true);

      return;
    }
  };

  return (
    <form className="NewMovie" key={count} onSubmit={handleSubmit}>
      <h2 className="title">Add a movie</h2>

      <TextField
        name="title"
        label="Title"
        value={title}
        onChange={handleTitleChange}
        required
        hasError={hasTitleError}
      />

      <TextField
        name="description"
        label="Description"
        value=""
        onChange={handleDesctiptionChange}
      />

      <TextField
        name="imgUrl"
        label="Image URL"
        value=""
        onChange={handleImageUrlChange}
      />

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
