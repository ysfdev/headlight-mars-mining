import React from 'react';
import {Label, Message, Segment} from 'semantic-ui-react';
import store from '../../store';
import FetchingError from '../FetchingError';
import './styles.css';

const TOTAL_GRID_COLS = 20;
const TOTAL_GRID_ROWS = 20;

const generateDataGrid = ({classNameVerifier}) => {
  const items = [];

  for (let row = 0; row < TOTAL_GRID_ROWS; row++) {
    let rowData = [];
    for (let col = 0; col < TOTAL_GRID_COLS; col++) {
      rowData.push(
        <td 
          className={classNameVerifier(row, col)} 
          key={`col-${row}-${col}`}>{row},{col}
        </td>
      )
    }
    items.push(<tr key={`row-${row}`}>{rowData}</tr>)
  }

  return items;
};

const paintDataGrid = ({classNameVerifier}) => {
  const dataGrid = generateDataGrid({classNameVerifier})
  return (
    <table className="MineralTracker_table">
      <tbody>{dataGrid}</tbody>
    </table>
  )
};

const getClassNameVerifier = ({activeNodesLocations, activeBotsLocations}) => {
  return (rowIdx, colIdx) => {
    const activeNodeLocation = !!(activeNodesLocations && activeNodesLocations[rowIdx] && activeNodesLocations[rowIdx][colIdx]);
    const activeBotLocation = !!(activeBotsLocations && activeBotsLocations[rowIdx] && activeBotsLocations[rowIdx][colIdx]);

    if (activeNodeLocation && activeBotLocation)
      return 'activeNodeBotLocation';
    else if (activeBotLocation && !activeNodeLocation)
      return 'activeBotLocation';
    else if (activeNodeLocation && !activeBotLocation)
      return 'activeNodeLocation';

    return '';
  }
};

const MiningLegend = () => {
  return (
    <Message color="black" inverted="true" info attached>
      <Label color="blue">Mining Node</Label>
      <Label color="red">Mining Bot</Label>
      <Label color="purple">Merged Node & Bot</Label>
    </Message>
  )
};

const DisplayDataGrid = ({trackingDataGrid}) => {
  return (
    <div> 
      {trackingDataGrid}
    </div>
  )
};

const MineralTracker = () => {
  const {activeNodesLocations, activeBotsLocations} = store.getState();
  const classNameVerifier = getClassNameVerifier({activeNodesLocations, activeBotsLocations});
  const trackingDataGrid = paintDataGrid({classNameVerifier});
  const loadingData = (!Object.keys(activeNodesLocations).length || !Object.keys(activeBotsLocations).length);
  
  return (
    <Segment inverted className="MineralTracker_container">
      <FetchingError></FetchingError>
      <Segment inverted loading={loadingData} textAlign="center">
        <MiningLegend></MiningLegend>
        <DisplayDataGrid trackingDataGrid={trackingDataGrid}></DisplayDataGrid>
      </Segment>
    </Segment>
  )
};

export default MineralTracker;