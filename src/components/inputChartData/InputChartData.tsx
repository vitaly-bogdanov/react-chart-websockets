import React, { FunctionComponent, CSSProperties, ChangeEvent } from 'react';

const InputChartData: FunctionComponent<{label: string, value: number, color: string, changeData(event: ChangeEvent<HTMLInputElement>, label: string): void }> = props => {

  return (
    <label>
      {props.label}<br/>
      <input 
        value={props.value} 
        style={{borderColor: props.color} as CSSProperties}
        onChange={(event) => props.changeData(event, props.label)}
      />
    </label>
  )
}

export default InputChartData;