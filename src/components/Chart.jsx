import React from 'react'
import { VictoryArea, VictoryChart, VictoryTheme } from 'victory';



export const Chart = ({ data }) => {
  if(!data) return ''
  return (
    <div style={{width: '50%'}}>
       <VictoryChart
        theme={VictoryTheme.material}
        >
        <VictoryArea
          interpolation="natural"
          style={{ data: { fill: "#c43a31" } }}
          data={data}
        />
      </VictoryChart>

    </div>
   
  )
}