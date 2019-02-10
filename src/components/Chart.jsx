import React from 'react'
import { VictoryArea, VictoryChart, VictoryTheme } from 'victory';



export const Chart = ({ data }) => {
  if(!data) return ''
  return (
    <div style={{width: '50%'}}>
       <VictoryChart
        animate={{ duration: 1000 }}
        theme={VictoryTheme.material}
        >
        <VictoryArea
          interpolation="natural"
          style={{ data: { fill: "#8E4A49" } }}
          data={data}
        />
      </VictoryChart>
    </div>
   
  )
}