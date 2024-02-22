import { connection as db } from "../config/index.js";
import { hash, compare } from "bcrypt";
import { createToken } from "../middleware/AuthenticateUser.js";
class Users {
  fetchUsers(req, res) {
    const qry = `
        SELECT userID,
        firstName,
        lastName,
        gender,
        emailAdd,
        userRole
        FROM Users;
        `;
    db.query(qry, (err, results) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        results,
      });
    });
  }
 
  fetchUser(req, res) {
    const qry = `
    SELECT userID,
    firstName,
    lastName,
    gender,
    emailAdd,
    userRole
    FROM Users;
    WHERE userID = ${req.params.id};
    `;
    db.query(qry, (err, result) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        result,
      });
    });
  }
  async createUser(req, res) {
    // payload
    let data = req.body;
    data.userPwd = await hash(data?.userPwd, 10);
    let user = {
      emailAdd: data.emailAdd,
      userPwd: data.userPwd,
    };
    const qry = `
    INSERT INTO Users
    SET ?;
    `;
    db.query(qry, [data], (error) => {
      if (error) {
        res.json({
          status: res.statusCode,
          msg: "please use another email address",
        });
        console.log(error);
      } else {
        // create a token
        let token = createToken(user);
        res.json({
          status: res.statusCode,
          token,
          msg: "you/'re registered",
        });
      }
    });
  }
 // updateUser
 async updateUser(req, res) {
  const userId = req.params.id;
  const newData = req.body;
  
  const qry = `
    UPDATE Users
    SET ?
    WHERE userID = ${userId};
  `;
  db.query(qry, [newData], (err, result) => {
    if (err) throw err;
    res.json({
      status: res.statusCode,
      msg: "User updated successfully",
    });
  });
}

// deleteUser
async deleteUser(req, res) {
  const userId = req.params.id;
  
  const qry = `
    DELETE FROM Users
    WHERE userID = ${userId};
  `;
  db.query(qry, (err, result) => {
    if (err) throw err;
    res.json({
      status: res.statusCode,
      msg: "User deleted successfully",
    });
  });
}

//login
async loginUser(req, res) {
  const { emailAdd, userPwd } = req.body;
  
  const qry = `
    SELECT * FROM
     Users 
     WHERE emailAdd = ?;
  `;
  db.query(qry, [emailAdd], async (err, results) => {
    if (err) throw err;
    if (results.length === 0) {
      return res.status(400).json({ msg: "Invalid credentials" });
    }
    console.log(err);
    const user = results[0];
    const match = await compare(userPwd, user.userPwd);
    if (!match) {
      return res.status(400).json({ msg: "Invalid credentials" });
    }

    const token = createToken({ emailAdd: user.emailAdd, userId: user.userId });
    res.json({
      status: res.statusCode,
      token,
      msg: "Login successful",
    });
  });
}
  
}

export { Users };