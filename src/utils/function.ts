/**
 * 
 * @param {string} txt  - The input Text to be sliced
 * @param {number} maxLenght - The maximum length before truncation
 * @returns -The sliced Text , with an (...) appended if trucated
 */
export function TxtSlicer(txt: string, maxLenght: number = 50) {
  return txt.length > maxLenght ? `${txt.slice(0, maxLenght)}...` : txt;
}