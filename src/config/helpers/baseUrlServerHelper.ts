import { domainServerApi, port, protocol } from '../constants';

const baseUrlServerHelper = (path: string): string => {
  return `${protocol}://${domainServerApi}:${port}/${path}`;
}

export default baseUrlServerHelper;