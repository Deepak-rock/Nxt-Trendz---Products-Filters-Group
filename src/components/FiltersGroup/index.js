import './index.css'
import {IoSearchSharp} from 'react-icons/io5'

const FiltersGroup = props => {
  const {
    categoryOptions,
    ratingsList,
    changeSearchInput,
    searchValue,
    searchInputEntered,
    clickedSearchIcon,
    changeCategory,
    changeRating,
    activeCategoryId,
    activeRatingId,
    clearFilter,
  } = props

  const onChangeSearchInput = event => {
    changeSearchInput(event.target.value)
  }

  const onKeyDownSearchInput = event => {
    if (event.key === 'Enter') {
      searchInputEntered()
    }
  }

  const onClickSearchIcon = () => {
    clickedSearchIcon()
  }

  const onClickClearFilters = () => {
    clearFilter()
  }

  return (
    <div className="filters-group-container">
      <div className="search-input-container">
        <input
          type="search"
          className="search-input"
          value={searchValue}
          placeholder="Search"
          onChange={onChangeSearchInput}
          onKeyDown={onKeyDownSearchInput}
        />
        <button
          className="search-button"
          type="button"
          onClick={onClickSearchIcon}
        >
          <IoSearchSharp className="search-icon" />
        </button>
      </div>
      <p className="category">Category</p>
      <ul className="category-options-list">
        {categoryOptions.map(category => (
          <li className="category-item" key={category.categoryId}>
            <button
              className={
                category.categoryId === activeCategoryId
                  ? 'active category-btn'
                  : 'category-btn'
              }
              type="button"
              onClick={() => changeCategory(category.categoryId)}
            >
              {category.name}
            </button>
          </li>
        ))}
      </ul>
      <p className="star-rating">Rating</p>
      <ul className="ratings-list">
        {ratingsList.map(rating => (
          <li className="rating-item" key={rating.ratingId}>
            <button
              className={
                rating.ratingId === activeRatingId
                  ? 'active rating-btn'
                  : 'rating-btn'
              }
              type="button"
              onClick={() => changeRating(rating.ratingId)}
            >
              <img src={rating.imageUrl} alt="stars" className="stars-icon" />
              <p className="up"> & up</p>
            </button>
          </li>
        ))}
      </ul>
      <button
        className="clear-filter-btn"
        type="button"
        onClick={onClickClearFilters}
      >
        Clear Filters
      </button>
    </div>
  )
}
export default FiltersGroup
