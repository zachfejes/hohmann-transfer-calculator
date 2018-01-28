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
function deltaVStart(r_i, M_i, v_p, M_t, r_i_park) {

    var v_body_one = Math.sqrt(G*M_t/r_i);
    var v_esc_i = v_p - v_body_one;
    var v_i_park = Math.sqrt(G*M_i/r_i_park);

    var deltaV = Math.sqrt(Math.pow(v_esc_i,2) + 2*G*M_i/r_i_park) - v_i_park;
  
    return deltaV;
  }
  
  export default deltaVStart;
  