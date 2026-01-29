const request = require ("supertest")
require("dotenv").config();

const BASE_URL = `http://localhost:${process.env.PORT || 3000}`;

describe(`register user`, ()=>{
    it(`should create a new user`, async ()=>{
        const uniqueUsername = `testuser${Date.now()}`;
        const uniqueEmail = `unique${Date.now()}@gmail.com`;

        const res = await request(BASE_URL)
        .post(`/api/auth/register`)
        .send({
            username : uniqueUsername,
            email : uniqueEmail,
            password : 'securepassword123',
            role : 'admin'
        });

        expect(res.body.success).toBe(true);
        expect(res.body.message).toBe('User added successfully');
        expect(res.body.user.email).toBe(uniqueEmail);
    })
})

describe(`login user`, ()=>{
    it(`should login a user`, async()=>{
        const res = await request(BASE_URL)
        .post(`/api/auth/login`)
        .send({
            email : 'abc@mailinator.com',
            password : 'Pa$$w0rd!'
        });

        expect(res.body.success).toBe(true);
        expect(res.body.message).toBe('login successful')
    })
})