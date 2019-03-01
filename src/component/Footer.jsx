import React from 'react';
import FilterLink from './FilterLink.jsx';
import { VisibilityFilters } from '../action/index';

const Footer = () => (
    <div>
        <span>Shownum: </span>
        <FilterLink filter={VisibilityFilters.SHOW_ALL}>All</FilterLink>
        <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>Active</FilterLink>
        <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>Completed</FilterLink>
    </div>
);

export default Footer;
