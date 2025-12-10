import 'dotenv/config';
import { DataSource,  } from 'typeorm';

// ? Configuração necessaria para interagir com a cli do typeorm

const dataSource = new DataSource( {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [__dirname + '/../**/*.entity{.js,.ts}'],
  migrations: [__dirname + '/migrations/*.{js,ts}'],
});



export default dataSource;
