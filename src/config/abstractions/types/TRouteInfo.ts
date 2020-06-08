import { ComponentClass, FunctionComponent } from 'react';

type TRouteInfo = {
  name: string
  path: string
  exact: boolean
  Page: ComponentClass,
  Layout: FunctionComponent,
  access: { 
    guest: boolean,
    user: boolean,
    admin: boolean
  }
}

export default TRouteInfo;