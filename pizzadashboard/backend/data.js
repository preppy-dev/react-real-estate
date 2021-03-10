import bcrypt from 'bcrypt'
const data = {
  users:[
      {
        name:'Zeus',
        email:'admin@cleversystems.com.br',
        password:bcrypt.hashSync('12345', 8),
        isAdmin:'true',
      },
      {
        name:'client1',
        email:'clien1@gmail.com',
        password:bcrypt.hashSync('12345', 8),
        isAdmin:'false',
      },
  ],
}

export default data;