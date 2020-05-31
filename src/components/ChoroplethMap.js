import React, { useState, useEffect, } from 'react';
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
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

  const onMouseEnter = (geo, current = { positive: null, recovered: null }) => {
      return () => {
        console.log(geo.properties.name);
        console.log(current.positive);
        setTooltipContent(`${geo.properties.name} 
          <br/> Total No of Foodie: ${current.positive ? current.positive : 'NA'}
          <br/> Total No of Chef: ${current.recovered ? current.recovered : 'NA'}`);
      }
  }

  const onMouseLeave = () => {
    setTooltipContent('');
  }

  return (
    <>
        <ReactTooltip type="light" multiline={true} html={true}>
            {tooltipContent}
        </ReactTooltip>
        <ComposableMap
            projection="geoAlbersUsa"
            width={350}
            height={200}
            projectionConfig={PROJECTION_CONFIG}
            data-tip="">
            <ZoomableGroup zoom={1}>
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
                            onMouseLeave={onMouseLeave}
                            style={{
                              default: {
                                fill: "#E0E0E0",
                                outline: "none"
                              },
                              hover: {
                                fill: "#F3802A",
                                outline: "none"
                              },
                              pressed: {
                                fill: "#F3802A",
                                outline: "none"
                              }
                            }}/>
                        );
                      })
                  }
            </Geographies>
            </ZoomableGroup>
        </ComposableMap>
    </>
  );

}
    
export default ChoroplethMap;
    