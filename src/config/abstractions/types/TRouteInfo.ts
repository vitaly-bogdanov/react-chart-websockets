import { ComponentClass } from 'react';

interface TRouteInfo {
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