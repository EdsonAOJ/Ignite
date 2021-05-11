import { Connection, createConnection, getConnectionOptions } from 'typeorm';

export default async (host = 'database'): Promise<Connection> => {
  const defatulOprions = await getConnectionOptions();
  return createConnection(
    Object.assign(defatulOprions, {
      host,
    })
  );
};
