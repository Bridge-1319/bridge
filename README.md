# bridge
npx prisma init
npm i prisma -D
npx prisma migrate dev 
npx prisma migrate push
npx prisma migrate deploy
npx prisma migrate dev --name init

for changes
npx prisma generate
npx prisma migrate dev --name name_change

nest g module database
nest g service database
nest g resource employees
