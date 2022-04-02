/**Her lages det en unique ID for de ulike BaseComponetntsene 
 * som brukes i applikasjonen
 */
let UUID = 0;

export default function UniqueID() {
  const getID = () => {
    UUID++;
    return UUID;
  };

  return {
    getID,
  };
}