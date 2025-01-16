import React, { useState } from 'react';
import { TextField } from '../TextField';
import { Movie } from '../../types/Movie';
type Props = {
  onAdd: (movie: Movie) => void;
};

export const NewMovie: React.FC<Props> = ({ onAdd }) => {
  const [count, setCount] = useState(0);
  const [title, setTitle] = useState('');
  const [hasTitleError, setHasTitleError] = useState(false);

  const [desctiption, setDesctiption] = useState('');
  const [hasdesctiptionError, setHasDesctiptionError] = useState(false);

  const [imageUrl, setImageUrl] = useState('');
  const [hasImageUrlError, setHasImageUrlError] = useState(false);

  const [imdbUrl, setImdbdUrl] = useState('');
  const [hasImdbUrlError, setHasImdbUrlError] = useState(false);

  const [imdbID, setImdbID] = useState('');
  const [hasImdbIDError, setHasImdbIDError] = useState(false);

  const handleTitleChange = (value: string) => {
    setTitle(value);
    setHasTitleError(false);
  };

  const handleDesctiptionChange = (value: string) => {
    setDesctiption(value);
    setHasDesctiptionError(false);
  };

  const handleImageUrlChange = (value: string) => {
    setImageUrl(value);
    setHasImageUrlError(false);
  };

  const handleImdbUrlChange = (value: string) => {
    setImdbdUrl(value);
    setHasImdbUrlError(false);
  };

  const handleImdbIDChange = (value: string) => {
    setImdbID(value);
    setHasImdbIDError(false);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    setHasTitleError(!title);
    setHasDesctiptionError(!desctiption);
    setHasImageUrlError(!imageUrl);
    setHasImdbUrlError(!imdbUrl);
    setHasImdbIDError(!imdbID);

    if (!title || !desctiption || !imageUrl || !imdbUrl || !imdbID) {
      return;
    }

    onAdd({
      title,
      description,
      imageUrl,
      imdbUrl,
      imdbId: imdbID,
    });
    setTitle('');
    setDesctiption('');
    setImageUrl('');
    setImdbdUrl('');
    setImdbID('');
    setCount(prevCount => prevCount + 1);
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
        error={hasTitleError}
      />

      <TextField
        name="description"
        label="Description"
        value={desctiption}
        onChange={handleDesctiptionChange}
        required
        error={hasdesctiptionError}
      />

      <TextField
        name="imgUrl"
        label="Image URL"
        value={imageUrl}
        onChange={handleImageUrlChange}
        required
        error={hasImageUrlError}
      />

      <TextField
        name="imdbUrl"
        label="Imdb URL"
        value={imdbUrl}
        onChange={handleImdbUrlChange}
        required
        error={hasImdbUrlError}
      />

      <TextField
        name="imdbId"
        label="Imdb ID"
        value={imdbID}
        onChange={handleImdbIDChange}
        required
        error={hasImdbIDError}
      />

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
