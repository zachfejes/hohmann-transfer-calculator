import { G } from './constants';

/**
 * @description Calculates the TOF across the transfer ellipse from the initial to the final orbit.
 * @param {number} r_i Radius of the initial circular orbit, and pariapsis of the transfer ellipse [m].
 * @param {number} M_i Mass of the non-trivial body that we are leaving in initial circular orbit [kg].
 * @param {number} v_p Speed of the body we're leaving, and speed of initial circular orbit [m/s].
 * @param {number} M_t Mass of the non-trivial body that we are orbiting during the transfer [kg].
 * @param {number} r_i_park Radius of the circular parking orbit we are initially in around and with respect to the initial body [m].
 * @returns {number} Returns the deltaV necessary to leave the initial circular orbit and enter the transfer ellipse desired.
 */
function deltaVEnd(r_f, M_f, v_a, M_t, r_f_park) {

    var v_body_two = Math.sqrt(G*M_f/r_f);
    var v_esc = v_a - v_body_two;
    var v_f_park = Math.sqrt(G*M_f/r_f_park);

    var deltaV = Math.sqrt(Math.pow(v_esc,2) + 2*G*M_f/r_f_park) - v_f_park;
  
    return deltaV;
  }
  
  export default deltaVEnd;
  