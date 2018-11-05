export const getActiveLocations = (nodes = []) => {
  return nodes.reduce((activeLocations, node) => {
    if (node.Location && typeof activeLocations[node.Location.X] === 'undefined') {
      activeLocations[node.Location.X] = {};
    } 

    activeLocations[node.Location.X][node.Location.Y] = node.Location;
    
    return activeLocations;
  }, {})
};