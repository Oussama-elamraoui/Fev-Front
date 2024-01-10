import { Try } from "@mui/icons-material";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";

interface UserData {
  id: number;
  email?: string;
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  role: string;
  cin: string;
  token: string;
}

var mock = new MockAdapter(axios);

export function configureFakeBackend() {
  let users: UserData[] = [

  ];
  // mock.onPost("/login/").reply(async function (config) {
  //   try {
  //     const response = await axios.post('http://127.0.0.1:8000/api/login', {
  //       credential: 'AA111153',
  //       password: '123456'
  //     }, {
  //       headers: {
  //         'Accept': 'application/json',
  //         'Content-Type': 'application/json',
  //         // 'X-CSRF-TOKEN': csrfToken,
  //       },
  //     });

  //     console.log(response.data);

  //     return [200, response.data];
  //   } catch (error) {
  //     console.error(error);
  //     return [500, { message: "Internal Server Error" }];
  //   }
  // });
  mock.onPost("/login/").reply(async function (config) {
    let params = JSON.parse(config.data);
    try {
      const response = await fetch('https://backend.hnam3ak.ma/api/login', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          // 'X-CSRF-TOKEN': csrfToken,
        },
        body: JSON.stringify({
          credential: params.email,
          password: params.password
        })
      })
        .then(response => response.json())
        .then(res => (users.push({
          id: res.user.id,
          email: res.user.email,
          username: res.user.fullName,
          password: '123456',
          firstName: res.user.fullName,
          lastName: res.user.fullName,
          cin: res.user.cin,
          role: res.user.role,
          //token:'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjb2RlcnRoZW1lcyIsImlhdCI6MTU4NzM1NjY0OSwiZXhwIjo'
          token: res.token + "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjb2RlcnRoZW1lcyIsImlhdCI6MTU4NzM1NjY0OSwiZXhwIjoxOTAyODg5NDQ5LCJhdWQiOiJjb2RlcnRoZW1lcy5jb20iLCJzdWIiOiJzdXBwb3J0QGNvZGVydGhlbWVzLmNvbSIsImxhc3ROYW1lIjoiVGVzdCIsIkVtYWlsIjoic3VwcG9ydEBjb2RlcnRoZW1lcy5jb20iLCJSb2xlIjoiQWRtaW4iLCJmaXJzdE5hbWUiOiJIeXBlciJ9.P27f7JNBF-vOaJFpkn-upfEh3zSprYfyhTOYhijykdI",
        }),
          console.log(res.token)
        ))
    } finally {

      return new Promise(async function (resolve, reject) {

        setTimeout(function () {
          // get parameters from post request
          
          // find if any user matches login credentials
          let filteredUsers = users.filter((user) => {
            return (
              user.email === params.email && user.password == params.password
            );
          });
          console.log(filteredUsers)
          if (filteredUsers.length) {
            // if login details are valid return user details and fake jwt token
            let user = filteredUsers[0];
            resolve([200, user]);
          } else {
            // else return error
            resolve([401, { message: "Username or password is incorrect" }]);
          }
        }, 1000);
      })
    };
  });

  mock.onPost("/register/").reply(function (config) {
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        // get parameters from post request
        let params = JSON.parse(config.data);

        // add new users
        let [firstName, lastName] = params.fullname.split(" ");
        let newUser: UserData = {
          id: users.length + 1,
          username: firstName,
          cin: 'e',
          password: params.password,
          firstName: firstName,
          lastName: lastName,
          role: "Admin",
          token:
            "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjb2RlcnRoZW1lcyIsImlhdCI6MTU4NzM1NjY0OSwiZXhwIjoxOTAyODg5NDQ5LCJhdWQiOiJjb2RlcnRoZW1lcy5jb20iLCJzdWIiOiJzdXBwb3J0QGNvZGVydGhlbWVzLmNvbSIsImxhc3ROYW1lIjoiVGVzdCIsIkVtYWlsIjoic3VwcG9ydEBjb2RlcnRoZW1lcy5jb20iLCJSb2xlIjoiQWRtaW4iLCJmaXJzdE5hbWUiOiJIeXBlciJ9.P27f7JNBF-vOaJFpkn-upfEh3zSprYfyhTOYhijykdI",
        };
        users.push(newUser);

        resolve([200, newUser]);
      }, 1000);
    });
  });

  mock.onPost("/forget-password/").reply(function (config) {
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        // get parameters from post request
        let params = JSON.parse(config.data);

        // find if any user matches login credentials
        let filteredUsers = users.filter((user) => {
          return user.email === params.email;
        });

        if (filteredUsers.length) {
          // if login details are valid return user details and fake jwt token
          let responseJson = {
            message:
              "We've sent you a link to reset password to your registered email.",
          };
          resolve([200, responseJson]);
        } else {
          // else return error
          resolve([
            401,
            {
              message:
                "Sorry, we could not find any registered user with entered username",
            },
          ]);
        }
      }, 1000);
    });
  });
}