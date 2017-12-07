import PropTypes from 'prop-types';
import { G } from './constants';

function speedAtApoapsis(m, rp, ra) {
    if(m === undefined) {
        throw(new Error("Was expecting numeric value for m, but got undefined"));
    }

    if(rp === undefined) {
        throw(new Error("Was expecting numeric value for rp, but got undefined"));
    }

    if(ra === undefined) {
        throw(new Error("Was expecting numeric value for ra, but got undefined"));
    }

    return null;
}

export default speedAtApoapsis;