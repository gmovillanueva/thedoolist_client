import PropTypes from 'prop-types';
import { filter } from 'ramda';

export function FilterButton({ label }) {
  return (
    <>
      <button
        type='button'
        className='inline-block px-6 py-3 text-center align-middle text-xs tracking-tight text-gray-50 transition-all ease-in hover:rounded hover:bg-gray-950/25'
      >
        {label}
      </button>
    </>
  );
}

FilterButton.propTypes = {
  label: PropTypes.string.isRequired,
};
