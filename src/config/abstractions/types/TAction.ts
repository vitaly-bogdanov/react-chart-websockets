type TAction<actionType, payloadType> = {
  type: actionType,
  payload: payloadType 
}

export default TAction;