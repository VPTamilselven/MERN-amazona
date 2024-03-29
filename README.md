#  MERN AMAZONA

1. Create react app amazona

2. Create Git Repository

3. List Products
    1. create products array
    2. Add product photo
    3. render product
    4. style product

4. Add routing
    1. npm i react-router-dom
    2. create route for home screen
    3. create routes for product screen

5. Create Node.Js Server
    1. run npm init in root folder
    2. Update package.json set type: module
    3. Add .js to imports
    4. npm install express
    5. create server.js
    6. add start command as node backend/server.js
    7. require express
    8. create route for / result backend is ready
    9. move products.js from frontend to backend
    10. create route for /api/products
    11. return products
    12. run npm start
    
6. Fetch Products From Backend
    1. set proxy in package.json
    2. npm install axios
    3. use state hook
    4. use effect hook
    5. use reducer hook

7. Manage State By Reducer Hook
    1. define reducer
    2. update fetch data
    3. get state from usReducer

8. Add bootstrap UI Framework
    1. npm install react-bootstrap bootstrap
    2. update App.js

9. Create Product and Rating Component
    1. create Rating Component
    2. create Product Component
    3. Use Rating Component in Product Component

10. Create Product Details Screen
    1. fetch product from backend
    2. create 3 columns for image, info and action

11. Create Loading and Message Component
    1. create loading component
    2. use spinner component
    3. create message component
    4. create utils.js to define getError function

12.  Implement Add To Cart
    1. Create React Context
    2. define reducer
    3. create store provider
    4. implement add to cart button click handler

13. Complete Add To Cart
    1. check exist item in the cart
    2. check count in stock in backend

14. Create Cart Screen
    1. create 2 columns
    2. display items list
    3. create action column

15. Complete Cart Screen
    1. click handler for inc/dec item
    2. Click handler for remove item
    3. click handler for checkout

16. Create Sign-in Screen
    1. create sign in form
    2. add email and password
    3. ass sign-in button
   
17. Connect To MongoDB Database
    1. create atlas mongodb database
    2. install local mongodb database
    3. npm install mongodb
    4. connect to MongoDB database

18. Seed Sample Date
    1. create Product model
    2. create User model
    3. create seed route
    4. use route in server.js
    5. seed sample product 

19. Seed Sample User
    1. create User model
    2. seed sample route
    3. create user routesToken

20. Complete SignIn Screen
    1. handle submit action
    2. save token in store and local storage
    3. show user name in header

21. Create Shipping Screen
    1. create from inputs
    2. handle save shipping address
    3. add checkout wizard bar

22. Create Sign Up Screen
    1. create input forms
    2. handle submit
    3. create backend api

23. Implement Select Payment Method Screen
    1. create input forms
    2. handle submit

24. Create Place Order Screen
    1. show cart item, payment and address
    2. handle place order action
    3. create order create api

25. Implement Place Order Action
    1. handle place order action
    2. create order create api

26. Create Order Screen
    1. Create backend api for order/:id
    2. fetch order api in frontend
    3. show order information in 2 columns

27. Pay Order By PayPal
    1. generate paypal client id
    2. create api to return client id
    3. install react-paypal-js
    4. use PayPalScriptProvider in index.js
    5. use usePaypalScriptReducer in OrderScreen
    6. implement loadPaypalScript function
    7. render paypal button
    8. implement onApprove Payment function
    9. create pay order api in backend

28. Display Order History
    1. create order screen
    2. create order history
    3. use api in the frontend

29. Create Profile Screen
    1. get user info from context
    2. show user information 
    3. create user update api
    4. update user Info

30. Add Sidebar and Search Box
    1. add sidebar
    2. add search box

