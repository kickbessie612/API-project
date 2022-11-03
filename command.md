### create a Users table

```
npx sequelize model:generate --name User --attributes username:string,email:string,hashedPassword:string
```

### migrate the Users table

```
npx dotenv sequelize db:migrate
```

### generate a user seeder file for the demo user

```
npx sequelize seed:generate --name demo-user
```
