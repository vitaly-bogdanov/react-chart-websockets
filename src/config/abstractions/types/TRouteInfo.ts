import { ComponentClass, FunctionComponent, FC } from 'react';

type TRouteInfo = {
  name: string
  path: string
  exact: boolean
  Page: ComponentClass,
  Layout: FunctionComponent | FC
  access: { 
    guest: boolean,
    user: boolean,
    admin: boolean
  }
}

export default TRouteInfo;