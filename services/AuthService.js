const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const prisma = new PrismaClient();
const saltRounds = 10;


// User Register
module.exports.Register = (registerData) => {
    return new Promise(async (resolve, reject) => {
        try {
            const hashedPass = await bcrypt.hash(registerData.password, saltRounds);

            const user = await prisma.user.create({
                data: {
                    email: registerData.email,
                    userName: registerData.userName,
                    address: registerData.address,
                    password: hashedPass,
                },
            });

            resolve({
                message: "User created successfully",
                success: true,
                data: user
            });
        } catch (error) {
            console.error("Login error:", error); 
            if (error.code === 'P2002') {
                resolve({
                    message: "Email already exists",
                    success: false
                });
            } else {
                reject({
                    message: "Internal Server Error",
                    success: false
                });
            }
        }
    });
};


//User Login
module.exports.Login = (loginData) => {
    return new Promise(async (resolve, reject) => {
        try {
            const user = await prisma.user.findUnique({
                where: { email: loginData.email },
            });
            if (!user) {
                resolve({
                    message: "Invalid email",
                    success: false
                });
                return;
            }
            const passwordMatch = await bcrypt.compare(loginData.password, user.password);
            if (!passwordMatch) {
                resolve({
                    message: "Invalid password",
                    success: false
                });
                return;
            }
            const token = jwt.sign(
                { email: user.email, id: user.id, userName: user.userName },
                process.env.SECRET_KEY,
                { expiresIn: "24h" }
            );
            resolve({
                message: "Login successful",
                token: token,
                success: true,
            });

        } catch (err) {
            console.error("Login error:", err); 

            reject({  
                message: "Internal Server Error",
                success: false
            });
        }
    });
};
