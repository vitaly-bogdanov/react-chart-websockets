import { ComponentClass } from 'react';

type TRouteInfo = {
  name: string
  path: string
  exact: boolean
  component: ComponentClass
  access: { 
    guest: boolean,
    user: boolean,
    admin: boolean
  }
}

export default TRouteInfo;