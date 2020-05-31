import React, { useState, useEffect, } from 'react';
import {
  ComposableMap,
  Geographies,
  Geography,
} from 'react-simple-maps';
import axios from 'axios';
import ReactTooltip from 'react-tooltip';
import UsaJson from '../constants/Usa.topo.json';
import './ChoroplethMap.css';

const ChoroplethMap = () => {

  const [data, setData] = useState([]);
  const [tooltipContent, setTooltipContent] = useState('');

  useEffect(() => {
      const getData = async () => {
        let response = await axios.get('https://covidtracking.com/api/v1/states/current.json');
        console.log(response.data);
        setData(response.data);
      }
      getData();
  }, []);

  const PROJECTION_CONFIG = {
      center: [-95, 37],
      scale: 420,
  }

  const onMouseEnter = (geo, current = { positive: 'NA' }) => {
      return () => {
        console.log(geo.properties.name);
        console.log(current.positive);
        setTooltipContent(`${geo.properties.name}: ${current.positive}`);
      }
  }

  const onMouseLeave = () => {
    setTooltipContent('');
  }

  return (
    <>
        <ReactTooltip>{tooltipContent}</ReactTooltip>
        <ComposableMap
            projection="geoAlbersUsa"
            width={350}
            height={200}
            projectionConfig={PROJECTION_CONFIG}>
            <Geographies 
                geography={UsaJson}
                fill="#E0E0E0"
                stroke="#FFFFFF"
                strokeWidth={0.2}>
                  {({ geographies }) =>
                      geographies.map(geo => {
                        const current = data.find(s => s.state === geo.id);
                        return (
                          <Geography 
                            key={geo.rsmKey} 
                            geography={geo} 
                            onMouseEnter={onMouseEnter(geo, current)}
                            onMouseLeave={onMouseLeave}/>
                        );
                      })
                  }
            </Geographies>
        </ComposableMap>
    </>
  );

}
    
export default ChoroplethMap;
    